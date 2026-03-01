# Match

`match` er V's mønstermatching-setning — kraftigere enn C's `switch`. Den må være uttjømmende: enhver mulig verdi må håndteres.

## Grunnleggende bruk

```v
x := 3

match x {
    1 { println('en') }
    2 { println('to') }
    3 { println('tre') }
    else { println('annen') }
}
```

## Match som uttrykk

```v
name := 'Bob'
greeting := match name {
    'Alice' { 'Hei Alice!' }
    'Bob'   { 'Hva skjer, Bob?' }
    else    { 'Hei, ${name}.' }
}
println(greeting)
```

## Matche flere verdier

```v
n := 5
match n {
    1, 3, 5, 7, 9 { println('oddetall') }
    2, 4, 6, 8    { println('partall') }
    else          { println('utenfor område') }
}
```

## Matche områder

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

## Matche sumtyper

Når du matcher på en sumtype, gir V deg tilgang til den indre verdien med riktig type:

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

## FizzBuzz med Match

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
