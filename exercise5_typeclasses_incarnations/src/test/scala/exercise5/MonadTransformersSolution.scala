package exercise5

import cats.Monad
import cats.instances.all.catsStdInstancesForOption

object MonadTransformersSolution {

  import MonadTransformers.{ErrorOrT, ErrorOr}

  implicit def errorOrT[F[_]: Monad]: Monad[({type Lambda[A] = ErrorOrT[F, A]})#Lambda] = new Monad[({type Lambda[A] = ErrorOrT[F, A]})#Lambda] {

    def pure[A](a: A): ErrorOrT[F, A] = Monad[F].pure(Right(a))

    def flatMap[A, B](fa: ErrorOrT[F, A])(f: A => ErrorOrT[F, B]): ErrorOrT[F, B] =
      Monad[F].flatMap(fa) {
        case Right(a) => f(a)
        case Left(e)  => Monad[F].pure(Left(e))
      }

    def tailRecM[A, B](a: A)(f: A => ErrorOrT[F, Either[A, B]]): ErrorOrT[F, B] = Monad[F].flatMap(f(a)) {
      case Right(Right(b)) => Monad[F].pure(Right(b))
      case Right(Left(aa)) => tailRecM(aa)(f)
      case Left(e)         => Monad[F].pure(Left(e))
    }
  }

  def optionTransformer[A, B](fa: ErrorOrT[Option, A], f: A => ErrorOrT[Option, B]): ErrorOrT[Option, B] =
    Monad[({type Lambda[A] = ErrorOrT[Option, A]})#Lambda].flatMap(fa)(f)
}
