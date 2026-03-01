# Interfícies

Les interfícies defineixen un contracte — un conjunt de mètodes que un tipus ha d'implementar. No hi ha una paraula clau explícita `implements`; els tipus satisfan les interfícies automàticament (tipatje estructural/duck typing).

## Definir una Interfície

```v
interface Shape {
    area() f64
    perimeter() f64
}
```

## Implementar una Interfície

Qualsevol estructura que tingui els mètodes requerits implementa automàticament la interfície:

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

## Usar Interfícies

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

## Interfície amb Camps

Les interfícies també poden requerir camps (no només mètodes):

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

## Comprovació de Tipus amb Interfícies

```v
fn describe(s Shape) {
    if s is Circle {
        println('Circle with radius ${s.radius}')
    } else if s is Rectangle {
        println('Rectangle ${s.width} x ${s.height}')
    }
}
```

## Tipus Suma vs Interfícies

- Usa **interfícies** quan tipus no relacionats comparteixen comportament comú.
- Usa **tipus suma** (`type Foo = A | B`) quan tens un conjunt tancat i finit de variants i vols coincidència exhaustiva de patrons amb `match`.
