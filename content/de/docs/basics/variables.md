# Variablen

## Deklaration und Initialisierung

Variablen werden mit `:=` deklariert und initialisiert. Dies ist der einzige Weg, Variablen in V zu deklarieren — sie haben immer einen Anfangswert und ihr Typ wird von der rechten Seite abgeleitet.

```v
name := 'Bob'
age := 20
large_number := i64(9999999999)
println(name)
println(age)
println(large_number)
```

## Veränderliche Variablen

Variablen sind standardmäßig **unveränderlich**. Verwende `mut`, um eine Variable veränderlich zu machen:

```v
mut age := 20
println(age)
age = 21
println(age)
```

> Wenn du versuchst, ohne `mut` neu zuzuweisen, lehnt der Compiler das ab.

## Typkonvertierung

Verwende `T(value)`, um zwischen Typen zu konvertieren:

```v
x := 42
y := f64(x)  // x nach f64 konvertiert
z := u8(x)   // x nach u8 konvertiert
```

## Mehrfachzuweisung

Mehrere Variablen können in einer Zeile geändert oder getauscht werden:

```v
mut a := 0
mut b := 1
println('${a}, ${b}') // 0, 1
a, b = b, a
println('${a}, ${b}') // 1, 0
```

## Werte ignorieren

Verwende `_`, um einen Rückgabewert zu verwerfen:

```v
fn foo() (int, int) {
    return 2, 3
}

fn main() {
    c, _ := foo()
    println(c)
}
```

## Namenskonvention

Alle Variablen- und Funktionsnamen müssen `snake_case` verwenden. Typnamen müssen `PascalCase` verwenden. Der Compiler erzwingt dies.

## Keine globalen Variablen

V erlaubt standardmäßig keine globalen Variablen. Alle Variablen müssen innerhalb von Funktionen deklariert werden. Dies führt zu besser vorhersehbarem, testbarem Code.

## Kein Shadowing

Variablen-Shadowing ist nicht erlaubt. Eine Variable mit einem Namen zu deklarieren, der bereits in einem übergeordneten Bereich verwendet wird, ist ein Kompilierfehler:

```v
fn main() {
    a := 10
    // a := 20  // <- Kompilierfehler: Neudefinition von `a`
}
```
