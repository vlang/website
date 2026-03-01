# Boucles For

V n'a qu'un seul mot-clé de boucle : `for`. Il couvre tous les schémas d'itération.

## Boucle de plage

Itérer sur une plage semi-ouverte `début..fin` (fin est exclusive) :

```v
for i in 0 .. 5 {
    println(i) // 0 1 2 3 4
}
```

## Itérer sur des tableaux

```v
names := ['Alice', 'Bob', 'Carol']

// valeur seulement
for name in names {
    println(name)
}

// index et valeur
for i, name in names {
    println('${i}: ${name}')
}
```

## Itérer sur des maps

```v
m := {'a': 1, 'b': 2, 'c': 3}

for key, val in m {
    println('${key} => ${val}')
}
```

## Boucle classique de style C

```v
for i := 0; i < 10; i++ {
    println(i)
}
```

## Boucle avec condition seulement (equivalent while)

```v
mut n := 0
for n < 5 {
    println(n)
    n++
}
```

## Boucle infinie

```v
mut i := 0
for {
    i++
    if i >= 5 { break }
}
```

## `break` et `continue`

```v
for i in 0 .. 10 {
    if i == 3 { continue }  // passer 3
    if i == 7 { break }     // s'arrêter à 7
    println(i)
}
```

## Boucles étiquetées

Pour les boucles imbriquées, vous pouvez étiqueter et faire un break/continue depuis une boucle externe :

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

## Exemple : Nombres premiers

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
