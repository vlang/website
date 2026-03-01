# Bucles For

V té una sola paraula clau per a bucles: `for`. Cobreix tots els patrons d'iteració.

## Bucle de Rang

Itera sobre un rang semiobert `start..end` (end és exclusiu):

```v
for i in 0 .. 5 {
    println(i) // 0 1 2 3 4
}
```

## Iteració sobre Arrays

```v
names := ['Alice', 'Bob', 'Carol']

// només el valor
for name in names {
    println(name)
}

// índex i valor
for i, name in names {
    println('${i}: ${name}')
}
```

## Iteració sobre Mapes

```v
m := {'a': 1, 'b': 2, 'c': 3}

for key, val in m {
    println('${key} => ${val}')
}
```

## Bucle Clàssic a l'Estil C

```v
for i := 0; i < 10; i++ {
    println(i)
}
```

## Bucle de Condició Solament (equivalent a while)

```v
mut n := 0
for n < 5 {
    println(n)
    n++
}
```

## Bucle Infinit

```v
mut i := 0
for {
    i++
    if i >= 5 { break }
}
```

## `break` i `continue`

```v
for i in 0 .. 10 {
    if i == 3 { continue }  // salta el 3
    if i == 7 { break }     // s'atura al 7
    println(i)
}
```

## Bucles Etiquetats

Per a bucles niuats, pots etiquetar i fer break/continue des d'un bucle exterior:

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

## Exemple de Nombres Primers

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
