package taskmanager

case class TaskManager(tasks: List[Task] = List(), private var nextTaskOrder: Int = 1) {
  def addTask(description: String, status: TaskStatus): TaskManager = {
    val updatedTasks = this.tasks.appended(Task(Option(this.nextTaskOrder), description, status))
    this.nextTaskOrder += 1
    TaskManager(updatedTasks, nextTaskOrder)
  }

  def deleteTask(order: Int): Either[String, TaskManager] = {
    val taskToDel = this.tasks.find(t => {t.order.get == order})
    taskToDel match {
      case Some(value) => Right(TaskManager(this.tasks.filter(t => t.order.get != value.order.get), nextTaskOrder))
      case None => Left("cannot delete")
    }
  }

  def completeTask(order: Int): Either[String, TaskManager] = {
    val taskToComplete = this.tasks.find(t => t.order.get == order)
    taskToComplete match {
      case None => Left(s"Task not found: $order" )
      case Some(value) => {
        val updatedTasks = this.tasks.map { task => 
          if(task.order.get == order) {
            task.copy(status = Completed)
          } else {
            task
          } 
        }
        Right(TaskManager(updatedTasks, nextTaskOrder))
      }
    }
  }

  def completeTaskByName(name: String): Either[String, TaskManager] = {
    val taskToComplete = this.tasks.find(t => t.description == name)

    taskToComplete match {
      case None => Left(s"Task not found: $name")
      case Some(value) => {
        val updatedTasks = this.tasks.map { task => 
          if(task.description == name) {
            task.copy(status = Completed)
          } else {
            task
          } 
        }
        Right(TaskManager(updatedTasks, nextTaskOrder))
      }
    }
  }
  def listTasks(byStatus: TaskStatus): List[Task] = this.tasks.filter(t => t.status == byStatus)
  def batchUpdate(updateFunction: Task => Task): TaskManager = TaskManager(this.tasks.map(updateFunction), nextTaskOrder)
}
