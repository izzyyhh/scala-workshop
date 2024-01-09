package exercise3

class SequenceSpec extends munit.FunSuite {

  test("last element") {
    assertEquals(Sequence.lastElement(Seq.empty), None)

    assertEquals(Sequence.lastElement(Seq(1, 2, 3)), Some(3))
  }

  test("zip") {
    assertEquals(Sequence.zip(Seq(1), Seq.empty), Seq.empty)

    assertEquals(Sequence.zip(Seq(1, 2), Seq(3, 4)), Seq((1, 3), (2, 4)))
    assertEquals(Sequence.zip(Seq(1, 2, 3), Seq(4, 5)), Seq((1, 4), (2, 5)))
    assertEquals(Sequence.zip(Seq(1, 2), Seq(3, 4, 5)), Seq((1, 3), (2, 4)))
  }

  test("for all") {
    assertEquals(Sequence.forAll(Seq.empty[Int])(_ > 0), true)

    assertEquals(Sequence.forAll(Seq(1, 2, 3))(_ > 0), true)
    assertEquals(Sequence.forAll(Seq(1, 2, 3))(_ > 1), false)
  }

  test("+: and :+") {
    val seq = Seq(1, 2, 3, 4)

    // Could be helpful for palindroms
    assertEquals(seq match { case head +: _ => head }, 1)
    assertEquals(seq match { case _ :+ last => last }, 4)
  }

  test("palindrome") {
    assertEquals(Sequence.palindrome(Seq.empty), true)

    assertEquals(Sequence.palindrome(Seq(1)), true)

    assertEquals(Sequence.palindrome(Seq(1, 1)), true)
    assertEquals(Sequence.palindrome(Seq(1, 2)), false)

    assertEquals(Sequence.palindrome(Seq(1, 2, 1)), true)
    assertEquals(Sequence.palindrome(Seq(1, 2, 3)), false)

    assertEquals(Sequence.palindrome(Seq(1, 2, 2, 1)), true)
    assertEquals(Sequence.palindrome(Seq(1, 2, 2, 3)), false)
  }

  test("flatMap") {
    val flatMapFn: Int => Seq[Int] = a => Seq(a, a + 1, a + 2)

    assertEquals(Sequence.flatMap(Seq.empty)(flatMapFn), Seq.empty)

    assertEquals(Sequence.flatMap(Seq(1, 2, 3))(flatMapFn), Seq(1, 2, 3, 2, 3, 4, 3, 4, 5))
  }
}
