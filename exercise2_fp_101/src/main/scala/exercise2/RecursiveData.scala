package exercise2

sealed trait List[A]
case class Cons[A](head: A, tail: List[A]) extends List[A]
case class Nil[A]() extends List[A]

/** Write your solutions as stand-alone functions. */
object RecursiveData {
  /** a) Implement a function which determines if a `List[Int]` is empty or not. */
  def isListEmpty(list: List[Int]): Boolean = list match {
    case Nil() => true
    case Cons(_, _) => false
  }

  /** b) Implement a function which gets the head of a `List[Int]` or returns -1 if empty. */
  def listHead(list: List[Int]): Int = list match {
    case Nil() => -1
    case Cons(head, _) => head
  }

  /** c) Can we change `List[A]` to guarantee to be not-empty? */


  /** d) Implement a generic Tree which has its values in the leafs and consists of:
   *      node - left and right Tree
   *      leaf - a value of type A
   */
}
