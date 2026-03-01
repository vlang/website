# 列挙型

列挙型は、固定の名前付き定数セットを持つ型を定義します。

## 基本的な列挙型

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

## 列挙型のマッチング

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

型が推論できる場合の省略記法`.variant`に注目してください。

## カスタム値を持つ列挙型

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

## 列挙型のメソッド

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

## 列挙型のイテレーション

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

## フラグ列挙型（ビットフィールド）

```v
@[flag]
enum Permission {
    read
    write
    execute
}
```
