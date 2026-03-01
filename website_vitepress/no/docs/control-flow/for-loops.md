# For-løkker

V har ett enkelt løkkekjørenavn: `for`. Det dekker alle iterasonsmønstre.

## Områdeløkke

Iterer over et halvtåpent område `start..slutt` (slutt er eksklusiv):

```v
for i in 0 .. 5 {
    println(i) // 0 1 2 3 4
}
```

## Iterere over matriser

```v
names := ['Alice', 'Bob', 'Carol']

// kun verdi
for name in names {
    println(name)
}

// indeks og verdi
for i, name in names {
    println('${i}: ${name}')
}
```

## Iterere over kart

```v
m := {'a': 1, 'b': 2, 'c': 3}

for key, val in m {
    println('${key} => ${val}')
}
```

## Klassisk C-stillløkke

```v
for i := 0; i < 10; i++ {
    println(i)
}
```

## Kun-betingelse-løkke (while-ekvivalent)

```v
mut n := 0
for n < 5 {
    println(n)
    n++
}
```

## Uendelig løkke

```v
mut i := 0
for {
    i++
    if i >= 5 { break }
}
```

## `break` og `continue`

```v
for i in 0 .. 10 {
    if i == 3 { continue }  // hopp over 3
    if i == 7 { break }     // stopp ved 7
    println(i)
}
```

## Merkede løkker

For nestede løkker kan du merke og bryte/fortsette fra en ytre løkke:

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

## Primtallseksempel

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
