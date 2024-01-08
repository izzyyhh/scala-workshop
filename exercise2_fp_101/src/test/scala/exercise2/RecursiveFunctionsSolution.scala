package exercise2

object RecursiveFunctionsSolution {
  def append[A](l: List[A], r: List[A]): List[A] = l match {
    case Nil() => r
    case Cons(a, tail) => Cons(a, append(tail, r))
  }

  def reverse[A](list: List[A]): List[A] = list match {
    case Nil() => Nil()
    case Cons(a, tail) => append(reverse(tail), Cons(a, Nil()))
  }

  def map[A, B](list: List[A], f: A => B): List[B] = list match {
    case Nil() => Nil()
    case Cons(a, tail) => Cons(f(a), map(tail, f))
  }

  def flatMap[A, B](list: List[A], f: A => List[B]): List[B] = list match {
    case Nil() => Nil()
    case Cons(a, tail) => append(f(a), flatMap(tail, f))
  }
}
