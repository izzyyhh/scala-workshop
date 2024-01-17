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
  trait Animal {
    val name: String
    val food: Food
    def eats(food: Food) = food == this.food
  }

  sealed trait Food {
    def apply(food: String): Option[Food] = None()
  }
  case object Meat extends Food
  case object Vegetables extends Food
  case object Plants extends Food

  case class Mammal(val name: String, val food: Food) extends Animal
  case class Bird(val name: String, val food: Food) extends Animal
  case class Fish(val name: String, val food: Food) extends Animal

  object Animal {
    val parrot = Bird("parrot", Vegetables)
    val knownAnimals = List("cat", "parrot", "goldfisch")
    def knownAnimal(name:String): Boolean = knownAnimals.contains(name)
    def apply(name:String): Option[Animal] = name match {
      case "cat" => Some(Mammal(name, Meat))
      case "parrot" => Some(Bird(name, Vegetables))
      case "goldfisch" => Some(Fish(name, Plants))
      case _: String => None()
    }
  }
  sealed trait Option[+A]

  case class Some[+A](a: A) extends Option[A]

  case class None[A]() extends Option[A]
}
