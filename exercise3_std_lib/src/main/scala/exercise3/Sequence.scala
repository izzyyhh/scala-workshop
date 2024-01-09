package exercise3

/** Write your solutions in the test functions.
  * 
  * Seq(1, 2) match {
  *   case firstElement      +: remainingElements => ???
 *    case remainingElements :+ lastElement      => ???
  *   case Nil          => ???
  *   case s            => ???
  * }
 *
 * [[https://www.scala-lang.org/api/2.13.0/scala/collection/Seq.html]]
 *
 * NOTE: write tail recursive functions if possible
 *
 * NOTE: try to use the methods you have seen so far
 */
object Sequence {

  /** a) Find the last element of a Seq. */
  def lastElement[A](seq: Seq[A]): Option[A] = ???

  /** b) Zip two Seqs (e.g. Seq(1, 2) and Seq(3, 4) become Seq((1, 3), (2, 4))) - when one Seq is longer ignore the remaining elements. */
  def zip[A](a: Seq[A], b: Seq[A]): Seq[(A, A)] = ???

  /** c) Check if a condition holds for all elements in Seq. */
  def forAll[A](seq: Seq[A])(cond: A => Boolean): Boolean = ???

  /** d) Is Seq a palindrome, e.g. Seq(1, 2, 3, 2, 1)? */
  def palindrome[A](seq: Seq[A]): Boolean = ???

  /** e) Implement flatMap with foldLeft. */
  def flatMap[A, B](seq: Seq[A])(f: A => Seq[B]): Seq[B] = ???
}
