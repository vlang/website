# If / Else

## Syntaxe de base

```v
a := 10

if a < 10 {
    println('moins de 10')
} else if a == 10 {
    println('exactement 10')
} else {
    println('plus de 10')
}
```

## If comme expression

En V, `if` est une expression et peut être utilisé à droite d'une assignation :

```v
num := 7
result := if num % 2 == 0 { 'pair' } else { 'impair' }
println(result) // impair
```

## Forme courte sur une ligne

```v
x := 42
if x > 0 { println('positif') }
```

## Condition avec initialisation

Vous pouvez initialiser une variable à l'intérieur d'une condition `if` :

```v
if val := some_function_returning_option() {
    println('valeur obtenue : ${val}')
} else {
    println('pas de valeur')
}
```

## L'opérateur `in`

Utilisez `in` pour vérifier l'appartenance à des tableaux ou des maps :

```v
nums := [1, 2, 3]
if 2 in nums {
    println('2 trouvé')
}

m := {'a': 1, 'b': 2}
if 'a' in m {
    println('clé existante')
}
```

Utilisez `!in` pour l'inverse :

```v
if 5 !in nums {
    println('5 n\'est pas dans le tableau')
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
