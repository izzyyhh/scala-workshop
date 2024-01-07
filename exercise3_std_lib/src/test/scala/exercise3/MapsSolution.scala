package exercise3

object MapsSolution {

  import Maps._

  def averageAge(users: Seq[User]): Map[String, Int] =
    users
      .groupBy(_.name)
      .view
      .mapValues(s => s.map(_.age).sum / s.length)
      .toMap

  def numberOfFrodos(users: Map[String, User]): Int = users.count(_._1.contains("Baggins"))

  def underaged(users: Map[String, User]): Map[String, User] = users.filter(_._2.age >= 1000)
}
