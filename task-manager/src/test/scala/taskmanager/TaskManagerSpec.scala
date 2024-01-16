package taskmanager

class TaskManagerSpec extends munit.FunSuite {
  test("TaskManager has no tasks by default") {
    val taskManager = TaskManager()
    assertEquals(taskManager.tasks, List())
  }

  test("TaskManager can add a task") {
    val taskManager = TaskManager()
    val updatedTaskManager = TaskManager().addTask("Buy milk", Pending)

    assertEquals(updatedTaskManager.tasks, List(Task(Some(1), "Buy milk", Pending)))

    // Original taskManager is immutable and unchanged
    assertEquals(taskManager.tasks, List())
  }

  test("TaskManager can add multiple tasks") {
    val taskManager = TaskManager()
      .addTask("Buy milk", Pending)
      .addTask("Buy eggs", Pending)
      .addTask("Buy bread", Pending)

    assertEquals(taskManager.tasks, List(
      Task(Some(1), "Buy milk", Pending),
      Task(Some(2), "Buy eggs", Pending),
      Task(Some(3), "Buy bread", Pending)
    ))
  }

  test("TaskManager can delete a task") {
    val taskManager = TaskManager()
      .addTask("Buy milk", Pending)
      .addTask("Buy eggs", Pending)
      .addTask("Buy bread", Pending)

    val updatedTaskManager = taskManager.deleteTask(2)

    updatedTaskManager match {
      case Left(error) => fail(s"Expected Right(_) but got Left($error)")
      case Right(updatedTaskManager) => assertEquals(updatedTaskManager.tasks, List(
        Task(Some(1), "Buy milk", Pending),
        Task(Some(3), "Buy bread", Pending)
      ))
    }
  }

  test("TaskManager can complete a task by id") {
    val taskManager = TaskManager()
      .addTask("Buy milk", Pending)
      .addTask("Buy eggs", Pending)
      .addTask("Buy bread", Pending)

    val updatedTaskManager = taskManager.completeTask(2)

    updatedTaskManager match {
      case Left(error) => fail(s"Expected Right(_) but got Left($error)")
      case Right(updatedTaskManager) => assertEquals(updatedTaskManager.tasks, List(
        Task(Some(1), "Buy milk", Pending),
        Task(Some(2), "Buy eggs", Completed),
        Task(Some(3), "Buy bread", Pending)
      ))
    }
  }

  test("TaskManager fails to complete unknown task IDs") {
    val taskManager = TaskManager()
      .addTask("Buy milk", Pending)
      .addTask("Buy eggs", Pending)
      .addTask("Buy bread", Pending)

    val updatedTaskManager = taskManager.completeTask(4)

    updatedTaskManager match {
      case Left(error) => assertEquals(error, "Task not found: 4")
      case Right(_) => fail("Expected Left(error) but got Right(_)")
    }
  }

  test("TaskManager can complete a task by name") {
    val taskManager = TaskManager()
      .addTask("Buy milk", Pending)
      .addTask("Buy eggs", Pending)
      .addTask("Buy bread", Pending)

    val updatedTaskManager = taskManager.completeTaskByName("Buy eggs")

    updatedTaskManager match {
      case Left(error) => fail(s"Expected Right(_) but got Left($error)")
      case Right(updatedTaskManager) => assertEquals(updatedTaskManager.tasks, List(
        Task(Some(1), "Buy milk", Pending),
        Task(Some(2), "Buy eggs", Completed),
        Task(Some(3), "Buy bread", Pending)
      ))
    }
  }

  test("TaskManager fails to complete unknown task names") {
    val taskManager = TaskManager()
      .addTask("Buy milk", Pending)
      .addTask("Buy eggs", Pending)
      .addTask("Buy bread", Pending)

    val updatedTaskManager = taskManager.completeTaskByName("Buy cheese")

    updatedTaskManager match {
      case Left(error) => assertEquals(error, "Task not found: Buy cheese")
      case Right(_) => fail("Expected Left(error) but got Right(_)")
    }
  }

  test("TaskManager can list tasks by status") {
    val taskManager = TaskManager()
      .addTask("Buy milk", Pending)
      .addTask("Buy eggs", Pending)
      .addTask("Buy bread", Completed)

    val pendingTasks = taskManager.listTasks(Pending)

    assertEquals(pendingTasks, List(
      Task(Some(1), "Buy milk", Pending),
      Task(Some(2), "Buy eggs", Pending)
    ))

    val completedTasks = taskManager.listTasks(Completed)

    assertEquals(completedTasks, List(
      Task(Some(3), "Buy bread", Completed)
    ))
  }

  test("TaskManager can batch update tasks") {
    val taskManager = TaskManager()
      .addTask("Buy milk", Pending)
      .addTask("Sell milk", Pending)
      .addTask("Buy eggs", Pending)
      .addTask("Buy bread", Pending)

    val updateFunction: Task => Task = task => if (task.description.contains("milk")) task.copy(status = Completed) else task
    val updatedTaskManager = taskManager.batchUpdate(updateFunction)

    assertEquals(updatedTaskManager.tasks, List(
      Task(Some(1), "Buy milk", Completed),
      Task(Some(2), "Sell milk", Completed),
      Task(Some(3), "Buy eggs", Pending),
      Task(Some(4), "Buy bread", Pending)
    ))
  }
}
