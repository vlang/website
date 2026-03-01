# Arayüzler

Arayüzler bir sözleşme tanımlar — bir tipin uygulaması gereken metodlar kümesi. Açık bir `implements` anahtar sözcüğü yoktur; tipler arayüzleri otomatik olarak karşılar (yapısal/ördek tiplemesi).

## Arayüz Tanımlama

```v
interface Shape {
    area() f64
    perimeter() f64
}
```

## Arayüz Uygulama

Gerekli metodlara sahip herhangi bir yapı otomatik olarak arayüzü uygular:

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

## Arayüzleri Kullanma

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

## Alanlı Arayüz

Arayüzler aynı zamanda alan da gerektirebilir (yalnızca metodlar değil):

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

## Arayüzlerle Tip Kontrolü

```v
fn describe(s Shape) {
    if s is Circle {
        println('Circle with radius ${s.radius}')
    } else if s is Rectangle {
        println('Rectangle ${s.width} x ${s.height}')
    }
}
```

## Toplam Tipler vs Arayüzler

- İlgisiz farklı tipler ortak davranış paylaştığında **arayüzler** kullanın.
- Kapalı, sonlu bir varyant kümesine sahip olduğunuzda ve `match` ile kapsamlı desen eşleştirmesi istediğinizde **toplam tipler** (`type Foo = A | B`) kullanın.
