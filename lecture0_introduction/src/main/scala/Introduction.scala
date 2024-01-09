
import PresentationUtil._
import japgolly.scalajs.react.ScalaComponent
import japgolly.scalajs.react.vdom.html_<^.{<, _}
import org.scalajs.dom

import scala.scalajs.js.annotation.JSExport

object Introduction {

  import Enumeration._

  val introduction = chapter(
    chapterSlide(
      <.h1("Introduction to Functional Programming with Scala")
    ),

    noHeaderSlide(
      <.h2("Welcome"),
      <.br,
      <.h3("And thanks for being here")
    ),

    noHeaderSlide(
      <.img(
        ^.alt := "Scala + Fp = Love",
        ^.src := "./img/scala_fp.svg"
      )
    ),

    exerciseSlide(
      "Function Programming",
      <.h2("What do you know about Functional Programming?")
    ),

    slide(
      "Me",
      <.img(
        ^.cls := "team-img",
        ^.alt := "Georg M. Sorst",
        ^.src := "./img/georgsorst.jpg"
      ),
      <.p("Georg M. Sorst / Search Team Lead @ Nosto (Findologic)")
    ),

    slide(
      "Attribution",
      <.span("Based on "),
      <.a(
        ^.href := "https://scalasummerschool.github.io/",
        ^.target := "_blank",
        "https://scalasummerschool.github.io"
      ),
      <.br,
      <.br,
      <.h4("Thanks to"),
      Enumeration(
        Item.stable("Paul Heymann / Data Engineer @ XING"),
        Item.stable("David Krentzlin / Software Engineer @ XING"),
        Item.stable("Christian Stein / Data Engineer @ XING"),
        Item.stable("Florian Sachse / Data Engineer @ XING"),
      )
    ),

    slide(
      "Lectures",
      Enumeration(
        Item.stable("Scala 101"),
        Item.fadeIn("Functional Programming 101"),
        Item.fadeIn("Standard Library"),
        Item.fadeIn("Small workshop project"),
        Item.fadeIn("Type Classes and Incarnations"),
        Item.fadeIn("Side Effect and IO"),
        Item.fadeIn("Big workshop project")
      )
    ),

    slide(
      "How it works",
      Enumeration(
        Item.stable("lectures are split into smaller chapters"),
        Item.fadeIn("exercises are mixed in"),
        Item.fadeIn("question and code exercises")
      )
    ),

    slide(
      "How it works",
      Enumeration(
        Item.stable("5 to 10 minute break every hour"),
        Item.fadeIn("or just ask :)")
      )
    ),

    slide(
      "How it works",
      <.h3("If you have a question ask it directly!")
    ),

    noHeaderSlide(
      <.h3("Feedback")
    ),

    slide(
      "Feedback",
      <.h4("Are the lectures helpful?"),
      <.br,
      <.br,
      <.h4("What would you change?")
    ),

    slide(
      "Feedback",
      <.p("Give direct feedback.")
    )
  )

  val repl = chapter(
    chapterSlide(
      <.h2("REPL")
    ),

    exerciseSlide(
      "Scala: Installation",
      <.span("Install Scala 2.13 from "),
      <.a(
        ^.href := "https://www.scala-lang.org/download/",
        ^.target := "_blank",
        "https://www.scala-lang.org/download/"),
    ),

    slide(
      "Scala 3: Adoption",
      <.p("Scala 3 exists but..."),
      <.img(
        ^.alt := "Scala 3 adoption",
        ^.src := "./img/scala3_adoption.png"
      ),
      <.p(font(^.size := 5, "Source: ",
        <.a(^.href := "https://scalasurvey2023.virtuslab.com/", "https://scalasurvey2023.virtuslab.com"))
      ),
      Enumeration(
        Item.stable("Scala 3 is not backwards compatible"),
        Item.stable("Many libraries are not yet available for Scala 3"),
      )
    ),

    slide(
      "Repl",
      <.p("You can use a Scala REPL (Read-Evaluate-Print-Loop) to try code you see during the lectures.")
    ),

    noHeaderSlide(
      <.h3("Built-In Scala REPL")
    ),

    slide(
      "Scala REPL",
      bash("""
        # just execute Scala
        $>scala
      """),
      scalaC("""
        scala> 1 + 1
        res0: Int = 2

        // exit with
        scala> :q
      """)
    ),

    noHeaderSlide(
      <.h3("Ammonite")
    ),

    slide(
      "Ammonite",
      bash("""
        $> amm
      """),
      scalaC("""
        @ 1 + 1
        res0: Int = 2

        @ exit
      """)
    ),

    noHeaderSlide(
      <.h3("Scastie")
    ),

    slide(
      "Scastie",
      <.a(
        ^.href := "https://scastie.scala-lang.org/",
        ^.target := "_blank",
        "https://scastie.scala-lang.org/"
      ),
      <.span(" is an online REPL"),
    ),

    noHeaderSlide(
      <.h2("Any questions so far?")
    )
  )

  val ides = chapter(
    chapterSlide(
      <.h3("IDEs")
    ),

    slide(
      "IDEs",
      <.img(
        ^.alt := "IDE stats",
        ^.src := "img/ides.png"
      ),
      <.p(font(^.size := 5, "Source: ",
        <.a(^.href := "https://scalasurvey2023.virtuslab.com/", "https://scalasurvey2023.virtuslab.com"))
      ),
    ),

    exerciseSlide(
      "IDEs: Options",
      <.img(
        ^.alt := "IntelliJ IDEA",
        ^.src := "img/IntelliJ_IDEA_Icon.svg",
        ^.width := "128px"
      ),
      <.p("IntelliJ IDEA with ", <.a(^.href := "https://plugins.jetbrains.com/plugin/1347-scala", "Scala plugin")),
      <.br,
      <.img(
        ^.alt := "Visual Studio Code",
        ^.src := "img/Visual_Studio_Code_1.35_icon.svg",
        ^.width := "128px"
      ),
      <.p(
        "Visual Studio Code with ",
        <.a(^.href := "https://marketplace.visualstudio.com/items?itemName=scala-lang.scala", "Scala syntax plugin"),
        " and ",
        <.a(^.href := "https://marketplace.visualstudio.com/items?itemName=scalameta.metals", "Scala language server plugin (Metals)")
      )
    ),
  )

  val exercises = chapter(
    chapterSlide(
      <.h2("Coding Exercises")
    ),

    slide(
      "Coding Exercises",
      <.p("All exercise related code can be found in the exercise-directories.")
    ),

    slide(
      "Coding Exercises",
      <.p("We use SBT to build our code and execute tests."),
      <.br,
      <.img(
        ^.alt := "SBT logo",
        ^.src := "./img/sbt_logo.svg"
      )
    ),

    noHeaderSlide(
      <.h3("The Interactive Build Tool"),
      <.br,
      <.p(
        ^.cls := "fragment fade-in",
        "Formerly: The Simple Build Tool"
      )
    ),

    slide(
      "SBT: simple project",
      bash("""
        my-project/
          # project information (sbt version, plugins, ...)
          project/

          # source code directory
          src/
          # compiled results
          target/

          # build file defining the whole project
          build.sbt
      """)
    ),

    slide(
      "SBT: build file",
      scalaC("""
        // build.sbt
        scalaVersion := "2.13.12"
        name         := "my-project"

        libraryDependencies ++= Seq(...)
      """)
    ),

    slide(
      "SBT: sub-projects",
      bash("""
        my-project/
          project/

          # sub projects defined in the build file
          sub-project-0/
            src/
            target/
          sub-project-1/
           ...

          build.sbt
      """)
    ),

    slide(
      "SBT: build file",
      scalaC("""
        // build.sbt
        val common = Seq(
          scalaVersion := "2.13.12"
        )

        lazy val root = project
          .in(file("."))
          .aggregate(subProject0, ...)

        lazy val subProject0 = project
          .in(file("sub-project-0"))
          .settings(
            common,
            libraryDependencies ++= Seq(...)
          )
        ...
      """)
    ),

    exerciseSlide(
      "SBT: Installation",
      <.span("Install SBT from "),
      <.a(
        ^.href := "https://www.scala-sbt.org/download.html",
        ^.target := "_blank",
        "https://www.scala-sbt.org/download.html"),
    ),

    slide(
      "SBT: keep it running",
      <.p("SBT needs a lot of time to start ... so keep it running."),
      <.br,
      bash("""
        cd <sbt project root>

        # opens a cli
        sbt
      """)
    ),

    slide(
      "SBT: commands",
      bash("""
        # show all sub-projects
        sbt> projects

        # change to sub-project
        sbt> project <name of sub-project>

        # compile source code
        sbt> compile

        # compile on file change
        sbt> ~compile
      """)
    ),

    slide(
      "SBT: commands",
      bash("""
        # execute all tests
        sbt> test

        # execute a single test
        sbt> Test / testOnly <name of test>
      """)
    ),

    slide(
      "SBT: exercise",
      bash("""
        sbt> project <exercise project>
        sbt> compile <your code>
        sbt> Test / testOnly <exercise>
      """)
    ),

    slide(
      "Exercise Structure",
      <.p("exercise code in main dir, e.g. `exercise1_scala_101/src/", font(^.color := "red", "main"), "/scala/exercises1/`"),
    ),

    noHeaderSlide(
      <.h3("That is all about SBT for now")
    )
  )

  val Show = ScalaComponent
    .builder[Unit]("Slideshow")
    .renderStatic(
      <.div(
        ^.cls := "reveal",
        <.div(
          ^.cls := "slides",
          introduction,
          repl,
          ides,
          exercises,
        )
      )
    )
    .build

  @JSExport
  def main(args: Array[String]): Unit = {
    Show().renderIntoDOM(dom.document.body)
  }
}
