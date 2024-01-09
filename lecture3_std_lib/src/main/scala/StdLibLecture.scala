import PresentationUtil._
import japgolly.scalajs.react.ScalaComponent
import japgolly.scalajs.react.vdom.html_<^._
import org.scalajs.dom

import scala.scalajs.js.annotation.JSExport

object StdLibLecture {

  import Enumeration._

  val overview = chapter(
    chapterSlide(
      <.h1("Scala Standard Library")
    ),

    slide(
      "What we will learn in this lecture",
      Enumeration(
        Item.stable("Primitives"),
        Item.fadeIn("Collections"),
        Item.fadeIn("Build-In ADTs")
      )
    ),

    slide(
      "Interactive Session",
      <.p("Let's go through the material in an interactive session. Run the following code in a terminal and get some insides into the Scala standard library. " + 
          "Or continue with the presentation."),
      <.br,
      bash("""
        cd lecture3_std_lib
        scala -Dscala.color \
              -language:_ -nowarn \
              -i src/main/scala/REPLesent.scala

        scala> val session = StdLib($intp)
        scala> import session._
        scala> n
      """)
    ),

    noHeaderSlide(
      <.h2("You have a question?"),
      <.h3("Ask it right away!")
    )
  )

  val primitives = chapter(
    chapterSlide(
      <.h2("Primitives")
    ),

    slide(
      "Primitives",
      <.p("We already saw some primitives over the course of this workshop. But let's take a closer look what Scala actually provides.")
    ),

    noHeaderSlide(
      <.h3("Boolean")
    ),

    slide(
      "Primitives: Boolean",
      scalaC("""
        Boolean - true false
      """)
    ),

    slide(
      "Primitives: Boolean operators",
      scalaC("""
        !a     // negation

        a & b  // AND, always evaluates `b`
        a && b // AND, evaluates `b` only if `a` is true

        a | b  // OR, always evaluates b
        a || b // OR, evaluates `b` only if `a` is true

        x > y  // greater than
        x < y  // smaller than
        x >= y // greater-equal than
        x <= y // smaller-equal than
        x == y // equal
        x != y // unequal
      """)
    ),

    noHeaderSlide(
      <.h3("Numbers")
    ),

    slide(
      "Primitives: numbers",
      scalaC("""
        Byte    - Integer from -128 to 127
        Short   - Integer from -32,768 to 32,767
        Int     - Integer from -2,147,483,648 to 2,147,483,647
        Long    - Integer from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
        Float   - +- 1.40129846432481707e-45 to 3.40282346638528860e+38
        Double  - +- 4.94065645841246544e-324 to 1.79769313486231570e+308
      """)
    ),

    slide(
      "Primitives: number operators",
      scalaC("""
        1 + 2 == 3    // addition
        1 - 2 == -1   // subtraction
        2 % 2 == 0    // modulo
        2 * 2 == 4    // multiplication
        4 / 2 == 2    // division
      """),
      scalaCFragment("""
        -1.abs == 1   // absolute value
        2.max(3) == 3 // find the maximum value
        2.min(3) == 2 // find the minimum value
        3.signum == 1 // signum
      """)
    ),

    slide(
      "Primitives: number typing",
      scalaC("""
        // when done with Integers
        1 / 2 == (1: Int) / (2: Int)
              == (1 / 2): Int
              == 0
      """),
      scalaCFragment("""
        // at least one element is a floating point number
        1 / 2.0 == (1: Int) / (2.0: Double)
                == (1.0 / 2.0): Double
                == 0.5
      """)
    ),

    slide(
      "Primitives: number typing",
      <.p("Scala selects the number type with the highest precision.")
    ),

    slide(
      "Primitives: division by zero",
      scalaC("""
        // we already know that this will fail
        1 / 0 == ArithmeticException
      """),
      scalaCFragment("""
        // but what happens here?
        1 / 0.0
      """),
      scalaCFragment("""
        1 / 0.0 = Infinity
      """)
    ),

    slide(
      "Primitives: infinity",
      <.p("You cannot access an Infinity object, but you can check if a value is infinite.")
    ),

    slide(
      "Primitives: infinity",
      scalaC("""
        val infinity = 1 / 0.0

        infinity.isInfinity    == true
        infinity.isPosInfinity == true
        infinity.isNegInfinity == false
      """)
    ),

    slide(
      "Primitives: comparison operators",
      <.p("All Boolean comparison operators are available for numbers.")
    ),

    slide(
      "Primitives: floating point comparison",
      scalaC("""
        // is dangerous - the following is not the same
        0.1 + 0.2 == 0.3
      """)
    ),

    slide(
      "Primitives: floating point comparison",
      scalaC("""
        def eq(a: Double, b: Double, epsilon: Double): Boolean =
          (a - b).abs < epsilon

        eq(0.1 + 0.2, 0.3, 0.000001)
      """)
    ),

    slide(
      "Primitives: Integer operators",
      scalaC("""
        // some Integer specific operators
        (2 << 1) == 4 // bit-shift to the left
        (2 >> 1) == 1 // bit-shift to the right
        (2 ^ 3)  == 1 // bit-wise XOR
        (2 & 3)  == 2 // bit-wise AND
        (2 | 3)  == 3 // bit-wise OR
      """)
    ),

    noHeaderSlide(
      <.h3("Char")
    ),

    slide(
      "Primitives: Char",
      <.p("Encode characters as integer numbers."),
      <.br,
      scalaC("""
        // all Integer operators apply
        Char - signs encoded with Integers from 0 to 65.535
      """)
    ),

    slide(
      "Primitives: Char look and feel",
      scalaC("""
        val a = 'a'

        a == 97
      """)
    ),

    slide(
      "Primitives: more information",
      <.h4("Use the search bar to find your type"),
      <.a(
        ^.href := "https://www.scala-lang.org/api/2.13.0/",
        ^.target := "_blank",
        "https://www.scala-lang.org/api/2.13.0/"
      )
    ),
  )

  val collections = chapter(
    chapterSlide(
      <.h2("Collections")
    ),

    slide(
      "Collections",
      <.p("Let's start with the most basic one."),
      <.br,
      <.h4("Tuples")
    ),

    slide(
      "Tuple",
      <.p("A tuple can have two or more elements of arbitrary type.")
    ),

    slide(
      "Tuple",
      scalaC("""
        (1, 'b')

        (9.3, true, 'g')

        (12, (false, 9.0))
      """)
    ),

    slide(
      "Tuple: access",
      scalaC("""
        val a = (1, true)

        a._1 == 1
        a._2 == true
      """)
    ),

    slide(
      "Tuple: swap",
      scalaC("""
        val a = (1, true)

        a.swap == (true, 1)
      """)
    ),

    slide(
      "Tuple: pattern matching",
      scalaC("""
        val a = (1, true)

        a match {
          case (num, b) => if (b) num else num + 1
        }
      """)
    ),

    slide(
      "Collections",
      <.p("That is all we can do with Tuples. But isn't there something more expressiv and powerful?")
    ),

    noHeaderSlide(
      <.h3("Sequence Trait")
    ),

    slide(
      "Sequence: definition",
      <.p("A sequence is a collection of values with an order."),
      <.br,
      scalaC(
        """
        Seq[Char]()     // empty
        Seq.empty[Char] // empty
        Seq(1, 2, 3)    // sequence of numbers 1, 2 and 3
      """)
    ),

    slide(
      "Sequence: Type hierarchy",
      <.img(
        ^.src := "./img/seq-type-hierarchy.png",
        ^.alt := "Sequence Type Hierarchy"
      ),
      <.p("Sequence type hierarchy"),
      <.br,
      <.p(
        <.span("Source: "),
        <.a(^.href := "https://alvinalexander.com/scala/understanding-scala-collections-hierarchy-cookbook/", "https://alvinalexander.com/scala/understanding-scala-collections-hierarchy-cookbook/")
      )
    ),

    slide(
      "Sequence: length",
      scalaC("""
        Seq[Char]().length  == 0
        Seq(1, 2, 3).length == 3
      """)
    ),

    slide(
      "Sequence: retrieve elements",
      scalaC("""
        val seq = Seq(1, 2, 3)

        seq(0) == 1
        seq(2) == 3
        seq(3) == IndexOutOfBoundsException

        seq.head == 1
        Nil.head == NoSuchElementException

        seq.headOption == Some(1)
        Nil.headOption == None

        seq.tail == Seq(2, 3)
        Nil.tail == /* you would expect that to be Nil, but ... */ UnsupportedOperationException
      """)
    ),

    slide(
      "Sequence: filter",
      scalaC("""
        val seq = Seq(1, 2, 3)

        seq.filter(a => a > 1)  == Seq(2, 3)
        seq.find(a => a == 2)   == Some(2)
        seq.exists(a => a > 1 ) == true
        seq.containts(1)        == true
      """),
      scalaC("""
        // more concise, arguments can be replaced with `_` if only used once
        seq.filter(_ > 1) == Seq(2, 3)
        seq.find(_ == 2)  == Some(2)
        seq.exists(_ > 1) == true
        seq.containts(1)  == true
      """)
    ),

    slide(
      "Sequence: sort",
      scalaC("""
        val seq = Seq(1, 2, 3)

        seq.sortWith(_ > _) == Seq(3, 2 1)
      """)
    ),

    slide(
      "Sequence: add",
      scalaC("""
        val seq = Seq(1, 2, 3)

        0 +: seq         == Seq(0, 1, 2, 3)
        seq :+ 4         == Seq(1, 2, 3, 4)
        seq ++ Seq(4, 5) == Seq(1, 2, 3, 4, 5)
      """)
    ),

    slide(
      "Sequence: sub-sequences",
      scalaC("""
        val seq = Seq(1, 2, 3)

        seq.take(2)    == Seq(1, 2)
        seq.drop(2)    == Seq(3)
        seq.splitAt(2) == (Seq(1, 2), Seq(3))
      """)
    ),

    slide(
      "Sequence: transformations",
      scalaC("""
        val seq = Seq(1, 2, 3)

        seq.map(a => a * 2.0) == Seq(2.0, 4.0, 6.0)

        // def replicate[A](a: A, n: Int): Seq[A]
        val seqSeq = seq.map(a => replicate(a, 2))
            seqSeq == Seq(Seq(1, 1), Seq(2, 2), Seq(3, 3))

        seqSeq.flatten == Seq(1, 1, 2, 2, 3, 3)

        // or in short
        seq.flatMap(a => replicate(a, 2)) == Seq(1, 1, 2, 2, 3, 3)
      """)
    ),

    slide(
      "Sequence: transformations",
      scalaC("""
        val seq = Seq("a", "b", "c")
        val initialValue = "start: "

        // transforming a Seq into a new "shape" from left to right
        val str = seq.foldLeft(initialValue)((agg, c) => agg + c)
      """),
      scalaCFragment("""
        // what is going on?
        val f: (String, String) => String = (agg, c) => agg + c

        f("start: ",   Seq("a", "b", "c").head) == "start: a"
        f("start: a",  Seq("b", "c").head)      == "start: ab"
        f("start: ab", Seq("c").head)           == "start: abc"

        str == "abc"
      """),
      scalaCFragment(
        """
        // Similar to `reduce` which doesn't have an initial value
        seq.reduce((agg, c) => agg + c) == "abc"
      """),
    ),

    exerciseSlide(
      "Sequence: transformations",
      scalaC("""
        val seq = Seq("a", "b", "c")
        val initialValue = "start: "

        // from right to left
        // Note that the arguments are now `c, agg` instead of `agg, c`
        val str = seq.foldRight(initialValue)((c, agg) => agg + c)

        // what is the result?
      """),
      scalaCFragment(
        """
        str == "start: cba"
      """),
      scalaCFragment("""
        val avg: (Int, Int) => Double = (a, b) => (a + b) / 2.0

        // the higher order function needs to be commutative
        seq.foldLeft(0.0)(avg) != seq.foldRight(0.0)(avg)
      """)
    ),

    slide(
      "Sequence: pattern matching",
      scalaC("""
        val seq = Seq(1, 2, 3)

        seq match {
          case h +: t       => "we have a head " + h + " and a tail " + t
          case Nil          => "is empty",
          case Seq(a, b, c) => "we have 3 elements"
        }
      """)
    ),

    slide(
      "Sequence: for-comprehension",
      scalaC("""
        val seq = Seq("a", "c", "b")

        // We want
        val newSeq = Seq("cx", "cx", "cx", "bx", "bx", "bx")

        // 1. filter
        // 2. flatMap
        // 3. map

        // Helpful:
        Seq.fill(3)("x") == Seq("x", "x", "x")
      """),
      scalaCFragment(
        """

        seq
          .filter(_ > "a")              // filter: Seq("c", "b")
          .flatMap(Seq.fill(3)(_))      // map: Seq(Seq("c", "c", "c"), Seq("b", "b", "b"))
                                        // flatten: Seq("c", "c", "c", "b", "b", "b")
          .map(_ + "x")                 // map: Seq("cx", "cx", "cx", "bx", "bx", "bx")
      """),
      scalaCFragment(
        """
        for {
          c  <- seq /* applies a filter step: */ if c > 1 // filter: Seq("c", "b")
          rep <- Seq.fill(3)(c)                           // map: Seq(Seq("c", "c", "c"), Seq("b", "b", "b"))
                                                          // flatten: Seq("c", "c", "c", "b", "b", "b")
        } yield rep + "x"                                 // map: Seq("cx", "cx", "cx", "bx", "bx", "bx")
      """),
    ),

    exerciseSlide(
      "Let's Code",
      bash("""
        sbt> project std-lib-exercises
        sbt> Test / testOnly exercise3.SequenceSpec
      """)
    ),

    slide(
      "Sequence: default implementation",
      scalaC("""
        // this
        val seq = Seq(1, 2, 3)

        // is actually by default
        val list: List[Int] = Seq(1, 2, 3)

        seq == list
      """)
    ),

    slide(
      "Sequence: additional List operations",
      scalaC("""
        0 :: list        == 0 +: seq
        List(0) ::: list == Seq(0) ++ seq
      """)
    ),

    noHeaderSlide(
      <.h3("Vector")
    ),

    slide(
      "Vector",
      <.p("Improved random access and update operations."),
      <.br,
      scalaC("""
        val v = Vector(1, 2, 3)

        v.head == 1

        0 +: v == Vector(0, 1, 2 ,3)

        v(0) == 1
        v(1) == 2

        v(-1) // IndexOutOfBoundsException
        v(4)  // IndexOutOfBoundsException
      """)
    ),

    noHeaderSlide(
      <.h3("Set")
    ),

    slide(
      "Set",
      <.p("Collection of unique elements without an order."),
      <.br,
      scalaC("""
        val s = Set(1, 2, 3, 3)

        s == Set(1, 2, 3)

        // exists element?
        s(3) == true
        s(0) == false
      """)
    ),

    slide(
      "Set: operations",
      scalaC("""
        val s = Set(1, 2, 3)

        s union Set(2, 3, 4)     == Set(1, 2, 3, 4)
        s diff Set(2, 3, 4)      == Set(1) // Items from first set that do not exist in second set
        s intersect Set(2, 3, 4) == Set(2, 3)
      """)
    ),

    slide(
      "Set: operations",
      <.p("The Set operations are defined in Seq."),
      scalaC(
        """
        (Seq(1, 2) diff Seq(2, 3)) == Seq(1)
        (Seq(1, 2) intersect Seq(2, 3)) == Seq(2)
      """)
    ),

    noHeaderSlide(
      <.h3("Map")
    ),

    slide(
      "Map",
      <.p("Collection of key-value pairs. The keys create a Set."),
      <.br,
      scalaC("""
        val m = Map(
          ("hello", 0),
          ("world", 1)
        )
      """)
    ),

    slide(
      "Map",
      scalaC("""
        val m = Map(
          ("hello", 0),
          ("world", 1),
          ("world", 2)
        )
      """),
      scalaCFragment(
        """
        // Keys are a set = unique
        m.keySet == Set("hello", "world")

        m == Map(
          ("hello", 0),
          ("world", 2)
        )
      """),
      scalaCFragment(
        """
        // Map has no order
        m == Map(
          ("world", 2),
          ("hello", 0),
        )
      """),
    ),

    slide(
      "Map: access",
      scalaC("""
        val m = Map(("hello", 0), ("world", 1))

        m("hello") == 0
        m("boom")  == NoSuchElementException

        m.get("hello") == Some(0)
        m.get("boom")  == None

        m.getOrElse("hello", 1) == 0
        m.getOrElse("boom", 1)  == 1
      """)
    ),

    slide(
      "Map: transform",
      scalaC("""
        val m = Map(("hello", 0))
        """),
      scalaCFragment(
        """
        // add or update
        m + (("world", 2)) == Map(("hello", 0), ("world", 2))
        m + (("hello", 2)) == Map(("hello", 2))
        m.updated("hello", 2) == m + (("hello", 2))

        m ++ Map(("world", 2)) == Map(("hello", 0), ("world", 2))
        """),
      scalaCFragment(
        """
        // remove
        Map(("hello", 0)) - "hello" == Map.empty

        Map(("hello", 0), ("world", 1)) -- Set("hello") == Map(("world", 1))
      """)
    ),

    slide(
      "Map: transform",
      scalaC("""
        val m = Map(("hello", 0), ("world", 1))

        m.view.mapValues(_ + 2).toMap == Map(("hello", 2), ("world", 3))

        // `view` operations work on a lazy copy of the map that is only computed when actually accessed.
        m.view
          .mapValues(_ + 2) // Not yet computed
          .mapValues(_ + 3) // Still not computed
          .toMap            // Now it needs to be computed

        m.view.filterKeys(_.contains("e")).toMap == Map(("hello", 0))
      """),
      scalaCFragment(
        """
        // Operations that can access both key _and_ value work on (key, value) tuples:
        m.view.filter(keyValue =>
          keyValue._1 == "hello" && // _1 is the key
          keyValue._2 == 0          // _2 is the value
        ).toMap == Map(("hello", 0))
        """),
      scalaCFragment(
        """
        // Shorter
        m.view.filter(_._1 == "hello")
        m.view.find(_._2 == 0) == Some(("hello", 0))

        m.view.count(_._1 == "hello") == 1
        """),
    ),

    slide(
      "Map: destructured transform",
      scalaC(
        """
        // Destructured
        m.view.filter { keyValue =>
          keyValue match { case (key, value) => key == "hello" && value == 0 }
        }.toMap == Map(("hello", 0))
      """),
      scalaCFragment(
        """
        // Underscore
        m.view.filter {
          _ match { case (key, value) => key == "hello" && value == 0 }
        }.toMap == Map(("hello", 0))
     """),
      scalaCFragment(
        """
        // No `match` necessary
        m.view.filter(
          { case (key, value) => key == "hello" && value == 0 }
        ).toMap == Map(("hello", 0))
        """)
    ),

    exerciseSlide(
      "Let's Code",
      bash("""
        sbt> project std-lib-exercises
        sbt> Test / testOnly exercise3.MapsSpec
      """)
    ),

    noHeaderSlide(
      <.h3("Back to String")
    ),

    slide(
      "String",
      scalaC("""
        // not exactly, but you get the idea
        // you don't have `+:`, `:+`
        "Hello world" ~= Seq('H', 'e', ...)
      """)
    ),

    slide(
      "String: access",
      scalaC("""
        val str = "Hello world"

        str.charAt(0)  == 'H'
        str.charAt(50) == StringIndexOutOfBoundsException

        str.take(2)    == "He"
        str.drop(2)    == "llo world"
        str.split(" ") == Array("Hello", "world")
      """)
    ),

    slide(
      "String: length & contains",
      scalaC("""
        val str = "Hello world"

        str.length         == 11
        str.contains("wo") == true
      """)
    ),

    slide(
      "String: interpolation",
      scalaC("""
        // insert values in Strings
        val a = 42

        s"The answer to everything is $a"

        // is equal to

        "The answer to everything is 42"
      """)
    ),

    slide(
      "String: interpolation",
      scalaC("""
        // you can reference any expression

        s"1 + 2 = ${1 + 2}"

        // is equal to

        "1 + 2 = 3"
      """)
    ),

    slide(
      "String: formatting",
      scalaC(
        """
          val height = 1.9f
          val name = "James"

          f"$name%s is $height%2.2f meters tall"

          // is equal to

          "James is 1.90 meters tall"

          // `$height` is formatted with `%2.2f` meaning to digits after the comma
      """)
    ),

    slide(
      "String: multi-line",
      scalaC("""
        // this is annoying
        "This is a reaaaaaaalllllllyyyy\n" +
        "looooooooooooooooooooooooooong\n" +
        "String"
      """),
      scalaCFragment(
        "// just write\n" +
        "\"\"\"\n" +
        "this is a reaaaaaaalllllllyyyy\n" +
        "looooooooooooooooooooooooooong\n" +
        "String\n" +
        "\"\"\""
      )
    ),

    slide(
      "String: multi-line",
      <.p("Mulit-line Strings take the indentation into account."),
      <.br,
      scalaC(
        "val a = {\n" +
        "  \"\"\"\n" +
        "  my String\n" +
        "  \"\"\"\n" +
        "}\n\n" +

        "a == \"\\n    my String\\n  \"")
    ),

    slide(
      "String: multi-line",
      <.p("To ignore these identation whitespaces you have to use margin elimination:"),
      <.br,
      scalaC(
        "val a = {\n" +
        "  \"\"\"\n" +
        "  |my String\n" +
        "  |\"\"\".stripMargin\n" +
        "}\n\n" +

        "a == \"\\nmy String\\n\"")
    ),

    exerciseSlide(
      "Let's Code",
      bash("""
        sbt> project std-lib-exercises
        sbt> Test / testOnly exercise3.StringsSpec
      """)
    ),

    noHeaderSlide(
      <.h3("Collection operations aren't limited to Seq, List or Map"),
      <.br,
      <.h4(
        ^.cls := "fragment fade-in",
        "Think about the ADTs we know"
      )
    )
  )

  val adts = chapter(
    chapterSlide(
      <.h2("Algebraic Data Types")
    ),

    noHeaderSlide(
      <.h3("Option")
    ),

    slide(
      "Option",
      <.p("Does a computation yield a result or not?"),
      <.br,
      scalaC("""
        // actual implementation differs - simplified code
        sealed trait Option[+A]

        case class Some[+A](value: A) extends Option[A]
        case object None extends Option[Nothing]
      """)
    ),

    slide(
      "Option",
      scalaC("""
        Option("hello") == Some("hello")

        // null is an empty reference - avoid it
        Option(null)      == None
        Option.empty[Int] == None
      """)
    ),

    slide(
      "Option: access",
      scalaC("""
        def divide(dividend: Int, divisor: Int): Option[Int] =
          if (divisor == 0) None
          else              Some(dividend / divisor)

        divide(5, 2) == Some(2)
        divide(5, 0) == None
        """),
      scalaCFragment(
        """
        // don't use `get`
        divide(5, 2).get == 2
        divide(5, 0).get // NoSuchElementException
        """),
      scalaCFragment(
        """
        // use `getOrElse` to move into concrete values
        divide(5, 2).getOrElse(-1) == 2
        divide(5, 0).getOrElse(-1) == -1
        """),
      scalaCFragment(
        """
        // or `orElse` to stay within the `Option` domain
        divide(5, 2).orElse(Some(-1)) == Some(2)
        divide(5, 0).orElse(Some(-1)) == Some(-1)
      """)
    ),

    slide(
      "Option: fold",
      scalaC("""
        divide(5, 2).fold {
          // `None` handler
          "no result"
        } {
          // `Some` handler
          res => s"result is $res"
        }
      """)
    ),

    slide(
      "Option: pattern matching",
      scalaC("""
        divide(5, 0) match {
          case Some(res) => s"result is $res"
          case None      => "no result"
        }
      """)
    ),

    slide(
      "Option: is empty?",
      scalaC("""
        val opt: Option[Int] = ???

        if (opt.isEmpty) println("this is empty")

        // or
        if (opt.nonEmpty) println("this isn't empty")

        // or
        if (opt.isDefined) println("this isn't empty")
      """)
    ),

    slide(
      "Option: filter",
      scalaC("""
        Some(0).filter(_ == 1) == None

        Some(0).filter(_ == 0) == Some(0)

        None.filter(_ == 5)    == None
      """)
    ),

    slide(
      "Option: transform",
      scalaC("""
        Some(0).map(_ + 1) == Some(1)
        (None: Option[Int]).map(_ + 1) == None
        """),
      scalaCFragment(
        """
        def returnEven(a: Int): Option[Int] = if (a % 2 == 0) Some(a) else None

        Some(0).map(a => returnEven(a)) == Some(Some(0))
        Some(1).map(returnEven)         == Some(None)

        Some(0).map(returnEven).flatten == Some(0)
        None.map(returnEven).flatten    == None
        """),
      scalaCFragment(
        """
        // or combined
        Some(0).flatMap(returnEven) == Some(0)
        Some(1).flatMap(returnEven) == None
      """)
    ),

    noHeaderSlide(
      <.h3("Either")
    ),

    slide(
      "Either",
      <.p("Does a computation return a left or right value?"),
      <.br,
      scalaC("""
        // actual implementation differs - simplified code
        sealed trait Either[+A, +B]

        // If the computation was successful, a `Right` will be returned (everything went al_right_)
        case class Right[+A, +B](value: B) extends Either[A, B]
        // If there was an error, a `Left` will be returned
        case class Left[+A, +B](value: A) extends Either[A, B]
      """)
    ),

    slide(
      "Either",
      scalaC("""
        def divide(dividend: Int, divisor: Int): Either[String, Int] = {
          if (divisor == 0) Left("cannot divide by zero")
          else              Right(dividend / divisor)
        }

        divide(5, 2) == Right[String, Int](2)
        divide(5, 0) == Left[String, Int]("cannot divide by zero")
      """)
    ),

    slide(
      "Either: access",
      scalaC("""
        Left(0).value        == 0
        Right("hello").value == "hello"

        // Either is right-biased since 2.12
        Left(0).getOrElse("boom")        == "boom"
        Right("hello").getOrElse("boom") == "hello"
      """)
    ),

    slide(
      "Either: fold",
      scalaC("""
        // or fold over the Either
        val e: Either[Int, String] = ???

        e.fold(
          leftError   => s"left  = $leftError",
          rightResult => s"right = $rightResult"
        )
      """)
    ),

    slide(
      "Either: pattern matching",
      scalaC("""
        // or simply match it
        val e: Either[Int, String] = ???

        e match {
          case Right(r) => s"right = $r"
          case Left(l)  => s"left  = $l"
        }
      """)
    ),

    slide(
      "Either: is left/right?",
      scalaC("""
        // you can also check if it is left or right
        val e: Either[Int, String] = ???

        if (e.isLeft) println("this is left")

        // or
        if (e.isRight) println("this is right")
      """)
    ),

    slide(
      "Either: filter",
      scalaC("""
        Right(0).filterOrElse(_ == 1, "boom") == Left("boom")

        Right(0).filterOrElse(_ == 0, "boom") == Right(0)

        Left(0).filterOrElse(_ == 0, "boom") == Left(0)

        Left(0).filterOrElse(_ == 1, "boom") == Left(0)
      """)
    ),

    slide(
      "Either: swap",
      scalaC("""
        Left[Int, String](0).swap  == Right[String, Int](0)
        Right[Int, String](0).swap == Left[String, Int](0)
      """)
    ),

    noHeaderSlide(
      <.h3("Try")
    ),

    slide(
      "Try",
      <.p("You are working with (Java) code throwing exceptions? Wrap it in a Try to regain safety."),
      <.br,
      scalaC("""
        // actual implementation differs - simplified code
        sealed trait Try[+A]

        case class Success[+A](a: A) extends Try[A]
        case class Failure[+A](error: Throwable) extends Try[A]
      """)
    ),

    slide(
      "Try",
      scalaC("""
        object Try {

          // '=>' defers computation until first usage (call-by-name)
          def apply[A](exp: => A): Try[A] =
            try {
              Success(exp)
            } catch {
              case error: Throwable => Failure(error)
            }
        }
      """)
    ),

    slide(
      "Try",
      scalaC("""
        val result = Try {
          // Exception throwing code goes here
        }

        // you don't care about the error
        result.toOption

        // your code works with Either
        result.toEither
      """)
    ),

    slide(
      "Try: pattern matching",
      scalaC("""
        def divide(dividend: Int, divisor: Int): Try[Int] = Try {
         dividend / divisor
        }

        divide(5, 0) match {
          case Success(a)     => s"the result is $a"
          case Failure(error) => s"something went wrong: ${error.getMessage}"
        }
      """)
    ),

    slide(
      "Try: recover",
      scalaC("""
        val t: Try[Int] = ???

        divide(5, 0).recover {
          case error => -1
        } == Success(-1)

        t.recoverWith {
          case error => Success(-1)
        } == Success(-1)
      """)
    ),

    slide(
      "Try",
      <.p("Transformations are equal to Option and Either.")
    ),

    exerciseSlide(
      "Let's Code",
      bash("""
        sbt> project std-lib-exercises
        sbt> Test / testOnly exercise3.AdtsSpec
      """)
    )
  )

  val summary = chapter(
    chapterSlide(
      <.h2("Summary")
    ),

    slide(
      "Primitives",
      <.p("Scala's build-in types.")
    ),

    slide(
      "Collections",
      <.p("Operations on sequences and the different instances thereof."),
      <.br,
      scalaC("""
        Seq(1, 2, 3)

        List(1, 2, 3)

        Set(1, 2, 3)

        Map(1 -> 'a', 2 -> 'b')
      """)
    ),

    slide(
      "Option, Either, Try",
      <.p("Build-In algebraic data types."),
      <.br,
      scalaC("""
        Option(1)                     == Some(1)
        Either.cond(true, "hello", 1) == Right(1)
        Try(1)                        == Success(1)
      """)
    ),

    noHeaderSlide(
      <.h2("Next"),
      <.br,
      <.h3("First Workshop Project")
    )
  )

  val Show = ScalaComponent
    .builder[Unit]("Slideshow")
    .renderStatic(
      <.div(
        ^.cls := "reveal",
        <.div(
          ^.cls := "slides",
          overview,
          primitives,
          collections,
          adts,
          summary
        )
      )
    )
    .build

  @JSExport
  def main(args: Array[String]): Unit = {
    Show().renderIntoDOM(dom.document.body)
  }
}
