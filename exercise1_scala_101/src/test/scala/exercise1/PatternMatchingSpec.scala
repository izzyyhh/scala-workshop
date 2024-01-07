package exercise1

import exercise1.PatternMatching._

class PatternMatchingSpec extends munit.FunSuite {
  test("Ints to Strings") {
    assertEquals(intToString(1), "it is one")
    assertEquals(intToString(2), "it is two")
    assertEquals(intToString(3), "it is three")

    assertEquals(intToString(5), "what's that")
    assertEquals(intToString(8), "what's that")
  }

  test("is it Max or Moritz") {
    assertEquals(isMaxOrMoritz("Max"), true)
    assertEquals(isMaxOrMoritz("max"), true)

    assertEquals(isMaxOrMoritz("Moritz"), true)
    assertEquals(isMaxOrMoritz("moritz"), true)

    assertEquals(isMaxOrMoritz("Joe"), false)
    assertEquals(isMaxOrMoritz("Jim"), false)
    assertEquals(isMaxOrMoritz("mAx"), false)
  }

  test("is a number even") {
    assertEquals(isEven(2), true)
    assertEquals(isEven(3), false)
    assertEquals(isEven(6), true)
    assertEquals(isEven(7), false)
  }

  test("rock paper scissors, does player a win") {
    assertEquals(winsA(Rock, Scissor), Win)
    assertEquals(winsA(Scissor, Paper), Win)
    assertEquals(winsA(Paper, Rock), Win)

    assertEquals(winsA(Rock, Rock), Draw)
    assertEquals(winsA(Scissor, Scissor), Draw)
    assertEquals(winsA(Paper, Paper), Draw)

    assertEquals(winsA(Rock, Paper), Lose)
    assertEquals(winsA(Scissor, Rock), Lose)
    assertEquals(winsA(Paper, Scissor), Lose)
  }

  test("extract mammal weight") {
    assertEquals(extractMammalWeight(Mammal("cat", Meat, 10)), 10)
    assertEquals(extractMammalWeight(Mammal("cat", Meat, 20)), 20)
    assertEquals(extractMammalWeight(Mammal("cat", Meat, 30)), 30)
    assertEquals(extractMammalWeight(Mammal("cat", Meat, -1)), -1)

    assertEquals(extractMammalWeight(Bird("parrot", Vegetables)), -1)
    assertEquals(extractMammalWeight(Fish("goldfish", Plants)), -1)
  }

  test("update food") {
    assertEquals(updateFood(Bird("parrot", Vegetables)), Bird("parrot", Plants))
    assertEquals(updateFood(Fish("goldfish", Plants)), Fish("goldfish", Plants))
    assertEquals(updateFood(Mammal("cat", Meat, 10)), Mammal("cat", Meat, 10))
  }
}
