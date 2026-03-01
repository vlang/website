# Match

`match` adalah pernyataan pencocokan pola V — lebih kuat dari `switch` di C. Harus bersifat exhaustive: setiap kemungkinan nilai harus ditangani.

## Penggunaan Dasar

```v
x := 3

match x {
    1 { println('one') }
    2 { println('two') }
    3 { println('three') }
    else { println('other') }
}
```

## Match sebagai Ekspresi

```v
name := 'Bob'
greeting := match name {
    'Alice' { 'Hey Alice!' }
    'Bob'   { 'What is up, Bob?' }
    else    { 'Hello, ${name}.' }
}
println(greeting)
```

## Mencocokkan Beberapa Nilai

```v
n := 5
match n {
    1, 3, 5, 7, 9 { println('odd') }
    2, 4, 6, 8    { println('even') }
    else          { println('out of range') }
}
```

## Mencocokkan Rentang

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

## Mencocokkan Tipe Sum

Saat mencocokkan tipe sum, V memberi Anda akses ke nilai dalam dengan tipe yang benar:

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

## FizzBuzz dengan Match

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
