# Interfaces

Interfaces definieren einen Vertrag — eine Menge von Methoden, die ein Typ implementieren muss. Es gibt kein explizites `implements`-Schlüsselwort; Typen erfüllen Interfaces automatisch (strukturelles/Duck-Typing).

## Ein Interface definieren

```v
interface Shape {
    area() f64
    perimeter() f64
}
```

## Ein Interface implementieren

Jeder Struct, der die erforderlichen Methoden hat, implementiert das Interface automatisch:

```v
struct Circle {
    radius f64
}

fn (c Circle) area() f64 {
    return 3.14159 * c.radius * c.radius
}

fn (c Circle) perimeter() f64 {
    return 2 * 3.14159 * c.radius
}

struct Rectangle {
    width  f64
    height f64
}

fn (r Rectangle) area() f64 {
    return r.width * r.height
}

fn (r Rectangle) perimeter() f64 {
    return 2 * (r.width + r.height)
}
```

## Interfaces verwenden

```v
fn print_shape_info(s Shape) {
    println('Area:      ${s.area():.2f}')
    println('Perimeter: ${s.perimeter():.2f}')
}

fn main() {
    shapes := [
        Shape(Circle{radius: 5.0}),
        Rectangle{width: 4.0, height: 3.0},
    ]

    for s in shapes {
        print_shape_info(s)
        println('---')
    }
}
```

## Interface mit Feldern

Interfaces können auch Felder (nicht nur Methoden) erfordern:

```v
interface Named {
    name string
}

struct Person {
    name string
}

fn greet(n Named) {
    println('Hello, ${n.name}!')
}

fn main() {
    p := Person{name: 'Alice'}
    greet(p)
}
```

## Typprüfung mit Interfaces

```v
fn describe(s Shape) {
    if s is Circle {
        println('Circle with radius ${s.radius}')
    } else if s is Rectangle {
        println('Rectangle ${s.width} x ${s.height}')
    }
}
```

## Sum-Typen vs. Interfaces

- Verwende **Interfaces**, wenn verschiedene, nicht verwandte Typen gemeinsames Verhalten teilen.
- Verwende **Sum-Typen** (`type Foo = A | B`), wenn du eine geschlossene, endliche Menge von Varianten hast und erschöpfendes Pattern-Matching mit `match` möchtest.
