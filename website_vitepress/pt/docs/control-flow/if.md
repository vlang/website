# If / Else

## Sintaxe Básica

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

## If como Expressão

Em V, `if` é uma expressão e pode ser usado no lado direito de uma atribuição:

```v
num := 7
result := if num % 2 == 0 { 'even' } else { 'odd' }
println(result) // odd
```

## Forma Curta Inline

```v
x := 42
if x > 0 { println('positive') }
```

## Condição com Inicialização

Você pode inicializar uma variável dentro de uma condição `if`:

```v
if val := some_function_returning_option() {
    println('got value: ${val}')
} else {
    println('no value')
}
```

## O Operador `in`

Use `in` para verificar pertencimento em arrays ou maps:

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

Use `!in` para o inverso:

```v
if 5 !in nums {
    println('5 is not in the array')
}
```

## Exemplo FizzBuzz

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
