# 接口

接口定义了一个契约——一组类型必须实现的方法。没有显式的 `implements` 关键字；类型自动满足接口（结构化/鸭子类型）。

## 定义接口

```v
interface Shape {
    area() f64
    perimeter() f64
}
```

## 实现接口

任何具有所需方法的结构体都会自动实现该接口：

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

## 使用接口

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

## 带字段的接口

接口也可以要求字段（不仅仅是方法）：

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

## 用接口进行类型检查

```v
fn describe(s Shape) {
    if s is Circle {
        println('Circle with radius ${s.radius}')
    } else if s is Rectangle {
        println('Rectangle ${s.width} x ${s.height}')
    }
}
```

## 联合类型与接口的对比

- 当不同的无关类型共享公共行为时，使用**接口**。
- 当你有一组封闭的、有限的变体，并希望使用 `match` 进行穷尽模式匹配时，使用**联合类型**（`type Foo = A | B`）。
