# If / Else

## Temel Sözdizimi

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

## İfade Olarak If

V'de `if` bir ifadedir ve bir atamada sağ tarafta kullanılabilir:

```v
num := 7
result := if num % 2 == 0 { 'even' } else { 'odd' }
println(result) // odd
```

## Satır İçi Kısa Form

```v
x := 42
if x > 0 { println('positive') }
```

## Başlatmalı Koşul

`if` koşulunun içinde bir değişken başlatabilirsiniz:

```v
if val := some_function_returning_option() {
    println('got value: ${val}')
} else {
    println('no value')
}
```

## `in` Operatörü

Diziler veya haritalarda üyelik kontrolü için `in` kullanın:

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

Ters için `!in` kullanın:

```v
if 5 !in nums {
    println('5 is not in the array')
}
```

## FizzBuzz Örneği

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
