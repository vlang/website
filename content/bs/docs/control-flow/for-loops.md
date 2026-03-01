# For petlje

V ima jednu ključnu riječ za petlje: `for`. Pokriva sve obrasce iteracije.

## Petlja po rasponu

Iteracija po poluotvorenom rasponu `start..end` (kraj je isključen):

```v
for i in 0 .. 5 {
    println(i) // 0 1 2 3 4
}
```

## Iteracija po nizovima

```v
names := ['Alice', 'Bob', 'Carol']

// samo vrijednost
for name in names {
    println(name)
}

// indeks i vrijednost
for i, name in names {
    println('${i}: ${name}')
}
```

## Iteracija po mapama

```v
m := {'a': 1, 'b': 2, 'c': 3}

for key, val in m {
    println('${key} => ${val}')
}
```

## Klasična C-stilska petlja

```v
for i := 0; i < 10; i++ {
    println(i)
}
```

## Petlja samo s uvjetom (ekvivalent while)

```v
mut n := 0
for n < 5 {
    println(n)
    n++
}
```

## Beskonačna petlja

```v
mut i := 0
for {
    i++
    if i >= 5 { break }
}
```

## `break` and `continue`

```v
for i in 0 .. 10 {
    if i == 3 { continue }  // preskoči 3
    if i == 7 { break }     // zaustavi se na 7
    println(i)
}
```

## Označene petlje

Za ugniježđene petlje možete označiti i prekinuti/nastaviti vanjsku petlju:

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

## Primjer s primes brojevima

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
