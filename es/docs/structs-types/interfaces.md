# Interfaces

Las interfaces definen un contrato — un conjunto de métodos que un tipo debe implementar. No hay una palabra clave explícita `implements`; los tipos satisfacen interfaces automáticamente (tipado estructural/duck typing).

## Definir una Interfaz

```v
interface Shape {
    area() f64
    perimeter() f64
}
```

## Implementar una Interfaz

Cualquier struct que tenga los métodos requeridos implementa automáticamente la interfaz:

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

## Usar Interfaces

```v
fn print_shape_info(s Shape) {
    println('Área:      ${s.area():.2f}')
    println('Perímetro: ${s.perimeter():.2f}')
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

## Interfaz con Campos

Las interfaces también pueden requerir campos (no solo métodos):

```v
interface Named {
    name string
}

struct Person {
    name string
}

fn greet(n Named) {
    println('Hola, ${n.name}!')
}

fn main() {
    p := Person{name: 'Alice'}
    greet(p)
}
```

## Verificación de Tipos con Interfaces

```v
fn describe(s Shape) {
    if s is Circle {
        println('Círculo con radio ${s.radius}')
    } else if s is Rectangle {
        println('Rectángulo ${s.width} x ${s.height}')
    }
}
```

## Tipos Sum vs Interfaces

- Usa **interfaces** cuando tipos diferentes no relacionados comparten comportamiento común.
- Usa **tipos sum** (`type Foo = A | B`) cuando tienes un conjunto cerrado y finito de variantes y quieres coincidencia de patrones exhaustiva con `match`.
