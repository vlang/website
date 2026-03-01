# Match

`match` adalah pernyataan pemadanan corak V — lebih berkuasa daripada `switch` C. Ia mestilah lengkap: setiap nilai yang mungkin mesti ditangani.

## Penggunaan Asas

```v
x := 3

match x {
    1 { println('satu') }
    2 { println('dua') }
    3 { println('tiga') }
    else { println('lain') }
}
```

## Match sebagai Ungkapan

```v
name := 'Bob'
greeting := match name {
    'Alice' { 'Hai Alice!' }
    'Bob'   { 'Apa khabar, Bob?' }
    else    { 'Helo, ${name}.' }
}
println(greeting)
```

## Pemadanan Pelbagai Nilai

```v
n := 5
match n {
    1, 3, 5, 7, 9 { println('ganjil') }
    2, 4, 6, 8    { println('genap') }
    else          { println('di luar julat') }
}
```

## Pemadanan Julat

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

## Pemadanan Jenis Jumlah

Apabila memadankan pada jenis jumlah, V memberi anda akses kepada nilai dalaman dengan jenis yang betul:

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
