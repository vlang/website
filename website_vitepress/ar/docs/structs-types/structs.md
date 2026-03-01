# البنيات (Structs)

تُستخدم البنيات لتعريف أنواع بيانات مخصصة بحقول مُسمَّاة.

## البنية الأساسية

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

## البنيات القابلة للتغيير

الحقول غير قابلة للتغيير بشكل افتراضي. استخدم `mut:` لإعلان الحقول القابلة للتغيير:

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

## معدِّلات الوصول

```v
struct Foo {
    a int         // private immutable (default)
mut:
    b int         // private mutable
pub:
    c int         // public immutable
pub mut:
    d int         // public mutable, private to set
__global:
    e int         // public and mutable everywhere (rare)
}
```

## الأساليب

يمكن ربط الدوال بالبنيات:

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

## التضمين (Embedding)

يمكن للبنيات تضمين بنيات أخرى لوراثة حقولها وأساليبها:

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
    println(d.name)    // Rex  (promoted from Animal)
    println(d.speak()) // Woof!
}
```

## القيم الافتراضية للحقول

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

## مثال JSON

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
    for i, user in users {
        if user.can_register() {
            users[i].register()
        }
    }
    println(json.encode(users))
}
```
