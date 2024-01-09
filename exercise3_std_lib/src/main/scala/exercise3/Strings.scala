package exercise3

import scala.collection.StringOps

/** Write your solutions in the test functions.
  *
 * [[https://www.scala-lang.org/api/2.13.12/scala/collection/StringOps.html]]
  */
object Strings {

  /** a) Map all Chars into upper case (don't use [[StringOps.capitalize]]). */
  def upperCase(str: String): String = ???

  /** b) Interpolate the following values in the String:
   * {{{
   * Hi my name is <name> and I am <age> years old.
   * }}}
   */
  def interpolations(name: String, age: Int): String = ???

  /** c) Add two numbers as interpolation in the following multiline String:
   * {{{
   * Hi,
   * now follows a quite hard calculation. We try to add:
   *   a := <value of a>
   *   b := <value of b>
   *
   *   result is <a + b>
   * }}}
   */
  def computation(a: Int, b: Int): String = ???

  /** d) Has the String length >= two? If so return the first two Chars as String otherwise the whole String. */
  def takeTwo(str: String): String = ???
}
