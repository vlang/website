# Enumeracions

Les enumeracions defineixen un tipus amb un conjunt fix de constants amb nom.

## Enumeració Bàsica

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

## Coincidència sobre Enumeracions

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

Observa la sintaxi abreviada `.variant` quan el tipus es pot inferir.

## Enumeracions amb Valors Personalitzats

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

## Mètodes d'Enumeració

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

## Iteració sobre Enumeracions

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

## Enumeracions de Bandera (Camps de Bits)

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
