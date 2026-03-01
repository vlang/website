# Laços For

V possui uma única palavra-chave de repetição: `for`. Ela cobre todos os padrões de iteração.

## Laço de Intervalo

Itera sobre um intervalo semi-aberto `inicio..fim` (fim é exclusivo):

```v
for i in 0 .. 5 {
    println(i) // 0 1 2 3 4
}
```

## Iterando Sobre Arrays

```v
names := ['Alice', 'Bob', 'Carol']

// value only
for name in names {
    println(name)
}

// index and value
for i, name in names {
    println('${i}: ${name}')
}
```

## Iterando Sobre Maps

```v
m := {'a': 1, 'b': 2, 'c': 3}

for key, val in m {
    println('${key} => ${val}')
}
```

## Laço Clássico Estilo C

```v
for i := 0; i < 10; i++ {
    println(i)
}
```

## Laço Apenas com Condição (equivalente ao while)

```v
mut n := 0
for n < 5 {
    println(n)
    n++
}
```

## Laço Infinito

```v
mut i := 0
for {
    i++
    if i >= 5 { break }
}
```

## `break` e `continue`

```v
for i in 0 .. 10 {
    if i == 3 { continue }  // skip 3
    if i == 7 { break }     // stop at 7
    println(i)
}
```

## Laços Rotulados

Para laços aninhados, você pode rotular e usar break/continue a partir de um laço externo:

```v
outer: for i in 0 .. 3 {
    for j in 0 .. 3 {
        if j == 1 {
            continue outer
        }
        println('${i},${j}')
    }
}
```

## Exemplo de Números Primos

```v
import math { log }

n := 10
sz := int(f64(n) * (log(f64(n)) + log(log(f64(n))))) + 10
mut sieve := []bool{len: sz}

for i := 2; i * i < sz; i++ {
    if !sieve[i] {
        for j := i * i; j < sz; j += i {
            sieve[j] = true
        }
    }
}

mut count := 0
for i := 2; count < n && i < sz; i++ {
    if !sieve[i] {
        println(i)
        count++
    }
}
```
