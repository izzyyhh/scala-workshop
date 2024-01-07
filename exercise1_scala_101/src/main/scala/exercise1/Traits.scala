package exercise1

/** Start with your existing solution from [[Classes]].
 *
 * d) Redefine your class Animal as trait and create case class instances for Mammals, Birds, and Fishes.
 * do you still need the field `species`?
 *
 * e) Add the following functions to Animals Companion Object:
 * def knownAnimal(name: String): Boolean  // true if it is the name of one of the three animals we know from (b)
 * def apply(name: String): Option[Animal] // returns one of the three animals matching the name (Some) or nothing (None), see [[Option]] below
 *
 * f) Create a trait Food with the following case objects:
 *      - Meat
 *      - Vegetables
 *      - Plants
 *        and add it to Animal definition. Also add a companion object with an apply method:
 *        def apply(food: String): Option[Food]
 */
object Traits {
  ???

  sealed trait Option[+A]

  case class Some[+A](a: A) extends Option[A]

  case class None[A]() extends Option[A]
}
