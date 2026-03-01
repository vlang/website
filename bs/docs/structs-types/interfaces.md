# Sučelja

Sučelja definiraju ugovor — skup metoda koje tip mora implementirati. Nema eksplicitne ključne riječi `implements`; tipovi automatski zadovoljavaju sučelja (strukturno/duck tipiziranje).

## Definisanje sučelja

```v
interface Shape {
    area() f64
    perimeter() f64
}
```

## Implementacija sučelja

Svaka struktura koja ima tražene metode automatski implementira sučelje:

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

## Korištenje sučelja

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

## Sučelje s poljima

Sučelja mogu zahtijevati i polja (ne samo metode):

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

## Provjera tipa sa sučeljima

```v
fn describe(s Shape) {
    if s is Circle {
        println('Circle with radius ${s.radius}')
    } else if s is Rectangle {
        println('Rectangle ${s.width} x ${s.height}')
    }
}
```

## Zbirni tipovi nasuprot sučeljima

- Koristite **sučelja** kada različiti nepovezani tipovi dijele zajedničko ponašanje.
- Koristite **zbirne tipove** (`type Foo = A | B`) kada imate zatvoren, konačan skup varijanti i želite iscrpno podudaranje uzoraka s `match`.
