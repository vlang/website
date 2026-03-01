# インターフェース

インターフェースはコントラクトを定義します — 型が実装しなければならないメソッドのセットです。明示的な`implements`キーワードはありません。型は自動的にインターフェースを満たします（構造的/ダック型付け）。

## インターフェースの定義

```v
interface Shape {
    area() f64
    perimeter() f64
}
```

## インターフェースの実装

必要なメソッドを持つ構造体は、自動的にインターフェースを実装します：

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

## インターフェースの使用

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

## フィールドを持つインターフェース

インターフェースはフィールドも要求できます（メソッドだけでなく）：

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

## インターフェースを使った型チェック

```v
fn describe(s Shape) {
    if s is Circle {
        println('Circle with radius ${s.radius}')
    } else if s is Rectangle {
        println('Rectangle ${s.width} x ${s.height}')
    }
}
```

## サム型とインターフェースの使い分け

- 異なる関係のない型が共通の動作を共有する場合は**インターフェース**を使用。
- `match`で網羅的なパターンマッチングが必要な、閉じた有限のバリアントセットがある場合は**サム型**（`type Foo = A | B`）を使用。
