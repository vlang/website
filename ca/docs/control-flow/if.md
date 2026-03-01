# If / Else

## Sintaxi Bàsica

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

## If com a Expressió

En V, `if` és una expressió i es pot usar al costat dret d'una assignació:

```v
num := 7
result := if num % 2 == 0 { 'even' } else { 'odd' }
println(result) // odd
```

## Forma Curta en Línia

```v
x := 42
if x > 0 { println('positive') }
```

## Condició amb Inicialització

Pots inicialitzar una variable dins d'una condició `if`:

```v
if val := some_function_returning_option() {
    println('got value: ${val}')
} else {
    println('no value')
}
```

## L'Operador `in`

Usa `in` per verificar la pertainènça en arrays o mapes:

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

Usa `!in` per a la inversa:

```v
if 5 !in nums {
    println('5 is not in the array')
}
```

## Exemple FizzBuzz

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
