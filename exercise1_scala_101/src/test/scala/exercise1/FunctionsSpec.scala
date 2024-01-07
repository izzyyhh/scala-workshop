package exercise1

class FunctionsSpec extends munit.FunSuite {
  test("circle") {
    assertEquals(Functions.circle(1), 3.141592653589793)
    assertEquals(Functions.circle(2), 12.566370614359172)
    assertEquals(Functions.circle(3), 28.274333882308138)
  }

  test("rectangleCurried") {
    assertEqualsDouble(Functions.rectangleCurried(1)(2), 2, 0)
    assertEqualsDouble(Functions.rectangleCurried(2)(3), 6, 0)
    assertEqualsDouble(Functions.rectangleCurried(3)(4), 12, 0)
  }

  test("rectanglePartial") {
    val rectangleWithFixedSide = Functions.rectangleCurried(2) _

    assertEqualsDouble(rectangleWithFixedSide(3), 6, 0)
    assertEqualsDouble(rectangleWithFixedSide(4), 8, 0)
    assertEqualsDouble(rectangleWithFixedSide(5), 10, 0)
  }

  test("rectangleUncurried") {
    assertEqualsDouble(Functions.rectangleUncurried(1, 2), 2, 0)
    assertEqualsDouble(Functions.rectangleUncurried(2, 3), 6, 0)
    assertEqualsDouble(Functions.rectangleUncurried(3, 4), 12, 0)
  }

  test("rectangleUnderscore") {
    assertEqualsDouble(Functions.rectangleUnderscore(1, 2), 2, 0)
    assertEqualsDouble(Functions.rectangleUnderscore(2, 3), 6, 0)
    assertEqualsDouble(Functions.rectangleUnderscore(3, 4), 12, 0)
  }
}
