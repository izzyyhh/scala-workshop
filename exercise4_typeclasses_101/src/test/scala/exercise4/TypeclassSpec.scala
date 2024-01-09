package exercise4

import org.scalacheck.Prop._
import org.scalacheck.Properties

object TypeclassSpec extends Properties("Map") {
  property("string reverse") = forAll { string: String =>
    Typeclasses.testReversableString(string) ?= Typeclasses.testReversableString(string)
  }

  property("smash int") = forAll { inp: (Int, Int) =>
    Typeclasses.testSmashInt(inp._1, inp._2) ?= Typeclasses.testSmashInt(inp._1, inp._2)
  }

  property("smash double") = forAll { inp: (Double, Double) =>
    Typeclasses.testSmashDouble(inp._1, inp._2) ?= Typeclasses.testSmashDouble(inp._1, inp._2)
  }

  property("smash string") = forAll { inp: (String, String) =>
    Typeclasses.testSmashString(inp._1, inp._2) ?= Typeclasses.testSmashString(inp._1, inp._2)
  }
}
