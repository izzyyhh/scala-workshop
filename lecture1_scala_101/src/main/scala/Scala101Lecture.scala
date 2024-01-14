
import PresentationUtil._
import japgolly.scalajs.react.ScalaComponent
import japgolly.scalajs.react.vdom.html_<^._
import org.scalajs.dom

import scala.scalajs.js.annotation.JSExport

object Scala101Lecture {

  import Enumeration._

  val overview = chapter(
    chapterSlide(
      <.h1("Scala 101")
    ),

    slide(
      "What we will learn in this lecture",
      Enumeration(
        Item.stable("Scala background"),
        Item.fadeIn("Expressions & Declarations & Objects"),
        Item.fadeIn("Types"),
        Item.fadeIn("Functions"),
        Item.fadeIn("Classes"),
        Item.fadeIn("Pattern Matching")
      )
    ),

    noHeaderSlide(
      <.h2("You have a question?"),
      <.h3("Ask it right away!")
    )
  )

  val introduction = chapter(
    chapterSlide(
      <.h2("What is Scala? And why?")
    ),

    slide(
      "The Name",
      <.h3(
        font(^.color := "#ce1d25", "Sca"), "lable ", 
        font(^.color := "#ce1d25", "La"), "nguage"
      ),
      <.br,
      <.h4(
        ^.cls := "fragment fade-in",
        font(^.color := "#ce1d25", "S"), "low ", 
        font(^.color := "#ce1d25", "C"), "ompiling ", 
        font(^.color := "#ce1d25", "A"), "cademic ", 
        font(^.color := "#ce1d25", "La"), "nguage"
      )
    ),

    slide(
      "Creation: Martin Odersky et al around 2004",
      <.img(
        ^.alt := "Scala Paper",
        ^.src := "./img/scala-paper.png"
      )
    ),

    slide(
      "Scala's Principles",
      <.img(
        ^.alt   := "Scala's Prinicples",
        ^.width := "50%",
        ^.src   := "./img/principles.svg"
      )
    ),

    slide(
      "Target-Systems",
      <.img(
        ^.alt   := "Scala's Targets",
        ^.width := "50%",
        ^.src   := "./img/targets.svg"
      )
    ),

    noHeaderSlide(
      <.h3("Why Scala?")
    ),

    slide(
      "Why Scala: Java ecosystem",
      <.img(^.alt := "Java Ecosystem", ^.src := "./img/java-logo.svg")
    ),

    slide(
      "Why Scala: Java ecosystem",
      Enumeration(
        Item.stable("access to Java ecosystem"),
        Item.fadeIn("or any ecosystem compiling to ByteCode"),
        Item.fadeIn("JVM performance (JIT, GC)"),
        Item.fadeIn("... and tooling (metrics, debugging, etc.)"),
      )
    ),

    slide(
      "JVM in a nutshell",
      <.img(
        ^.alt   := "JVM in a nutshell",
        ^.width := "50%",
        ^.src   := "./img/jvm.svg"
      )
    ),

    slide(
      "Why Scala: brings its own ecosysten",
      <.img(^.alt := "Scala Ecosystem", ^.src := "./img/scala-ecosystem.svg")
    ),

    slide(
      "Why Scala: fusion of FP and OOP",
      Enumeration(
        Item.stable("fusion of FP and OOP"),
        Item.fadeIn("with additional Type-Level programming on top"),
        Item.fadeIn("choose paradigm which solve your problem best ..."),
        Item.fadeIn("... stay in the same language")
      )
    ),

    slide(
      "Why Scala: industry & academia combined",
      Enumeration(
        Item.stable("big players use it: Twitter, Stripe to name a few"),
        Item.fadeIn("backed by Lightbend Inc."),
        Item.fadeIn("backed by EPFL"),
        Item.fadeIn("... and of course by an Open Source community")
      )
    ),

    noHeaderSlide(
      <.h3("Why not to use Scala?")
    ),

    slide(
      "Why not to use Scala: tooling",
      <.h3("Tooling")
    ),

    slide(
      "Why not to user Scala: learning curve",
      <.img(
        ^.alt := "Learning Curve",
        ^.src := "./img/learning_curve.jpg"
      )
    ),

    slide(
      "FP or OOP",
      <.h3("Functional Programming or Object Oriented Programming?"),
    ),

    slide(
      "FP or OOP: FP",
      <.p("FP for adding operations: FP is advantageous when you need to add new functions or behaviors without altering existing data structures due to composition."),
      scalaCFragment(
        """
        case class Transaction(amount: Double)
      """),
      scalaCFragment(
        """
        def sum(transactions: List[Transaction]): Double = transactions.map(_.amount).sum
      """),
      scalaCFragment(
        """
        def avg(transactions: List[Transaction]): Double = sum(transactions) / transactions.size
      """),
      scalaCFragment(
        """
        def max(transactions: List[Transaction]): Double = transactions.map(_.amount).max
      """),
    ),

    slide(
      "FP or OOP: OOP",
      <.p("OOP for adding things: OOP is more suited for scenarios where you need to add new types or classes that conform to existing operations or interfaces due to inheritance and polymorphism."),
      scalaCFragment(
        """
        abstract class Transaction {
          protected final double amount;

          public Transaction(double amount) { this.amount = amount; }

          public abstract double apply(double balance);
        }
        """),
      scalaCFragment(
        """
        class Deposit extends Transaction {
          public double apply(double balance) { return balance + this.amount; }
        }
        """),
      scalaCFragment(
        """
        class Deduction extends Transaction {
          public double apply(double balance) { return balance - this.amount; }
        }
      """),
    ),

    noHeaderSlide(
      <.h3("Are you still convinced?"),
      <.br,
      <.h4(
        ^.cls := "fragment fade-in",
        "No is not an answer! So, let's move on."
      )
    )
  )

  val expressions = chapter(
    chapterSlide(
      <.h2("Expressions & Declarations & Objects"),
      <.h3("Scalas' basic building blocks")
    ),

    noHeaderSlide(
      <.h3("Objects")
    ),

    slide(
      "Objects",
      <.p("An object is a collection of values and a set of operations on that values."),
      <.br,
      scalaC("""
        // example: literal object
        1
        // value: integer 1
        // operations: +, -, *, /, etc.
      """),
      scalaCFragment("""
        // example: literal object
        "Hello"
        // value: string Hello
        // operations: +, split, take, etc.
      """),
      scalaCFragment("""
        // example: class object (tuple)
        (1, "Hello")
        // values: integer 1 and string Hello
        // operations: _1, _2, swap, etc.
      """)
    ),

    slide(
      "Method calling",
      <.p("Infix notation allows calling *single-argument* methods without dots."),
      <.p("Can lead to more human-readable code."),
      scalaC(
        """
        "Hello".contains("Hell") == ("Hello" contains "Hell")
        List(1, 2, 3).drop(1) == (List(1, 2, 3) drop 1)

        // Symbolic operators are actually methods too
        1 + 2 == 1.+(2)
      """),
      <.br,
      <.p("But use with caution. It can become confusing for more complex expressions."),
      scalaC(
        """
        1 * 2 + 3 == 1.*(2).+(3)
        1 + 2 * 3 == 1.+(2.*(3))
      """)
    ),

    noHeaderSlide(
      <.h3("Expressions")
    ),

    slide(
      "Expressions",
      <.p("Expression can be objects, combination of objects or functions applied to objects. And they get evaluated/reduced to results.")
    ),

    slide(
      "Objects as expressions",
      <.p("Objects"),
      <.br,
      scalaC("""
        // already in reduced form
        1

        'a'

        "Hello"
      """)
    ),

    slide(
      "Operations as expressions",
      <.p("Function/Operation application"),
      <.br,
      scalaC("""
        1 + 2
      """),
      scalaCFragment("""
        == 3
      """),
      <.br,
      <.p(
        ^.cls := "fragment fade-in",
        "But how do we use the result?"
      )
    ),

    noHeaderSlide(
      <.h3("Assignment")
    ),

    slide(
      "Assignment of Results",
      scalaC("""
          val result = 1 + 2
        // ^    ^    ^
        // |    |    '
        // |    |  assigns result to identifier
        // |    '
        // |   identifier
        // '
        // starts assignment

        result == 3
      """)
    ),

    slide(
      "Assignment of Results",
      scalaC("""
        val result = 1 + 2

        // forbidden - `val result` is immutable and never changes
        result = 2 + 3
      """)
    ),

    slide(
      "Assignment of Results",
      scalaC(
        """
        var result = 1 + 2

        // `var`s are mutable
        result = 2 + 3
      """)
    ),

    slide(
      "Expressions",
      <.p("Okay, we can create single line expressions or assignments. But this is barely useful.")
    ),

    noHeaderSlide(
      <.h3("Block Expressions")
    ),

    slide(
      "Block Expressions",
      <.p("When you want to combine multiple expressions you put them in blocks."),
      <.br,
      scalaC("""
        // start with '{' and end with '}'
        {
          val a = 1 + 2
      
          3 * a
        }
      """)
    ),

    slide(
      "Block expressions",
      scalaC("""
        {
          val a = 1 + 2
      
          3 * a
        }
      """),
      scalaCFragment("""
        {
           val a = 3      <==
      
           3 * a
        }
      """),
      scalaCFragment("""
        {
           val a = 3
      
           3 * 3          <==
        }
      """),
      scalaCFragment("""
         == 9
      """)      
    ),

    slide(
      "Scoping: values in blocks",
      <.p("Access objects in the same or an outer block."),
      <.br,
      scalaC("""
        {
          val a = 1 + 2
 
          // `a` in scope
          {
             val b = 3 + 4
 
             a + b
          }
        }
      """)
    ),

    slide(
      "Scoping: values in blocks",
      scalaC("""
        {
          val a = 1 + 2
 
          {
             val b = 3 + 4

             a + b
          }
        }
      """),
      scalaCFragment("""
        {
          val a = 3       <==
 
          {
             val b = 7    <==
  
             a + b
          }
        }
      """)
    ),

    slide(
      "Scoping: values in blocks",
      scalaC("""
        {
          val a = 3
 
          {
             val b = 7

             3 + 7        <==
          }
        }
      """),
      scalaCFragment("""
        == 10
      """)
    ),

    slide(
      "Block Expressions",
      <.p("From now on we ignore the outer block brackets in the slides.")
    ),

    exerciseSlide(
      "Does it work?",
      scalaC("""
        val a = 5

        {
          val b = 3

          a + b
        }
      """),
      scalaCFragment("""
        == 8
      """)
    ),

    exerciseSlide(
      "Does it work?",
      scalaC("""
        val a = {
          val b = 6

          10
        }
        a + b
      """),
      scalaCFragment("""
        // no, `b` doesn't exist in the outer scope
      """)
    ),

    exerciseSlide(
      "Does it work?",
      scalaC("""
        val a = {
          a * 10
        }
      """),
      scalaCFragment("""
        // no, you try to define `a` by using itself
      """)
    ),

    exerciseSlide(
      "Does it work?",
      scalaC("""
        val a = 5

        {
          val a = 10

          a
        }
      """),
      scalaCFragment("""
        == 10
        // Inner blocks can override values from outer blocks
      """)
    ),

    noHeaderSlide(
      <.h3("Conditional Branching")
    ),

    slide(
      "Conditional expression",
      scalaC("""
        val a = 5

        if (a > 0) {
          "positive number"
        }
      """),
      scalaCFragment("""
        else if (a == 0) {
          "is zero"
        }
      """),
      scalaCFragment("""
        else {
          "negative number"
        }
      """)
    ),

    slide(
      "(Almost) Everything is an expression",
      <.p("The result of a conditional expression is the result of the branch which was taken."),
      scalaC(
        """
        val a = 5

        val result = if (a > 0) {
          "positive number"
        }
        else if (a == 0) {
          "is zero"
        }
        else {
          "negative number"
        }

        result
      """)
    ),

    slide(
      "Curly braces are optional",
      <.p("For blocks with a single expression curly braces are optional."),
      <.br,
      scalaC(
        """
        val a = 5

        val isEven = if (a % 2 == 0) true else false
        isEven
      """)
    ),

    slide(
      "Comparison",
      scalaC("""
        a >  b  // greater than
        a <  b  // smaller than
        a >= b  // greater or equal
        a <= b  // smaller or equal
        a == b // equal
        a != b // equal

        // more later on ...
      """)
    ),

    slide(
      "Short Summary",
      <.p("So far we have ..."),
      <.br,
      scalaC("""
        // object expressions
        val PI     = 3.14
        val radius = 2.0
      """),
      scalaCFragment("""
        // function applications
        val area = radius * radius * PI
      """),
      scalaCFragment("""
        // conditional expressions
        if (area > 4.0) {
          "big circle"
        }
        else {
          "small circle"
        }
      """)
    ),

    slide(
      "Expression Evaluation",
      <.p("But in which order are these expressions evaluated exactly?")
    ),

    slide(
      "Expression Evaluation",
      Enumeration(
        Item.stable("from top to bottom"),
        Item.fadeIn("from left to right"),
        Item.fadeIn("before application"),
        Item.fadeIn("following precedence rules")
      )
    ),

    slide(
      "Precedence",
      scalaC("""
        1. (characters not shown below)
        2. * / %
        3. + -
        4. :
        5. < >
        6. = !
        7. &
        8. ^
        9. |
        10. (all letters, $, _)
      """)
    ),

    exerciseSlide(
      "What's the result?",
      scalaC("""
        2 * 3 + 10
      """),
      scalaCFragment("""
        // prec('*') > prec('+')
        == (2 * 3) + 10
      """),
      scalaCFragment("""
        == 6 + 10
      """),
      scalaCFragment("""
        == 16
      """)
    ),

    exerciseSlide(
      "What's the result?",
      scalaC("""
        2.0 * 3.0 / 3.0
      """),
      scalaCFragment("""
        // '*' left most operation
        == (2.0 * 3.0) / 3.0
      """),
      scalaCFragment("""
        == 6.0 / 3.0
      """),
      scalaCFragment("""
        == 2.0
      """)
    ),

    exerciseSlide(
      "What's the result?",
      scalaC("""
        val a = 1 + 2

        if (a > 1 + 3) {
          "a = " + a
        }
        else {
          "too small"
        }
      """),
      scalaCFragment("""
        == {
          if (3 > 4) {
            "a = " + 3
          }
          else {
            "too small"
          }
        }
      """),
      scalaCFragment("""
        == "too small"
      """)
    ),

    noHeaderSlide(
      <.h3("Expressions return typed results"),
      <.br,
      scalaCFragment("""
        1       // Int
        "hello" // String

        1.0 + 2.0 // reduces to a Double
      """)
    ),

    noHeaderSlide(
      <.h2("But what are types?")
    )
  )

  val types = chapter(
    chapterSlide(
      <.h2("Types"),
      <.h3("Make your code more strict")
    ),

    slide(
      "Definition",
      <.h3("Types put constraints on term")
    ),

    slide(
      "State of a value",
      <.p("Restriction on objects."),
      <.br,
      scalaC("""
        val a: Int = 0

        // `a` is of type `Int`
        // is an Integer number
        // -2147483648 <= a <= 2147483647

        val b: String = a // forbidden
      """)
    ),

    slide(
      "Operation restriction",
      <.p("Restriction on operations"),
      <.br,
      scalaC("""
        1 + 2    == 3: Int
        1 + 2.0  == 3.0: Double
      """),
      scalaCFragment("""
        1 + true // forbidden
      """)
    ),

    slide(
      "Types",
      <.p("Types restrict the number of valid programs. Basically, it is harder for you to write invalid programs.")
    ),

    exerciseSlide(
      "What is the type?",
      scalaC("""
        1 + 2
      """),
      scalaCFragment("""
        == 3: Int
      """),
      <.br,
      scalaC("""
        1.0 + 2
      """),
      scalaCFragment("""
        == 3.0: Double
      """),
      <.br,
      scalaC("""
        "Hello " + true
      """),
      scalaCFragment("""
        == "Hello true": String
      """)
    ),

    exerciseSlide(
      "What is the type?",
      scalaC("""
        1 / 2
      """),
      scalaCFragment("""
        == 0: Int
      """),
      <.br,
      scalaC("""
        1 / 2.0
      """),
      scalaCFragment("""
        == 0.5: Double
      """)
    ),

    slide(
      "Type: number types",
      <.p("Scala picks the more precise number type during operator application.")
    ),
    
    slide(
      "Types are important",
      Enumeration(
        Item.stable("guarantees about state of values / application of operators"),
        Item.fadeIn("proven during compile time"),
        Item.fadeIn("no extra tests necessary")
      )
    ),

    noHeaderSlide(
      <.h4("We now know what Expressions are and how to use them."),
      <.br,
      <.h5("But how do we make them reusable?")
    )
  )

  val functions = chapter(
    chapterSlide(
      <.h2("Functions")
    ),

    slide(
      "Functions",
      <.p("Special type of expression which has a name, takes input and returns, as always, a result.")
    ),

    slide(
      "Functions",
      <.h4("They are expressions with a declaration")
    ),

    slide(
      "Functions",
      scalaC("""
        def plus(a: Int, b: Int): Int = a + b
      """),
      scalaCFragment("""
        // declaration
        def plus(a: Int, b: Int): Int
        //   ^     ^       ^       ^
        //   |     '-------|       |
        // identifier    input   result 
      """),
      scalaCFragment("""
        // body expression
           a + b
        // ^   ^
        // '---'
        //   |
        // input values
      """)
    ),

    slide(
      "Functions: val syntax",
      scalaC("""
        // functions are objects

        // this becomes
        def plus(a: Int, b: Int): Int = a + b

        // that
        val plus: (Int, Int) => Int = (a, b) => a + b
      """)
    ),

    slide(
      "Functions: curly braces optional",
      scalaC(
        """
        // curly braces are optional for _single expression_ functions
        def plus(a: Int, b: Int): Int = a + b

        // is the same as
        def plus(a: Int, b: Int): Int = {
          a + b
        }
      """)
    ),

    slide(
      "Functions",
      Enumeration(
        Item.stable("have a unique identifier (name)"),
        Item.fadeIn("declare a number of parameters as input (arity)"),
        Item.fadeIn("and a single result type"),
        Item.fadeIn("body expression fulfills the declaration")
      )
    ),

    slide(
      "Function application",
      scalaC("""
        plus(1, 2) == 3
      """),
      scalaCFragment("""
        // `1` assigned to `a` and `2` to `b`
        // every appearance of `a` and `b` is replaced by the objects
        1 + 2      == 3
      """)
    ),

    noHeaderSlide(
      <.h3("Functions return objects. Functions are objects.")
    ),

    slide(
      "Curried Function",
      scalaC("""
        def greet(greeting: String)(name: String): String = s"$greeting $name!"
      """),
      scalaCFragment("""
        val sayHi: String => String = greet("Hi")
      """),
      scalaCFragment("""
        sayHi("Scala") == "Hi Scala!"
      """),
      scalaCFragment(
        """
        sayHi("Functional Programming") == "Hi Functional Programming!"
      """)
    ),

    slide(
      "Curried Function under the hood",
      scalaC(
        """
        def greet(greeting: String)(name: String): String = s"$greeting $name!"
      """),
      scalaCFragment(
        """
        // this is equal to
        def greet(greeting: String): (String => String) = {
          (name: String): String => {
            s"$greeting $name!"
          }
        }
      """),
      scalaCFragment(
        """
        // which is equal to
        def greet(greeting: String): (String => String) = {
          def greetName(name: String): String = {
            s"$greeting $name!"
          }

          greetName
          // `return` keyword is not necessary, last expression is returned automatically
        }
      """)
    ),

    slide(
      "Curried Functions",
      Enumeration(
        Item.stable("this technique is called currying"),
        Item.fadeIn("apply a single parameter at a time (left to right) - it's called partial application"),
        Item.fadeIn("every application returns a new function of arity $n - 1$")
      )
    ),

    slide(
      "Functions: default parameter",
      <.p("Default parameters and by-name application"),
      <.br,
      scalaC(
        """
        def greet(greeting: String = "Hello", name: String = "World"): String = s"$greeting $name!"

        greet() == "Hello World!"
        greet("Hi") == "Hi World!"
        greet("Hi", "Scala") == "Hi Scala!"
        // Target argument by name
        greet(name = "Scala") == "Hello Scala!"
      """)
    ),

    slide(
      "Higher-Order functions",
      scalaC("""
        // we can return function, we can pass functions - all just objects
        def greetList(greetingFunc: String => String, names: List[String]): List[String] = {
          names.map(greetingFunc)
        }
      """),
      scalaCFragment("""
        def hi(name: String): String = s"Hi $name!"
        def hello(name: String): String = s"Hello $name!"
      """),
      scalaCFragment(
        """
        val names = List("Alice", "Bob")
      """),
      scalaCFragment(
        """
        greetList(hi, names)    == List("Hi Alice!", "Hi Bob!")
        greetList(hello, names) == List("Hello Alice!", "Hello Bob!")
      """),
    ),

    slide(
      "Anonymous Functions",
      <.p("Sometimes a function parameter in a higher-order function is only used once. So why provide a whole declaration?")
    ),

    noHeaderSlide(
      <.h3("Anonymous Functions")
    ),

    slide(
      "Anonymous Functions",
      scalaC("""
        // just provide the expression body - no declaration
        val goodDay: String => String = name => s"Good day, $name!"
        //     ^        ^           ^       ^              ^
        //     |        |           |       |              |
        // identifier   |           |       |              |
        //        argument type(s)  |       |              |
        //                     return type  |              |
        //                            input argument(s)    |
        //                                          body expression

        greetList(goodDay, names) == List("Good day, Alice!", "Good day, Bob!")
      """),
      scalaCFragment(
        """
        // multiple arguments
        val greet: (String, String) => String = (greeting, name) => s"$greeting $name!"

        greet("Hi", "Alice") == "Hi Alice!"
      """),
    ),

    exerciseSlide(
      "Let's code: Functions",
      bash("""
        # start sbt (keep it running)
        $> sbt

        # switch into exercise project
        sbt> project scala101-exercises

        # to compile your code
        sbt> compile

        # to test your implementation
        sbt> Test / testOnly exercise1.FunctionsSpec
      """)
    ),

    exerciseSlide(
      "Let's code",
      scalaC("""
        // package/path definition: <package>.<object-name> must be unique
        package exercise1

        object Functions {
          // your code goes here
          
          ...
        }
      """)
    ),

    exerciseSlide(
      "Let's code: HigherOrder",
      bash("""
        sbt> project scala101-exercises
        sbt> Test / testOnly exercise1.HigherOrderSpec
      """)
    ),

    noHeaderSlide(
      <.h3("Enough about functions for now"),
      <.br,
      <.h4("Let's do something new. Let's create some data types!")
    )
  )

  val classes = chapter(
    chapterSlide(
      <.h2("Classes")
    ),

    slide(
      "Create a new type",
      <.h3("Scala's objects only get us so far."),
      <.br,
      <.h4("We want to be able to create our own.")
    ),

    slide(
      "Create a new type",
      <.p("You create new types in Scala by defining Classes. A class is a way to define a set of objects which have same fields and functions."),
      <.br,
      Enumeration(
        Item.fadeIn("class"),
        Item.fadeIn("case class"),
        Item.fadeIn("object"),
        Item.fadeIn("trait"),
        Item.fadeIn("abstract class")
      )
    ),

    noHeaderSlide(
      <.h3("Classes")
    ),

    slide(
      "Classes",
      scalaC("""
        class Person(val name: String, val age: Int)
        //     ^        ^                 ^
        //     '        '-----------------'
        // identifier            '
        //              constructor with public fields
      """),
      scalaCFragment("""
        val user = new Person("Gandalf", 2019)
        //          ^
        //          '
        //   call constructor / create new object

        user.name == "Gandalf"
        user.age  == 2019

        // `val` cannot be changed after assignment
        user.name = "Gandolf" // forbidden
      """)
    ),

    slide(
      "Classes: private fields",
      scalaC("""
        class Person(val name: String, age: Int)
        //                            ^
        //                            '
        //                       private field
      """),
      scalaCFragment("""
        val user = new Person("Gandalf", 2019)

        user.name == "Gandalf"
        user.age // not allowed
      """)
    ),

    slide(
      "Classes: inner fields",
      scalaC("""
        class Person(val name: String, val age: Int) {
          private val ageString = age.toString

          val show = "person: " + name + ", " + ageString
        }

        new Person("Gandalf", 2019).show == "person: Gandalf, 2019"
      """),
      scalaCFragment("""
        val user = new Person("Gandalf", 2019)

        user.show == "person: Gandalf, 2019"
        user.ageString // not allowed
      """)
    ),

    slide(
      "Classes: methods",
      <.p("Methods aka context sensitive functions."),
      <.br,
      scalaC("""
        class Person(val name: String, val age: Int) {

        // functions refering to their object are called methods
          def isOlder(other: Person): Boolean = age > other.age
      """),
      scalaCFragment("""
        // equal to
          def isOlder(other: Person): Boolean = this.age > other.age
        }
      """)
    ),

    slide(
      "Classes: methods",
      <.p("Methods aka context sensitive functions."),
      <.br,
      scalaC("""
        // or
        def isOlder(user: Person)(other: Person): Boolean = 
          user.age > other.age
      """),
      scalaCFragment("""
        val gandalf = new Person("Gandalf", 2019)

        gandalf.isOlder(new Person("Frodo", 33)) == {
          isOlder(gandalf)(new Person("Frodo", 33))
        }
      """)
    ),

    slide(
      "Classes: methods",
      <.p("Methods are functions which have their surrounding object in scope and belong to the class. They also provide a means to get infix notation.")
    ),

    slide(
      "Classes: immutable fields",
      <.p("`val` fields cannot be changed after assignment. To change them you have to create a new object.")
    ),

    noHeaderSlide(
      <.h3("Case Classes")
    ),

    slide(
      "Case Classes",
      scalaC("""
        case class Person(name: String, age: Int)
        //          ^    ^             ^
        //          |    '-------------'
        //       identifier     |
        //                      |
        //                 public fields

        // no `new` keyword any longer
        val gandalf = Person("Gandalf", 2019)
      """),
      scalaCFragment(
        """
        // case classes support structural equality out of the box (unlike Java)
        gandalf == Person("Gandalf", 2019)
        gandalf != Person("Gandalf", 2000)
      """
      ),
    ),

    slide(
      "Case Classes: How to mutate them?",
      scalaC("""
        // comes with a copy method
        val gandalf = Person("Gandalf", 2019)

        // creates copy of `gandalf`
        gandalf.copy("Gandolf", 2000) == Person("Gandolf", 2000)
      """)
    ),

    slide(
      "Case Classes: How to mutate them?",
      scalaC("""
        val gandalf = Person("Gandalf", 2019)

        // change just a subset of fields
        gandalf.copy(name = "Gandolf") == Person("Gandolf", 2019)
      """)
    ),

    noHeaderSlide(
      <.h3("Objects")
    ),

    slide(
      "Objects",
      <.p("Objects are classes with a single instance. You use them to provide static fields and functions.")
    ),

    slide(
      "Objects",
      <.p("From now on we refer to object classes as ", <.strong("Objects"), " and object terms as ", <.strong("Values"), ".")
    ),

    slide(
      "Objects",
      scalaC("""
        object PersonUtils {
        
          // constant fields start with a uppercase letter
          val Gandalf = Person("Gandalf", 2019)

          def older(a: Person, b: Person): Person = 
            if (a.age > b.age) a else b
        }
      """),
      scalaCFragment("""
        PersonUtils.older(Person("Frodo", 33), PersonUtils.Gandalf) == PersonUtils.Gandalf
      """)
    ),

    slide(
      "Companion Objects: a class's companion",
      <.p("Companion to a class."),
      <.br,
      scalaC("""
        object Person {
          // Companions can access each other's private fields
          private val message = "My name is"

          def isGandalf(person: Person): Boolean = person.name == "Gandalf"
        }
      """),
      scalaCFragment(
        """
        // Companion must have same name and be declared in the same file
        case class Person(name: String, age: Int) {
          def greet: String = s"${Person.message} $name"
        }
      """),
      scalaCFragment("""
        val gandalf = Person("Gandalf", 2019)

        gandalf.greet == "My name is Gandalf"

        Person.isGandalf(gandalf) == true
      """)
    ),

    slide(
      "Traits",
      <.p("But what if we have multiple data types which share a relation?")
    ),

    noHeaderSlide(
      <.h3("Traits")
    ),

    slide(
      "Traits",
      scalaC("""
        // all people (of some magic realm) but of different type
        case class Wizard(name: String, power: String)
        case class Elf(name: String, age: Int)        
        case class Dwarf(name: String, height: Int)

        // They all have a name, let's extract that
      """)
    ),

    slide(
      "Traits",
      scalaC("""
        trait Person {
          val name: String
        }
      """),
      scalaCFragment(
        """
        case class Wizard(name: String, power: String) extends Person
        case class Elf(name: String, age: Int)         extends Person
        case class Dwarf(name: String, height: Int)    extends Person
      """),
      scalaCFragment(
        """
        // Does not compile
        case class Nameless()                          extends Person
      """)
    ),

    slide(
      "Traits: common properties and behaviour",
      <.p("Let's add some more behavior"),
      scalaCFragment(
        """
        trait Person {

          // expected field
          val name: String

          // abstract function, must be implemented by child classes
          def likesPlace(place: String): Boolean

          // function with default implementation, may be overridden by child classes
          def greet: String = s"Hello, my name is $name"
        }
      """)
    ),

    slide(
      "Traits: common properties and behaviour",
      scalaC(
        """
        case class Elf(name: String, age: Int) extends Person {
          def likesPlace(place: String): Boolean = place == "woods"
        }
      """),
      scalaCFragment(
        """
        val legolas = Elf("Legolas", 2931)

        legolas.likesPlace("woods")     == true
        legolas.likesPlace("The Shire") == false

        legolas.greet == "Hello, my name is Legolas"
      """),
      scalaCFragment("""
        case class Wizard(name: String, power: String) extends Person {
          // Wizards travel a lot, they like every place
          def likesPlace(place: String): Boolean = true

          override def greet: String = s"Hello, my name is $name and I'm a wizard"
        }
        """),
      scalaCFragment(
        """
        val gandalf = Wizard("Gandalf", "magic")

        gandalf.likesPlace("woods")     == true
        gandalf.likesPlace("The Shire") == true

        gandalf.greet == "Hello, my name is Gandalf and I'm a wizard"
        """),
    ),

    noHeaderSlide(
      <.h3("Abstract Classes")
    ),

    slide(
      "Abstract Classes",
      <.p("case classes do not support compiler arguments. For that we need abstract classes."),
      <.p("Rarely used in Scala as traits are more powerful."),
      <.br,
      scalaC("""
        // non complete (abstract methods) class definition
        abstract class Person(val name: String) {

          def isOlder(person: Person): Boolean
        }
      """),
    ),

    noHeaderSlide(
      <.h3("Functions and Classes")
    ),

    slide(
      "Functions and Classes",
      <.p("Function values are instances of Function-Classes in Scala. A Function-Class is a class which provides an ", <.strong("apply"), " method.")
    ),

    slide(
      "Functions and Classes",
      scalaC("""
        class Plus() {

          def apply(a: Int, b: Int): Int = a + b
        }
      """),
      scalaCFragment("""
        val plus = new Plus()

        plus.apply(1, 2) == plus(1, 2)
                         == 3
      """)
    ),

    slide(
      "Functions and Classes",
      scalaC("""
        object Plus {

          def apply(a: Int, b: Int): Int = a + b
        }
      """),
      scalaCFragment("""
        Plus.apply(1, 2) == Plus(1, 2)
                         == 3
      """)
    ),

    slide(
      "Functions and Classes: inheritance",
      scalaC("""
        object Plus extends ((Int, Int) => Int) {

          def apply(a: Int, b: Int): Int = a + b
        }
      """),
      scalaCFragment("""
        Plus.apply(1, 2) == Plus(1, 2)
                         == 3
      """),
      scalaCFragment("""
        // invalid
        object Divide extends ((Int, Int) => Int) {

          def apply(a: Int, b: Int): Double = a / b
        }
      """)
    ),

    slide(
      "OOP",
      <.h4("This all looks like OOP to you?"),
      <.br,
      <.p(
        ^.cls := "fragment fade-in",
        "That's because it is. Again Scala is the fusion of OOP and FP."
      )
    ),

    exerciseSlide(
      "Let's code: Classes",
      bash("""
        sbt> project scala101-exercises
        sbt> Test / testOnly exercises1.ClassesSpec
      """)
    ),

    noHeaderSlide(
      <.h3("So far, We learned stuff about ..."),
      <.br,
      Enumeration(
        Item.fadeIn("expressions and declarations"),
        Item.fadeIn("functions and types"),
        Item.fadeIn("classes"),
      ),
      <.br,
      <.h4(
        ^.cls := "fragment fade-in",
        "We are ready for the FP part, right?"
      )
    )
  )

  val patternMatching = chapter(
    chapterSlide(
      <.h2("Pattern Matching")
    ),

    slide(
      "Pattern Matching",
      Enumeration(
        Item.stable("match values against pattern"),
        Item.fadeIn("extract information"),
        Item.fadeIn("decide program control flow")
      )
    ),

    slide(
      "Pattern Matching",
      scalaC("""
        val person: Person = ???

        person match {
          case Wizard(name, power) => s"this Wizards uses $power"
          case Elf(name, age)      => s"this Elf is $age years old"
          case Dwarf(name, height) => s"this dwarf is $height cm tall"
        }
      """)
    ),

    slide(
      "Pattern Matching",
      scalaC("""
        val person = Wizard("Gandalf", "magic")
      """),
      scalaCFragment("""
        person match {
          case Wizard(name, power) => s"this Wizards uses $power"
          case Elf(name, age)      => s"this Elf is $age years old"
          case Dwarf(name, height) => s"this dwarf is $height cm tall"
        }
      """),
      scalaCFragment("""
        person match {
          case Wizard(name, power = "magic") => s"this Wizards uses $power"
          // case Elf(name, age)             => ...
          // case Dwarf(name, height)        => ...
        }
      """)
    ),

    slide(
      "Pattern Matching",
      scalaC("""
        val person = Dwarf("Gimli", 107 /*cm*/)
      """),
      scalaCFragment("""
        person match {
          case Wizard(name, power) => s"this Wizards uses $power"
          case Elf(name, age)      => s"this Elf is $age years old"
          case Dwarf(name, height) => s"this dwarf is $height cm tall"
        }
      """),
      scalaCFragment("""
        person match {
          // case Wizard(name, power) => ...
          case Elf(name, age)         => s"this Elf is $age years old"
          case Dwarf(name, height)    => s"this dwarf is $height cm tall"
        }
      """),
      scalaCFragment("""
        person match {
          // case Wizard(name, power)    => ...
          // case Elf(name, age)         => ...
          case Dwarf(name, height = 107) => s"this dwarf is $height cm tall"
        }
      """)
    ),

    slide(
      "Omit values you don't need",
      scalaC("""
        val person: Person = ???

        person match {
          case Wizard(name, _) => name
          ...
        }
      """)
    ),

    slide(
      "Conditional cases / Guards",
      scalaC("""
        val person: Person = ???

        person match {
          case Wizard(name, _) if name == "Saruman" => "So you have chosen… death"
          case Wizard(name, _) if name == "Gandalf" => "a wizard is never late"
          case Wizard(_, _)                         => "I don't know you"
          ...
        }
      """)
    ),

    slide(
      "Multiple conditions",
      scalaC("""
        val person: Person = ???

        person match {
          case Wizard(_, _) | Dwarf(_, _) => "Certainly not an elf"
          ...
        }
      """)
    ),

    slide(
      "Get the whole value",
      scalaC("""
        val person: Person = ???

        person match {
          case w: Wizard(_, power) if power == "magic" => w
          case p: Person                               => p
          ...
        }
      """)
    ),

    slide(
      "Match on everything",
      scalaC("""
        val person: Person = ???

        person match {
          case Wizard(name, _) => "The mighty " + name
          case person: Person  => person.name

          // can't reach this -> previous case captures everything
          case Dwarf(_, _) => "you will never now"
        }
      """)
    ),

    slide(
      "Ignore match",
      scalaC("""
        val person: Person = ???

        person match {
          case Wizard(name, _) => "The mighty " + name

          // Default option
          case _               => "I don't care"
        }
      """)
    ),

    slide(
      "Exhaustive matches: Sealed Traits",
      scalaC(
        """
        sealed trait Color
        // sealed: All subtypes must be defined in the same file.
        // This way the compiler can check if the match is exhaustive.

        case object Green extends Color
        case object Red   extends Color
      """),
      scalaCFragment(
        """
        // Using the enum
        def printColor(color: Color): String = color match {
          case Green => "Nice Green"
          case Red   => "Cool Red"
          case _     => // This can never happen as all possible subtypes are matched
        }

        printColor(Red) == "Cool Red"
        """
      ),
      scalaCFragment(
        """
        def printColor(color: Color): String = color match {
          case Green => "Nice Green"
          // Missing case for Red, does not compile
        }
        """
      )
    ),

    slide(
      "Match primitives",
      scalaC("""
        0 match {
          case 5 => "yeah five"
          case 0 => "nay zero"
          case _ => "don't care"
        }
      """)
    ),

    slide(
      "Match tuples",
      scalaC("""
        val elf = Elf(...)
        val hobbit = Hobbit(...)

        (elf, hobbit) match {
          case (Elf("Legolas", _), Hobbit("Frodo", _)) => "and my bow"
        }
      """)
    ),

    exerciseSlide(
      "Let's code: Pattern Matching",
      bash("""
        sbt> project scala101-exercises
        sbt> Test / testOnly exercise1.PatternMatchingSpec
      """)
    )
  )

  val summary = chapter(
    chapterSlide(
      <.h2("Summary")
    ),

    slide(
      "Expressions",
      scalaC("""
        {
          val a = 1 + 2
      
          3 * a
        }

        == 15
      """)
    ),

    slide(
      "Types",
      scalaC("""
        val a: String = "Hello"

        val b: Int = a // no no
      """)
    ),

    slide(
      "Functions",
      scalaC("""
        def plus(a: Int, b: Int): Int = a + b

        plus(1, 2) == 3
      """)
    ),

    slide(
      "Classes",
      scalaC("""
        trait Person {
          val name: String
        }

        case class Wizard(name: String, power: String) extends Person
        case class Elf(name: String, age: Int)         extends Person
      """)
    ),

    slide(
      "Pattern Matching",
      scalaC("""
        val person: Person = ???

        person match {
          case Wizard(name, _) => name
          case Elf(name, _)    => name
        }
      """)
    ),

    noHeaderSlide(
      <.h2("Next Topic"),
      <.br,
      <.h3("Functional Programming 101")
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
          introduction,
          expressions,
          types,
          functions,
          classes,
          patternMatching,
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
