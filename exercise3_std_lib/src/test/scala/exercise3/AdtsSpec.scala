package exercise3

import scala.util.Success

class AdtsSpec extends munit.FunSuite {

  test("get nth element") {
    assertEquals(
      Adts.getNth(List(1, 2, 3), 0),
      Some(1)
    )
    assertEquals(
      Adts.getNth(List(1, 2, 3), 2),
      Some(3)
    )
    assertEquals(
      Adts.getNth(List(1, 2, 3), 4),
      None
    )
    assertEquals(
      Adts.getNth(List(1, 2, 3), -1),
      None
    )
    assertEquals(
      Adts.getNth(List(), 3),
      None
    )
  }

  test("double optional number") {
    assertEquals(
      Adts.double(Some(2)),
      Some(4)
    )
    assertEquals(
      Adts.double(None),
      None
    )
  }

  test("is an even number") {
    assertEquals(
      Adts.isEven(2),
      Right(2)
    )
    assertEquals(
      Adts.isEven(3),
      Left("Not an even number")
    )
  }

  test("safe divide") {
    assertEquals(
      Adts.safeDivide(4, 2),
      Right(2)
    )
    assertEquals(
      Adts.safeDivide(4, 0),
      Left("You cannot divide by zero.")
    )
  }

  test("good old unsafe code") {
    assertEquals(
      Adts.goodOldJava(_.toInt, "2"),
      Success(2)
    )
    assertEquals(
      Adts.goodOldJava(_.toInt, "a"),
      Success(0)
    )
  }
}
