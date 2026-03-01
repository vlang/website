# Интерфейсы

Интерфейсы определяют контракт — набор методов, которые должен реализовывать тип. Ключевого слова `implements` нет; типы реализуют интерфейсы автоматически (структурная/утиная типизация).

## Определение интерфейса

```v
interface Shape {
    area() f64
    perimeter() f64
}
```

## Реализация интерфейса

Любая структура, имеющая необходимые методы, автоматически реализует интерфейс:

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

## Использование интерфейсов

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

## Интерфейс с полями

Интерфейсы могут также требовать поля (не только методы):

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

## Проверка типов через интерфейсы

```v
fn describe(s Shape) {
    if s is Circle {
        println('Circle with radius ${s.radius}')
    } else if s is Rectangle {
        println('Rectangle ${s.width} x ${s.height}')
    }
}
```

## Суммарные типы и интерфейсы

- Используйте **интерфейсы**, когда разные несвязанные типы имеют общее поведение.
- Используйте **суммарные типы** (`type Foo = A | B`), когда есть закрытый конечный набор вариантов и нужно исчерпывающее сопоставление шаблонов через `match`.
