# Perulangan For

V memiliki satu kata kunci perulangan: `for`. Ini mencakup semua pola iterasi.

## Perulangan Rentang

Iterasi atas rentang setengah terbuka `start..end` (end tidak termasuk):

```v
for i in 0 .. 5 {
    println(i) // 0 1 2 3 4
}
```

## Iterasi atas Array

```v
names := ['Alice', 'Bob', 'Carol']

// nilai saja
for name in names {
    println(name)
}

// indeks dan nilai
for i, name in names {
    println('${i}: ${name}')
}
```

## Iterasi atas Map

```v
m := {'a': 1, 'b': 2, 'c': 3}

for key, val in m {
    println('${key} => ${val}')
}
```

## Perulangan Gaya C Klasik

```v
for i := 0; i < 10; i++ {
    println(i)
}
```

## Perulangan Hanya Kondisi (setara while)

```v
mut n := 0
for n < 5 {
    println(n)
    n++
}
```

## Perulangan Tak Terbatas

```v
mut i := 0
for {
    i++
    if i >= 5 { break }
}
```

## `break` dan `continue`

```v
for i in 0 .. 10 {
    if i == 3 { continue }  // lewati 3
    if i == 7 { break }     // berhenti di 7
    println(i)
}
```

## Perulangan Berlabel

Untuk perulangan bersarang, Anda dapat memberi label dan break/continue dari perulangan luar:

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

## Contoh Bilangan Prima

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
