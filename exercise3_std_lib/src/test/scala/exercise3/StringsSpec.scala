package exercise3

class StringsSpec extends munit.FunSuite {

  test("uppercase") {
    assertEquals(Strings.upperCase("abc"), "ABC")
  }

  test("interpolation 1") {
    assertEquals(Strings.interpolations("John", 42), "Hi my name is John and I am 42 years old.")
  }

  test("interpolation 2 (computation)") {
    assertEquals(Strings.computation(1, 2),
      """
        |Hi,
        |now follows a quite hard calculation. We try to add:
        |  a := 1
        |  b := 2
        |
        |  result is 3
      """.stripMargin.trim)
  }

  test("take two") {
    assertEquals(Strings.takeTwo("abc"), "ab")
    assertEquals(Strings.takeTwo("a"), "a")
    assertEquals(Strings.takeTwo(""), "")
  }
}
