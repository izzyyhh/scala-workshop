package exercise2

import exercise2.Compositions._

class CompositionsSpec extends munit.FunSuite {
  def double(a: Int): Double  = a * 2.0
  def show(d: Double): String = d.toString
  def prefix(s: String): String = "AWESOME " + s

  test("composition") {
    assertEquals(compose(double)(show)(prefix)(1), "AWESOME 2.0")
  }

  def doubleOpt(a: Int): Option[Double]  = Some(a * 2.0)
  def showOpt(d: Double): Option[String] = Some(d.toString)

  test("map and flatMap") {
    assertEquals(mapFlatMap(doubleOpt)(showOpt)(prefix)(Some(1)), Some("AWESOME 2.0"))
  }

  test("for-comprehension") {
    assertEquals(forComprehension(doubleOpt)(showOpt)(prefix)(Some(1)), Some("AWESOME 2.0"))
  }
}
