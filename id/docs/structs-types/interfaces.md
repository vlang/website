# Antarmuka (Interface)

Antarmuka mendefinisikan kontrak — sekumpulan metode yang harus diimplementasikan oleh suatu tipe. Tidak ada kata kunci `implements` yang eksplisit; tipe memenuhi antarmuka secara otomatis (pengetikan struktural/duck typing).

## Mendefinisikan Antarmuka

```v
interface Shape {
    area() f64
    perimeter() f64
}
```

## Mengimplementasikan Antarmuka

Struct apa pun yang memiliki metode yang diperlukan secara otomatis mengimplementasikan antarmuka:

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

## Menggunakan Antarmuka

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

## Antarmuka dengan Field

Antarmuka juga dapat memerlukan field (bukan hanya metode):

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

## Pemeriksaan Tipe dengan Antarmuka

```v
fn describe(s Shape) {
    if s is Circle {
        println('Circle with radius ${s.radius}')
    } else if s is Rectangle {
        println('Rectangle ${s.width} x ${s.height}')
    }
}
```

## Tipe Sum vs Antarmuka

- Gunakan **antarmuka** ketika tipe-tipe berbeda yang tidak berkaitan berbagi perilaku yang sama.
- Gunakan **tipe sum** (`type Foo = A | B`) ketika Anda memiliki sekumpulan varian yang tertutup dan terbatas serta ingin pencocokan pola exhaustive dengan `match`.
