# If / Else

## Sintaks Asas

```v
a := 10

if a < 10 {
    println('kurang daripada 10')
} else if a == 10 {
    println('tepat 10')
} else {
    println('lebih daripada 10')
}
```

## If sebagai Ungkapan

Dalam V, `if` adalah ungkapan dan boleh digunakan di sebelah kanan tugasan:

```v
num := 7
result := if num % 2 == 0 { 'genap' } else { 'ganjil' }
println(result) // ganjil
```

## Borang Pendek Sebaris

```v
x := 42
if x > 0 { println('positif') }
```

## Syarat dengan Permulaan

Anda boleh memulakan pemboleh ubah dalam syarat `if`:

```v
if val := some_function_returning_option() {
    println('mendapat nilai: ${val}')
} else {
    println('tiada nilai')
}
```

## Pengendali `in`

Gunakan `in` untuk memeriksa keahlian dalam tatasusunan atau peta:

```v
nums := [1, 2, 3]
if 2 in nums {
    println('dijumpai 2')
}

m := {'a': 1, 'b': 2}
if 'a' in m {
    println('kunci wujud')
}
```

Gunakan `!in` untuk songsangan:

```v
if 5 !in nums {
    println('5 tidak dalam tatasusunan')
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
