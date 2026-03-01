# If / Else

## Grunnleggende syntaks

```v
a := 10

if a < 10 {
    println('mindre enn 10')
} else if a == 10 {
    println('nøyaktig 10')
} else {
    println('større enn 10')
}
```

## If som uttrykk

I V er `if` et uttrykk og kan brukes på høyre side av en tilordning:

```v
num := 7
result := if num % 2 == 0 { 'partall' } else { 'oddetall' }
println(result) // oddetall
```

## Innebygd kortform

```v
x := 42
if x > 0 { println('positiv') }
```

## Betingelse med initialisering

Du kan initialisere en variabel inne i en `if`-betingelse:

```v
if val := some_function_returning_option() {
    println('fikk verdi: ${val}')
} else {
    println('ingen verdi')
}
```

## `in`-operatoren

Bruk `in` for å sjekke medlemskap i matriser eller kart:

```v
nums := [1, 2, 3]
if 2 in nums {
    println('fant 2')
}

m := {'a': 1, 'b': 2}
if 'a' in m {
    println('nøkkelen finnes')
}
```

Bruk `!in` for den inverse:

```v
if 5 !in nums {
    println('5 er ikke i matrisen')
}
```

## FizzBuzz-eksempel

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
