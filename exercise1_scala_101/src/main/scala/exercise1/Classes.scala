package exercise1

/** a) Create a class Animal which has the following fields:
 *      - name: String (name of the species)
 *      - species: String (e.g. mammal or reptile)
 *      - food: String
 *
 * {{{
 * class MyClass(val publicField: Int, privateField: String) {
 *    // put other fields and methods here
 * }
 * }}}
 * 
 * b) Create an Companion Object for Animal and add the following instances as fields:
 *      - cat = Animal(cat, mammal, meat)
 *      - parrot = Animal(parrot, bird, vegetables)
 *      - goldfish = Animal(goldfish, fish, plants)
 *
 * {{{
 * object MyClass {
 *    // put your static fields and methods here
 * }
 * }}}
 * 
 * c) Add the following method to Animals:
 *      def eats(food: String): Boolean
 *    
 *     which checks if an animal eats the given food
 */

object Classes {
  class Animal(val name: String, val species: String, val food: String) {
    def eats(food: String): Boolean = this.food == food
  }
  object Animal {
   val cat = new Animal("uwu", "cat", "fish")
   val parrot = new Animal("parrot", "bird", "vegetables")
   val goldfish = new Animal("goldfisch", "fish", "plants")
  }
}
