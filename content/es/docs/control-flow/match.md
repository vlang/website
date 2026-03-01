# Match

`match` es la sentencia de coincidencia de patrones de V — más poderosa que el `switch` de C. Debe ser exhaustiva: cada valor posible debe ser manejado.

## Uso Básico

```v
x := 3

match x {
    1 { println('uno') }
    2 { println('dos') }
    3 { println('tres') }
    else { println('otro') }
}
```

## Match como Expresión

```v
name := 'Bob'
greeting := match name {
    'Alice' { '¡Hola Alice!' }
    'Bob'   { '¿Qué tal, Bob?' }
    else    { 'Hola, ${name}.' }
}
println(greeting)
```

## Coincidir con Múltiples Valores

```v
n := 5
match n {
    1, 3, 5, 7, 9 { println('impar') }
    2, 4, 6, 8    { println('par') }
    else          { println('fuera de rango') }
}
```

## Coincidir con Rangos

```v
score := 72
grade := match score {
    90..100 { 'A' }
    80..89  { 'B' }
    70..79  { 'C' }
    60..69  { 'D' }
    else    { 'F' }
}
println(grade) // C
```

## Coincidir con Tipos Sum

Al coincidir con un tipo sum, V te da acceso al valor interno con el tipo correcto:

```v
type Shape = Circle | Rectangle

struct Circle {
    radius f64
}

struct Rectangle {
    width  f64
    height f64
}

fn area(s Shape) f64 {
    return match s {
        Circle    { 3.14159 * s.radius * s.radius }
        Rectangle { s.width * s.height }
    }
}
```

## FizzBuzz con Match

```v
for n in 1 .. 101 {
    println(match true {
        n % 15 == 0 { 'FizzBuzz' }
        n % 5 == 0  { 'Buzz' }
        n % 3 == 0  { 'Fizz' }
        else        { n.str() }
    })
}
```
