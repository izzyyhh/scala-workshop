package exercise3

import scala.annotation.tailrec

object SequenceSolution {

  @tailrec
  def lastElement[A](seq: Seq[A]): Option[A] = seq match {
    case Nil => None
    case last +: Nil => Some(last)
    case _ +: tail => lastElement(tail)
  }

  def zip[A](a: Seq[A], b: Seq[A]): Seq[(A, A)] = (a, b) match {
    case (Nil, Nil) | (Nil, _) | (_, Nil) => Nil
    case (headA +: tailA, headB +: tailB) => Seq((headA, headB)) ++ zip(tailA, tailB)
  }

  @tailrec
  def forAll[A](seq: Seq[A])(cond: A => Boolean): Boolean = seq match {
    case Nil => true
    case head +: tail if cond(head) => forAll(tail)(cond)
    case _ => false
  }

  @tailrec
  def palindrome[A](seq: Seq[A]): Boolean = seq match {
    case Nil => true
    case _ +: Nil => true
    case head +: middle :+ last if head == last => palindrome(middle)
    case _ => false
  }

  def flatMap[A, B](seq: Seq[A])(f: A => Seq[B]): Seq[B] = seq.foldLeft(Seq[B]())((agg, c) => agg ++ f(c))
}
