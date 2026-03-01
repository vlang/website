# Grensesnitt

Grensesnitt definerer en kontrakt — et sett metoder som en type må implementere. Det er inget eksplisitt `implements`-nøkkelord; typer oppfyller grensesnitt automatisk (strukturell/and-typing).

## Definere et grensesnitt

```v
interface Shape {
    area() f64
    perimeter() f64
}
```

## Implementere et grensesnitt

Enhver struktur som har de nødvendige metodene implementerer automatisk grensesnittet:

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

## Bruke grensesnitt

```v
fn print_shape_info(s Shape) {
    println('Areal:     ${s.area():.2f}')
    println('Omkrets:   ${s.perimeter():.2f}')
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

## Grensesnitt med felt

Grensesnitt kan også kreve felt (ikke bare metoder):

```v
interface Named {
    name string
}

struct Person {
    name string
}

fn greet(n Named) {
    println('Hei, ${n.name}!')
}

fn main() {
    p := Person{name: 'Alice'}
    greet(p)
}
```

## Typekontroll med grensesnitt

```v
fn describe(s Shape) {
    if s is Circle {
        println('Sirkel med radius ${s.radius}')
    } else if s is Rectangle {
        println('Rektangel ${s.width} x ${s.height}')
    }
}
```

## Sumtyper vs grensesnitt

- Bruk **grensesnitt** når forskjellige urelaterte typer deler felles atferd.
- Bruk **sumtyper** (`type Foo = A | B`) når du har et lukket, endelig sett av varianter og vil ha uttjømmende mønstermatching med `match`.
