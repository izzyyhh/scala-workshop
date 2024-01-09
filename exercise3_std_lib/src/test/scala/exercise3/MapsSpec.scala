package exercise3

import scala.util.Try

class MapsSpec extends munit.FunSuite {

  import Maps._

  test("count by race") {
    assertEquals(
      countRace(Map(
        "Legolas" -> "Elf",
        "Bilbo Baggins" -> "Hobbit",
        "Gandalf" -> "Wizard",
        "Frodo Baggins" -> "Hobbit",
        "Samwise Gamgee" -> "Hobbit",
        "Elrond" -> "Elf",
        "Peregrin Took" -> "Hobbit",
      )),
      Map("Elf" -> 2, "Hobbit" -> 4, "Wizard" -> 1)
    )
  }

  test("number of Baggins") {
    assertEquals(
      countBaggins(Map(
        "Legolas" -> "Elf",
        "Bilbo Baggins" -> "Hobbit",
        "Gandalf" -> "Wizard",
        "Frodo Baggins" -> "Hobbit",
        "Samwise Gamgee" -> "Hobbit",
        "Elrond" -> "Elf",
        "Peregrin Took" -> "Hobbit",
      )),
      2
    )
  }

  test("underaged") {
    assertEquals(
      underaged(Map(
        "Gandalf" -> 2019,
        "Galadriel" -> 7000,
        "Bilbo Baggins" -> 1000,
        "Frodo Baggins" -> 33,
        "Samwise Gamgee" -> 38,
        "Elrond" -> 3000,
        "Peregrin Took" -> 29,
      )),
      Map(
        "Gandalf" -> 2019,
        "Galadriel" -> 7000,
        "Elrond" -> 3000,
        "Bilbo Baggins" -> 1000,
      )
    )
  }
}
