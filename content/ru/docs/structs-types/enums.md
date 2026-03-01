# Перечисления

Перечисления определяют тип с фиксированным набором именованных констант.

## Базовое перечисление

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

## Сопоставление с перечислениями

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

Обратите внимание на сокращённый синтаксис `.variant`, когда тип может быть выведен автоматически.

## Перечисления с пользовательскими значениями

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

## Методы перечислений

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

## Итерация по значениям перечисления

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

## Флаговые перечисления (битовые поля)

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
