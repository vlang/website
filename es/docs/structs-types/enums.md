# Enums (Enumeraciones)

Los enums definen un tipo con un conjunto fijo de constantes con nombre.

## Enum Básico

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

## Coincidencia sobre Enums

```v
enum Color {
    red
    green
    blue
}

fn describe(c Color) string {
    return match c {
        .red   { 'cálido' }
        .green { 'frío' }
        .blue  { 'frío' }
    }
}
```

Observa la sintaxis abreviada `.variante` cuando el tipo puede inferirse.

## Enums con Valores Personalizados

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

## Métodos de Enum

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

## Iterar Sobre Enums

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

## Enums de Bandera (Campos de Bits)

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
