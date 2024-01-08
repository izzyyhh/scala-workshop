package exercise2

import exercise2.RecursiveData._

object RecursiveDataSpec extends munit.FunSuite {
  test("list empty") {
    assertEquals(isListEmpty(Nil()), true)
    assertEquals(isListEmpty(Cons(1, Nil())), false)
    assertEquals(isListEmpty(Cons(1, Cons(2, Nil()))), false)
  }

  test("list head") {
    assertEquals(listHead(Nil()), -1)
    assertEquals(listHead(Cons(1, Nil())), 1)
    assertEquals(listHead(Cons(2, Cons(1, Nil()))), 1)
  }

  test("tree") {
    // val tree = Node(Leaf(1), Node(Leaf(2), Leaf(3)))
  }
}
