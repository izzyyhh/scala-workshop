package exercise5

import org.scalacheck.Prop._
import org.scalacheck.Properties

object KernelSpec extends Properties("kernel") {

  property("String equality") = forAll { (x: String, y: String, eq: Boolean) =>
    if (eq)
      Kernel.testEqString(x, x) ?= Kernel.testEqString(x, x)
    else
      Kernel.testEqString(x, y) ?= Kernel.testEqString(x, y)
  }

  property("Int comparison") = forAll { (x: Int, y: Int, eq: Boolean) =>
    if (eq)
      Kernel.testCompareInt(x, x) ?= Kernel.testCompareInt(x, x)
    else
      Kernel.testCompareInt(x, y) ?= Kernel.testCompareInt(x, y)
  }

  property("List combination") = forAll { (x: List[Int], y: List[Int]) =>
    Kernel.testCombineLists(x, y) ?= Kernel.testCombineLists(x, y)
  }
}
