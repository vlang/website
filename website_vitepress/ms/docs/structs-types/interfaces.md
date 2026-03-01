# Antara Muka

Antara muka mentakrifkan kontrak — satu set kaedah yang mesti dilaksanakan oleh sesuatu jenis. Tiada kata kunci `implements` yang eksplisit; jenis memenuhi antara muka secara automatik (pengetikan struktural/itik).

## Mentakrifkan Antara Muka

```v
interface Shape {
    area() f64
    perimeter() f64
}
```

## Melaksanakan Antara Muka

Mana-mana struct yang mempunyai kaedah yang diperlukan secara automatik melaksanakan antara muka:

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

## Menggunakan Antara Muka

```v
fn print_shape_info(s Shape) {
    println('Luas:      ${s.area():.2f}')
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

## Antara Muka dengan Medan

Antara muka juga boleh memerlukan medan (bukan hanya kaedah):

```v
interface Named {
    name string
}

struct Person {
    name string
}

fn greet(n Named) {
    println('Helo, ${n.name}!')
}

fn main() {
    p := Person{name: 'Alice'}
    greet(p)
}
```

## Semakan Jenis dengan Antara Muka

```v
fn describe(s Shape) {
    if s is Circle {
        println('Bulatan dengan jejari ${s.radius}')
    } else if s is Rectangle {
        println('Segi empat ${s.width} x ${s.height}')
    }
}
```

## Jenis Jumlah vs Antara Muka

- Gunakan **antara muka** apabila jenis yang berbeza dan tidak berkaitan berkongsi tingkah laku yang sama.
- Gunakan **jenis jumlah** (`type Foo = A | B`) apabila anda mempunyai set varian yang tertutup dan terhingga dan ingin pemadanan corak lengkap dengan `match`.
