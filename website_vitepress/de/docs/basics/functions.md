# Funktionen

## Grundlegende Syntax

```v
fn main() {
    println(add(77, 33))
    println(sub(100, 50))
}

fn add(x int, y int) int {
    return x + y
}

fn sub(x int, y int) int {
    return x - y
}
```

Der Rückgabetyp wird **nach** der Parameterliste angegeben. Wenn die Funktion nichts zurückgibt, wird der Rückgabetyp weggelassen.

## Hoisting

Funktionen können verwendet werden, bevor sie deklariert werden. V hebt alle Deklarationen (Hoisting), sodass keine Header-Dateien oder Vorwärtsdeklarationen benötigt werden.

## Mehrere Rückgabewerte

```v
fn foo() (int, int) {
    return 2, 3
}

a, b := foo()
println(a) // 2
println(b) // 3
c, _ := foo() // den zweiten Wert mit `_` ignorieren
```

## Sichtbarkeit

Funktionen sind standardmäßig **privat**. Verwende `pub`, um sie zu exportieren:

```v
pub fn public_function() {
}

fn private_function() {
}
```

## Kein Überladen

Funktionen können nicht überladen werden. Dadurch bleibt der Code eindeutig und einfach zu lesen.

## Methoden

Funktionen können an Typen gebunden werden:

```v
struct User {
    name string
    age  int
}

fn (u User) can_register() bool {
    return u.age >= 16
}

fn (mut u User) register() {
    println('${u.name} is now registered')
}

fn main() {
    mut u := User{ name: 'Frodo', age: 25 }
    if u.can_register() {
        u.register()
    }
}
```

## Höhere-Ordnung-Funktionen

Funktionen sind erstklassige Werte und können an andere Funktionen übergeben werden:

```v
fn apply(arr []int, f fn(int) int) []int {
    mut result := []int{}
    for x in arr {
        result << f(x)
    }
    return result
}

fn double(x int) int {
    return x * 2
}

fn main() {
    nums := [1, 2, 3, 4, 5]
    doubled := apply(nums, double)
    println(doubled) // [2, 4, 6, 8, 10]
}
```

## Anonyme Funktionen

```v
fn main() {
    double := fn (x int) int {
        return x * 2
    }
    println(double(5)) // 10
}
```
