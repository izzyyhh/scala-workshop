package exercise3

object MapsSolution {

  def countRace(characters: Map[String, String]): Map[String, Int] = characters
    .groupBy(_._2)
    .view.mapValues(characters => characters.size)
    .toMap

  def countBaggins(characters: Map[String, String]): Int = characters.count(_._1.contains("Baggins"))

  def underaged(characters: Map[String, Int]): Map[String, Int] = characters.filter(_._2 >= 1000)
}
