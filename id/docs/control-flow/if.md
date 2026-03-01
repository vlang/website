# If / Else

## Sintaks Dasar

```v
a := 10

if a < 10 {
    println('less than 10')
} else if a == 10 {
    println('exactly 10')
} else {
    println('greater than 10')
}
```

## If sebagai Ekspresi

Dalam V, `if` adalah ekspresi dan dapat digunakan di sisi kanan penugasan:

```v
num := 7
result := if num % 2 == 0 { 'even' } else { 'odd' }
println(result) // odd
```

## Bentuk Pendek Satu Baris

```v
x := 42
if x > 0 { println('positive') }
```

## Kondisi dengan Inisialisasi

Anda dapat menginisialisasi variabel di dalam kondisi `if`:

```v
if val := some_function_returning_option() {
    println('got value: ${val}')
} else {
    println('no value')
}
```

## Operator `in`

Gunakan `in` untuk memeriksa keanggotaan dalam array atau map:

```v
nums := [1, 2, 3]
if 2 in nums {
    println('found 2')
}

m := {'a': 1, 'b': 2}
if 'a' in m {
    println('key exists')
}
```

Gunakan `!in` untuk kebalikannya:

```v
if 5 !in nums {
    println('5 is not in the array')
}
```

## Contoh FizzBuzz

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
