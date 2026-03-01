# If / Else

## Osnovna sintaksa

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

## If kao izraz

U V-u, `if` je izraz i može se koristiti na desnoj strani dodjele:

```v
num := 7
result := if num % 2 == 0 { 'even' } else { 'odd' }
println(result) // odd
```

## Kratki oblik u jednoj liniji

```v
x := 42
if x > 0 { println('positive') }
```

## Uvjet s inicijalizacijom

Možete inicijalizirati varijablu unutar `if` uvjeta:

```v
if val := some_function_returning_option() {
    println('got value: ${val}')
} else {
    println('no value')
}
```

## Operator `in`

Koristite `in` za provjeru članstva u nizovima ili mapama:

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

Koristite `!in` za suprotno:

```v
if 5 !in nums {
    println('5 is not in the array')
}
```

## Primjer FizzBuzz

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
