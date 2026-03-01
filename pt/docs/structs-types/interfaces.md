# Interfaces

Interfaces definem um contrato — um conjunto de métodos que um tipo deve implementar. Não há palavra-chave explícita `implements`; os tipos satisfazem interfaces automaticamente (tipagem estrutural/duck typing).

## Definindo uma Interface

```v
interface Shape {
    area() f64
    perimeter() f64
}
```

## Implementando uma Interface

Qualquer struct que tenha os métodos necessários implementa a interface automaticamente:

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

## Usando Interfaces

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

## Interface com Campos

Interfaces também podem exigir campos (não apenas métodos):

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

## Verificação de Tipo com Interfaces

```v
fn describe(s Shape) {
    if s is Circle {
        println('Circle with radius ${s.radius}')
    } else if s is Rectangle {
        println('Rectangle ${s.width} x ${s.height}')
    }
}
```

## Sum Types vs Interfaces

- Use **interfaces** quando tipos diferentes e não relacionados compartilham comportamento comum.
- Use **sum types** (`type Foo = A | B`) quando você tem um conjunto fechado e finito de variantes e quer correspondência exaustiva de padrões com `match`.
