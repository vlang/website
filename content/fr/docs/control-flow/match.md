# Match

`match` est l'instruction de correspondance de motifs de V — plus puissante qu'un `switch` en C. Elle doit être exhaustive : chaque valeur possible doit être gérée.

## Utilisation de base

```v
x := 3

match x {
    1 { println('un') }
    2 { println('deux') }
    3 { println('trois') }
    else { println('autre') }
}
```

## Match comme expression

```v
name := 'Bob'
greeting := match name {
    'Alice' { 'Salut Alice !' }
    'Bob'   { 'Quoi de neuf, Bob ?' }
    else    { 'Bonjour, ${name}.' }
}
println(greeting)
```

## Correspondance avec plusieurs valeurs

```v
n := 5
match n {
    1, 3, 5, 7, 9 { println('impair') }
    2, 4, 6, 8    { println('pair') }
    else          { println('hors plage') }
}
```

## Correspondance avec des plages

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

## Correspondance sur des types somme

Lors de la correspondance sur un type somme, V vous donne accès à la valeur interne avec le type correct :

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

## FizzBuzz avec Match

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
