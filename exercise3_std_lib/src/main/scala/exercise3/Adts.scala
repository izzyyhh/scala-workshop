package exercise3

import scala.util.Try

/** Implement stand-alone functions as solutions.
 *
 * {{{
 * List(1, 2) match {
 *   case head :: tail => ???
 *   case Nil          => ???
 *   case l            => ???
 * }
 * }}}
 *
 * {{{
 * Option(1) match {
 *  case Some(a) => ???
 *  case None    => ???
 * }}}
 * }
 *
 * {{{
 * Either.cond(true, 1, "right") match {
 *  case Left(i)  => ???
 *  case Right(s) => ???
 * }}}
 * }
 *
 * {{{
 * Try(impureExpression()) match {
 *  case Success(a)     => ???
 *  case Failure(error) => ???
 * }}}
 * }
 *
 * `Try(impureExpression()).toEither`
 */
object Adts {

  /** a) Given a List[Int] return the nth element */
  def getNth(list: List[Int], n: Int): Option[Int] = ???

  /** b) Double the given number. */
  def double(n: Option[Int]): Option[Int] = ???

  /** c) Check if a given Int is even. If so, return it as a Right. Otherwise, return `Left("Not an even number.")`. */
  def isEven(n: Int): Either[String, Int] = ???

  /** d) Safe division for Integers. Return Right with the result or `Left("You cannot divide by zero.")`. */
  def safeDivide(a: Int, b: Int): Either[String, Int] = ???

  /** e) Given an impure function handle its Exceptions and recover from them by returning 0. */
  def goodOldJava(impure: String => Int, arg: String): Try[Int] = ???
}
