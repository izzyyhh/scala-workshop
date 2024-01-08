package exercise2

import exercise2.RecursiveFunctions._

class RecursiveFunctionsSpec extends munit.FunSuite {
  test("append lists") {
    assertEquals(
      append(Nil(), Nil()),
      Nil()
    )
    assertEquals(
      append(Nil(), Cons(1, Nil())),
      Cons(1, Nil())
    )
    assertEquals(
      append(Cons(1, Nil()), Nil()),
      Cons(1, Nil())
    )
    assertEquals(
      append(Cons(1, Nil()), Cons(2, Nil())),
      Cons(1, Cons(2, Nil()))
    )
  }

  test("reverse lists") {
    assertEquals(
      reverse(Nil()),
      Nil()
    )
    assertEquals(
      reverse(Cons(1, Nil())),
      Cons(1, Nil())
    )
    assertEquals(
      reverse(Cons(1, Cons(2, Nil()))),
      Cons(2, Cons(1, Nil()))
    )
    assertEquals(
      reverse(Cons(1, Cons(2, Cons(3, Nil())))),
      Cons(3, Cons(2, Cons(1, Nil())))
    )
  }

  test("map values") {
    val mapFn: Int => String = (a: Int) => "x" * a

    assertEquals(
      map(Nil(), mapFn),
      Nil[String]()
    )
    assertEquals(
      map(Cons(1, Nil()), mapFn),
      Cons("x", Nil())
    )
    assertEquals(
      map(Cons(1, Cons(2, Nil())), mapFn),
      Cons("x", Cons("xx", Nil()))
    )
  }

  test("flatMap values") {
    val flatMapFn: Int => List[String] = (a: Int) => {
      Cons("x" * a,
        Cons("y" * a,
          Nil[String]())
      )
    }

    assertEquals(
      flatMap(Nil(), flatMapFn),
      Nil[String]()
    )
    assertEquals(
      flatMap(Cons(1, Nil()), flatMapFn),
      Cons("x", Cons("y", Nil()))
    )
    assertEquals(
      flatMap(Cons(1, Cons(2, Nil())), flatMapFn),
      Cons("x", Cons("y", Cons("xx", Cons("yy", Nil()))))
    )
  }
}
