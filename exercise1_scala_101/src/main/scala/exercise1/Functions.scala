package exercise1

/** Write your solutions as stand-alone functions. 
  * 
  * Syntax:
  *   // method
  *   def myFunction(param0: Int, param1: String): Double = // body expression
  * 
  *   // value
  *   val myFunction: (Int, String) => Double (param0, param1) => // body expression
  */
object Functions {

  /** a) Write a function which calculates the area of a circle. */
  def circle(r: Double): Double = r * r * math.Pi

  /** b) Write a curried function which calculates the area of a rectangle a * b. */
  def rectangleCurried(a: Double)(b: Double): Double = a * b

  /** c) Write an uncurried rectangle function using [[rectangleCurried]]. */
  def rectangleUncurried(a: Double, b: Double): Double = rectangleCurried(a)(b)

  /** d) Write an anonymous rectangle function. */
  val rectangleUnderscore: (Double, Double) => Double = (a, b) => a * b
}
