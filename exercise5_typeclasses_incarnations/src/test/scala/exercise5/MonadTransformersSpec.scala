package exercise5

import org.scalacheck.Prop._
import org.scalacheck.Properties

object MonadTransformersSpec extends Properties("Monad Transformer") {

  import MonadTransformers.ErrorOrT

  property("Option[ErrorOf] Monad") = forAll { fa: ErrorOrT[Option, Int] =>
    val f: Int => ErrorOrT[Option, Int] = a => Some(Right(a * 2))

    MonadTransformers.testOptionTransformer(fa, f) ?= MonadTransformers.testOptionTransformer(fa, f)
  }
}
