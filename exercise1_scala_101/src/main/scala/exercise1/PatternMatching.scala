package exercise1

/** Write your solution as stand-alone function. 
  * 
  * Syntax:
  *   val a: Int = ???
  * 
  *   a match {
  *     case 0 => true
  *     case _ => false
  *   }
  */
object PatternMatching {

  sealed trait Hand
  case object Rock    extends Hand
  case object Paper   extends Hand
  case object Scissor extends Hand

  sealed trait Result
  case object Win  extends Result
  case object Lose extends Result
  case object Draw extends Result

  sealed trait Food
  case object Meat       extends Food
  case object Vegetables extends Food
  case object Plants     extends Food

  sealed trait Animal {
    val name: String
    val food: Food
  }
  case class Mammal(name: String, food: Food, weight: Int) extends Animal
  case class Fish(name: String, food: Food)                extends Animal
  case class Bird(name: String, food: Food)                extends Animal


  /** a) If value is:
   * {{{
   *     1 => "it is one"
   *     2 => "it is two"
   *     3 => "it is three"
   *     otherwise => "what's that"
   * }}}
   */
  def intToString(value: Int): String = ???
  /* b) `value` is true if it is:
   *     "max" or "Max"
   *     "moritz" or "Moritz"
   */
  def isMaxOrMoritz(value: String): Boolean = ???
  /** c) Is `value` even (use guards) */
  def isEven(value: Int): Boolean = ???
  /* d) Rock paper scissors (see classes above):
   *     1. rock beats scissor
   *     2. scissor beats paper
   *     3. paper beats rock
   *    Does player `a` win?
   */
  def winsA(a: Hand, b: Hand): Result = ???
  // REMARK: Use the definition of Animals below

  /** e) Extract the weight of a Mammal else return -1. */
  def extractMammalWeight(animal: Animal): Int = ???
  /** f) Update the food of Fishes and Birds to Plants, keep Mammals unchanged. */
  def updateFood(animal: Animal): Animal = ???
}
