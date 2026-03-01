# 構造体

構造体は名前付きフィールドを持つカスタムデータ型を定義するために使用されます。

## 基本的な構造体

```v
struct Point {
    x int
    y int
}

fn main() {
    p := Point{x: 10, y: 20}
    println(p.x) // 10
    println(p)   // Point{x: 10, y: 20}
}
```

## ミュータブルな構造体

フィールドはデフォルトでイミュータブルです。ミュータブルなフィールドを宣言するには`mut:`を使用します：

```v
struct User {
    name string
    age  int
mut:
    is_registered bool
    email         string
}

fn main() {
    mut u := User{name: 'Alice', age: 25}
    u.is_registered = true
    u.email = 'alice@example.com'
    println(u)
}
```

## アクセス修飾子

```v
struct Foo {
    a int         // プライベートイミュータブル（デフォルト）
mut:
    b int         // プライベートミュータブル
pub:
    c int         // パブリックイミュータブル
pub mut:
    d int         // パブリックミュータブル、設定はプライベート
__global:
    e int         // どこでもパブリックかつミュータブル（まれ）
}
```

## メソッド

構造体に関数を付加できます：

```v
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

fn main() {
    rect := Rectangle{width: 5.0, height: 3.0}
    println(rect.area())      // 15.0
    println(rect.perimeter()) // 16.0
}
```

## 埋め込み

構造体は他の構造体を埋め込んでフィールドとメソッドを継承できます：

```v
struct Animal {
    name string
}

fn (a Animal) speak() string {
    return '...'
}

struct Dog {
    Animal
    breed string
}

fn (d Dog) speak() string {
    return 'Woof!'
}

fn main() {
    d := Dog{Animal: Animal{name: 'Rex'}, breed: 'Labrador'}
    println(d.name)    // Rex  （Animalから昇格）
    println(d.speak()) // Woof!
}
```

## デフォルトフィールド値

```v
struct Config {
    host    string = 'localhost'
    port    int    = 8080
    debug   bool   = false
}

fn main() {
    cfg := Config{}
    println(cfg.host) // localhost
    println(cfg.port) // 8080
}
```

## JSONの例

```v
import json

struct User {
    name string
    age  int
mut:
    is_registered bool
}

fn (u User) can_register() bool {
    return u.age >= 16
}

fn (mut u User) register() {
    u.is_registered = true
}

fn main() {
    s := '[{"name":"Frodo","age":25},{"name":"Bobby","age":10}]'
    mut users := json.decode([]User, s) or {
        eprintln('Failed to parse json')
        return
    }
    for mut user in users {
        if user.can_register() {
            user.register()
        }
    }
    println(users)
}
```
