# If / Else

## Sintaxis Básica

```v
a := 10

if a < 10 {
    println('menor que 10')
} else if a == 10 {
    println('exactamente 10')
} else {
    println('mayor que 10')
}
```

## If como Expresión

En V, `if` es una expresión y puede usarse en el lado derecho de una asignación:

```v
num := 7
result := if num % 2 == 0 { 'par' } else { 'impar' }
println(result) // impar
```

## Forma Corta en Línea

```v
x := 42
if x > 0 { println('positivo') }
```

## Condición con Inicialización

Puedes inicializar una variable dentro de una condición `if`:

```v
if val := some_function_returning_option() {
    println('valor obtenido: ${val}')
} else {
    println('ningún valor')
}
```

## El Operador `in`

Usa `in` para verificar membresía en arrays o maps:

```v
nums := [1, 2, 3]
if 2 in nums {
    println('encontrado 2')
}

m := {'a': 1, 'b': 2}
if 'a' in m {
    println('clave existe')
}
```

Usa `!in` para la inversa:

```v
if 5 !in nums {
    println('5 no está en el array')
}
```

## Ejemplo FizzBuzz

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
