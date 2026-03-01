# If / Else

## Grundlegende Syntax

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

## If als Ausdruck

In V ist `if` ein Ausdruck und kann auf der rechten Seite einer Zuweisung verwendet werden:

```v
num := 7
result := if num % 2 == 0 { 'even' } else { 'odd' }
println(result) // odd
```

## Kurze Inline-Form

```v
x := 42
if x > 0 { println('positive') }
```

## Bedingung mit Initialisierung

Du kannst eine Variable innerhalb einer `if`-Bedingung initialisieren:

```v
if val := some_function_returning_option() {
    println('got value: ${val}')
} else {
    println('no value')
}
```

## Der `in`-Operator

Verwende `in`, um die Zugehörigkeit in Arrays oder Maps zu prüfen:

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

Verwende `!in` für das Gegenteil:

```v
if 5 !in nums {
    println('5 is not in the array')
}
```

## FizzBuzz-Beispiel

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
