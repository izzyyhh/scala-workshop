package exercise2

/** Implement stand-alone functions for your solutions.
  * REMARK: Try to make all functions tail recursive; use the annotation to proof it.
  * 
  * A function is tail recursive if if:
  *   1. it is single direct recursion
  *   2. the last expression is the recursive call
  */
object RecursiveFunctions {
  /** a) Write a function that appends one list to another: */
  def append[A](l: List[A], r: List[A]): List[A] = ???

  /** b) Write a function that reverses a list: */
  def reverse[A](list: List[A]): List[A] = ???

  /** c) Write a function that applies a function to every value of a list: */
  def map[A, B](list: List[A], f: A => B): List[B] = ???

  /** d) Write a function that applies a function to every value of a list:
   *
   * it gets a function which creates a new `List[B]` for every element of type A in
   * the list. Therefore, you generate a `List[List[B]]`. You have to flatten this
   *    structure.
   */
  def flatMap[A, B](list: List[A], f: A => List[B]): List[B] = ???

  /** e) Question: Is it possible to write a tail recursive map function for `Tree`s? If no, why and are you sure :) ? */
}
