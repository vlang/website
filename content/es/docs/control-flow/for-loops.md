# Bucles For

V tiene una única palabra clave de iteración: `for`. Cubre todos los patrones de iteración.

## Bucle de Rango

Itera sobre un rango semiabierto `inicio..fin` (fin es exclusivo):

```v
for i in 0 .. 5 {
    println(i) // 0 1 2 3 4
}
```

## Iterar Sobre Arrays

```v
names := ['Alice', 'Bob', 'Carol']

// solo valor
for name in names {
    println(name)
}

// índice y valor
for i, name in names {
    println('${i}: ${name}')
}
```

## Iterar Sobre Maps

```v
m := {'a': 1, 'b': 2, 'c': 3}

for key, val in m {
    println('${key} => ${val}')
}
```

## Bucle Clásico Estilo C

```v
for i := 0; i < 10; i++ {
    println(i)
}
```

## Bucle Solo con Condición (equivalente a while)

```v
mut n := 0
for n < 5 {
    println(n)
    n++
}
```

## Bucle Infinito

```v
mut i := 0
for {
    i++
    if i >= 5 { break }
}
```

## `break` y `continue`

```v
for i in 0 .. 10 {
    if i == 3 { continue }  // saltar 3
    if i == 7 { break }     // parar en 7
    println(i)
}
```

## Bucles Etiquetados

Para bucles anidados, puedes etiquetar y hacer break/continue desde un bucle exterior:

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

## Ejemplo de Números Primos

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
