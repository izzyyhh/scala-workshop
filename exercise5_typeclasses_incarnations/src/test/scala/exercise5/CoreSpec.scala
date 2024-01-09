package exercise5

import org.scalacheck.Prop._
import org.scalacheck.Properties

object CoreSpec extends Properties("Core") {

  import Core.ErrorOr

  property("ErrorOr Functor") = forAll { fa: ErrorOr[Int] =>
    val f: Int => Int = _ * 1

    Core.testErrorOrFunctor(fa, f) ?= Core.testErrorOrFunctor(fa, f)
  }

  property("ErrorOr Applicative") = forAll { fa: ErrorOr[Int] =>
    val ff: ErrorOr[Int => Int] = Right(_ * 2)

    Core.testErrorOrApplicative(ff, fa) ?= Core.testErrorOrApplicative(ff, fa)
  }

  property("apply Applicative") = forAll { (x: ErrorOr[Int], y: ErrorOr[Int]) =>
    val f: Int => Int => String = a => b => (a * b).toString

    Core.testApplyApp(f, x, y) ?= Core.testApplyApp(f, x, y)
  }

  property("ErrorOr Monad") = forAll { fa: ErrorOr[Int] =>
    val f: Int => ErrorOr[Int] = a => Right(a * 2)

    Core.testErrorOrMonad(fa, f) ?= Core.testErrorOrMonad(fa, f)
  }
}
