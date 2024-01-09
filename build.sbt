val common = Seq(
  version      := "DEVELOP",
  scalaVersion := "2.13.12"
)

val reactV = "16.2.0"

lazy val lectureCommon = Seq(
  libraryDependencies ++= Seq(
    "com.github.japgolly.scalajs-react" %%% "core" % "2.1.1",
    "org.scala-js" %%% "scalajs-dom" % "2.8.0"
  ),
  jsDependencies ++= Seq(
    "org.webjars.bower" % "react" % "15.2.1" / "react-with-addons.js" minified "react-with-addons.min.js" commonJSName "React",
    "org.webjars.bower" % "react" % "15.2.1" / "react-dom.js"         minified "react-dom.min.js" dependsOn "react-with-addons.js" commonJSName "ReactDOM"
  ),

  scalaJSUseMainModuleInitializer := true
)

val copyFast = taskKey[Unit]("Copy fast optimized JS presentation.")

def copyFastImpl(project: String) = Seq(
  copyFast := {
    IO.copyFile(
      target.value / "scala-2.13" / s"$project-fastopt.js",
      baseDirectory.value / "presentation.js"
    )
    IO.copyFile(
      target.value / "scala-2.13" / s"$project-jsdeps.js",
      baseDirectory.value / "jsdeps.js"
    )
  }
)

val copyFull = taskKey[Unit]("Copy fully optimized JS presentation.")

def copyFullImpl(project: String) = Seq(
  copyFull := {
    IO.copyFile(
      target.value / "scala-2.13" / s"$project-opt.js",
      baseDirectory.value / "presentation.js"
    )
    IO.copyFile(
      target.value / "scala-2.13" / s"$project-jsdeps.min.js",
      baseDirectory.value / "jsdeps.js"
    )
  }
)

lazy val root = project
  .in(file("."))
  .aggregate(
    `introduction-lecture`,
    `lectures-shared`, `exercises-shared`,
    `scala101-lecture`, `scala101-exercises`,
    `fp101-lecture`, `fp101-exercises`,
    `std-lib-lecture`, `std-lib-exercises`,
    `typeclasses-101-lecture`, `typeclasses-101-exercises`,
    `typeclasses-incarnations-lecture`, `typeclasses-incarnations-exercises`,
    `side-effects-lecture`,
    `io-lecture`, `io-exercises`,
  )

lazy val `introduction-lecture` = project
  .in(file("lecture0_introduction"))
  .enablePlugins(ScalaJSPlugin)
  .enablePlugins(JSDependenciesPlugin)
  .settings(
    common,
    lectureCommon,
    copyFastImpl("introduction-lecture"),
    copyFullImpl("introduction-lecture"),
    addCommandAlias("fastCompile", "; fastOptJS; copyFast"),
    addCommandAlias("fullCompile", "; fullOptJS; copyFull")
  )
  .settings(
    name := "introduction-lecture",
  )
  .dependsOn(`lectures-shared`)

lazy val `lectures-shared` = project
  .in(file("lectures-shared"))
  .enablePlugins(ScalaJSPlugin)
  .enablePlugins(JSDependenciesPlugin)
  .settings(
    common,
    lectureCommon,
    Seq(
      scalaJSUseMainModuleInitializer := false
    )
  )

lazy val `exercises-shared` = project
  .in(file("exercises-shared"))
  .settings(common)
  .settings(
    libraryDependencies ++= Seq(
      "org.scalacheck" %% "scalacheck" % "1.17.0" % Test,
      "org.scalameta" %% "munit" % "1.0.0-M10" % Test,
    )
  )

lazy val `scala101-lecture` = project
  .in(file("lecture1_scala_101"))
  .enablePlugins(ScalaJSPlugin)
  .enablePlugins(JSDependenciesPlugin)
  .settings(
    common,
    lectureCommon,
    copyFastImpl("scala101-lecture"),
    copyFullImpl("scala101-lecture"),
    addCommandAlias("fastCompile", "; fastOptJS; copyFast"),
    addCommandAlias("fullCompile", "; fullOptJS; copyFull")
  )
  .settings(
    name := "scala101-lecture",
  )
  .dependsOn(`lectures-shared`)

lazy val `scala101-exercises` = project
  .in(file("exercise1_scala_101"))
  .settings(common)
  .settings(
    name := "scala101-exercises"
  )
  .dependsOn(`exercises-shared` % "compile->compile;test->test")

lazy val `fp101-lecture` = project
  .in(file("lecture2_fp_101"))
  .enablePlugins(ScalaJSPlugin)
  .enablePlugins(JSDependenciesPlugin)
  .settings(
    common,
    lectureCommon,
    copyFastImpl("fp101-lecture"),
    copyFullImpl("fp101-lecture"),
    addCommandAlias("fastCompile", "; fastOptJS; copyFast"),
    addCommandAlias("fullCompile", "; fullOptJS; copyFull")
  )
  .settings(
    name := "fp101-lecture"
  )
  .dependsOn(`lectures-shared`)

lazy val `fp101-exercises` = project
  .in(file("exercise2_fp_101"))
  .settings(common)
  .settings(
    name := "fp101-exercises"
  )
  .dependsOn(`exercises-shared` % "compile->compile;test->test")

lazy val `std-lib-lecture` = project
  .in(file("lecture3_std_lib"))
  .enablePlugins(ScalaJSPlugin)
  .enablePlugins(JSDependenciesPlugin)
  .settings(
    common,
    lectureCommon,
    copyFastImpl("std-lib-lecture"),
    copyFullImpl("std-lib-lecture"),
    addCommandAlias("fastCompile", "; fastOptJS; copyFast"),
    addCommandAlias("fullCompile", "; fullOptJS; copyFull")
  )
  .settings(
    name := "std-lib-lecture",
    libraryDependencies ++= Seq(
      "org.scala-lang" % "scala-compiler" % scalaVersion.value,
    ),
  )
  .dependsOn(`lectures-shared`)

lazy val `std-lib-exercises` = project
  .in(file("exercise3_std_lib"))
  .settings(common)
  .settings(
    name := "std-lib-exercises"
  )
  .dependsOn(`exercises-shared` % "compile->compile;test->test")

lazy val `typeclasses-101-lecture` = project
  .in(file("lecture4_typeclasses_101"))
  .enablePlugins(ScalaJSPlugin)
  .enablePlugins(JSDependenciesPlugin)
  .settings(
    common,
    lectureCommon,
    copyFastImpl("typeclasses-101-lecture"),
    copyFullImpl("typeclasses-101-lecture"),
    addCommandAlias("fastCompile", "; fastOptJS; copyFast"),
    addCommandAlias("fullCompile", "; fullOptJS; copyFull")
  )
  .settings(
    name := "typeclasses-101-lecture"
  )
  .dependsOn(`lectures-shared`)

lazy val `typeclasses-101-exercises` = project
  .in(file("exercise4_typeclasses_101"))
  .settings(common)
  .settings(
    name := "typeclasses-101-exercises"
  )
  .dependsOn(`exercises-shared` % "compile->compile;test->test")

lazy val `typeclasses-incarnations-lecture` = project
  .in(file("lecture5_typeclasses_incarnations"))
  .enablePlugins(ScalaJSPlugin)
  .enablePlugins(JSDependenciesPlugin)
  .settings(
    common,
    lectureCommon,
    copyFastImpl("typeclasses-incarnations-lecture"),
    copyFullImpl("typeclasses-incarnations-lecture"),
    addCommandAlias("fastCompile", "; fastOptJS; copyFast"),
    addCommandAlias("fullCompile", "; fullOptJS; copyFull")
  ).settings(
    name := "typeclasses-incarnations-lecture"
  ).dependsOn(`lectures-shared`)

lazy val `typeclasses-incarnations-exercises` = project
  .in(file("exercise5_typeclasses_incarnations"))
  .settings(common)
  .settings(
    name := "typeclasses-incarnations-exercises",
    libraryDependencies += "org.typelevel" %% "cats-core" % "2.10.0" % Compile,
  )
  .dependsOn(`exercises-shared` % "compile->compile;test->test")

lazy val `side-effects-lecture` = project
  .in(file("lecture6_side_effects"))
  .enablePlugins(ScalaJSPlugin)
  .enablePlugins(JSDependenciesPlugin)
  .settings(
    common,
    lectureCommon,
    copyFastImpl("side-effects-lecture"),
    copyFullImpl("side-effects-lecture"),
    addCommandAlias("fastCompile", "; fastOptJS; copyFast"),
    addCommandAlias("fullCompile", "; fullOptJS; copyFull")
  )
  .settings(
    name := "side-effects-lecture",
  )
  .dependsOn(`lectures-shared`)

lazy val `io-lecture` = project
  .in(file("lecture7_io"))
  .enablePlugins(ScalaJSPlugin)
  .enablePlugins(JSDependenciesPlugin)
  .settings(
    common,
    lectureCommon,
    copyFastImpl("io-lecture"),
    copyFullImpl("io-lecture"),
    addCommandAlias("fastCompile", "; fastOptJS; copyFast"),
    addCommandAlias("fullCompile", "; fullOptJS; copyFull")
  )
  .settings(
    name := "io-lecture",
  )
  .dependsOn(`lectures-shared`)

lazy val `io-exercises` = project
  .in(file("exercise7_io"))
  .settings(common)
  .settings(
    name := "io-exercises",
    libraryDependencies ++= Seq(
      "org.typelevel" %% "cats-core" % "2.10.0" % Compile,
      "org.typelevel" %% "cats-effect" % "3.5.2" % Compile
    )
  )
