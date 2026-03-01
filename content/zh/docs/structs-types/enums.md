# 枚举

枚举定义了一种具有固定命名常量集合的类型。

## 基本枚举

```v
enum Direction {
    north
    south
    east
    west
}

fn main() {
    dir := Direction.north
    println(dir) // north
}
```

## 对枚举进行匹配

```v
enum Color {
    red
    green
    blue
}

fn describe(c Color) string {
    return match c {
        .red   { 'warm' }
        .green { 'cool' }
        .blue  { 'cool' }
    }
}
```

注意当类型可以被推断时使用的 `.variant` 简写语法。

## 带自定义值的枚举

```v
enum StatusCode {
    ok         = 200
    not_found  = 404
    server_err = 500
}

fn main() {
    code := StatusCode.not_found
    println(int(code)) // 404
}
```

## 枚举方法

```v
enum Planet {
    mercury
    venus
    earth
    mars
}

fn (p Planet) is_inner() bool {
    return match p {
        .mercury, .venus, .earth, .mars { true }
        else { false }
    }
}
```

## 遍历枚举

```v
enum Season {
    spring
    summer
    autumn
    winter
}

fn main() {
    for s in Season.values() {
        println(s)
    }
}
```

## 标志枚举（位字段）

```v
@[flag]
enum Permission {
    read
    write
    execute
}

fn main() {
    mut p := Permission.read | Permission.write
    println(p.has(.read))    // true
    println(p.has(.execute)) // false
    p.set(.execute)
    println(p.has(.execute)) // true
}
```
