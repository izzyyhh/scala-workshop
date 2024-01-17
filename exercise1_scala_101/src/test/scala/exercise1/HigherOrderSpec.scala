package exercise1

class HigherOrderSpec extends munit.FunSuite {

  test("n-times (plus, multiply)") {
    assertEquals(HigherOrder.nTimes(HigherOrder.plus, 2, 3, n = 5), expected = 25)
    assertEquals(HigherOrder.nTimes(HigherOrder.multiply, 2, 3, n = 5), expected = 30)
  }

  test("n-times (max, anonymous function)") {
    assertEquals(HigherOrder.anonymousNTimes(5, 2, n = 3), expected = 15)
    assertEquals(HigherOrder.anonymousNTimes(5, 6, n = 3), expected = 18)
  }
}
