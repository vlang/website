# Match

`match`, V'nin desen eşleştirme ifadesidir — C'nin `switch`'inden daha güçlüdür. Kapsamlı olmalıdır: olası her değer ele alınmalıdır.

## Temel Kullanım

```v
x := 3

match x {
    1 { println('one') }
    2 { println('two') }
    3 { println('three') }
    else { println('other') }
}
```

## İfade Olarak Match

```v
name := 'Bob'
greeting := match name {
    'Alice' { 'Hey Alice!' }
    'Bob'   { 'What is up, Bob?' }
    else    { 'Hello, ${name}.' }
}
println(greeting)
```

## Birden Fazla Değeri Eşleştirme

```v
n := 5
match n {
    1, 3, 5, 7, 9 { println('odd') }
    2, 4, 6, 8    { println('even') }
    else          { println('out of range') }
}
```

## Aralıkları Eşleştirme

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

## Toplam Tipleri Eşleştirme

Bir toplam tipinde eşleştirme yapıldığında, V iç değere doğru tipte erişim sağlar:

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

## Match ile FizzBuzz

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
