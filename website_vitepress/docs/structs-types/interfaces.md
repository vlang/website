# Interfaces

Interfaces define a contract — a set of methods that a type must implement. There is no explicit `implements` keyword; types satisfy interfaces automatically (structural/duck typing).

## Defining an Interface

```go
interface Shape {
    area() f64
    perimeter() f64
}
```

## Implementing an Interface

Any struct that has the required methods automatically implements the interface:

```go
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

## Using Interfaces

```go
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

## Interface with Fields

Interfaces can also require fields (not just methods):

```go
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

## Type Checking with Interfaces

```go
fn describe(s Shape) {
    if s is Circle {
        println('Circle with radius ${s.radius}')
    } else if s is Rectangle {
        println('Rectangle ${s.width} x ${s.height}')
    }
}
```

## Sum Types vs Interfaces

- Use **interfaces** when different unrelated types share common behaviour.
- Use **sum types** (`type Foo = A | B`) when you have a closed, finite set of variants and want exhaustive pattern matching with `match`.
