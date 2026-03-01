# Gelung For

V mempunyai satu kata kunci gelung: `for`. Ia merangkumi semua corak pengulangan.

## Gelung Julat

Ulangi julat separuh terbuka `mula..akhir` (akhir tidak termasuk):

```v
for i in 0 .. 5 {
    println(i) // 0 1 2 3 4
}
```

## Mengulang Tatasusunan

```v
names := ['Alice', 'Bob', 'Carol']

// nilai sahaja
for name in names {
    println(name)
}

// indeks dan nilai
for i, name in names {
    println('${i}: ${name}')
}
```

## Mengulang Peta

```v
m := {'a': 1, 'b': 2, 'c': 3}

for key, val in m {
    println('${key} => ${val}')
}
```

## Gelung Gaya-C Klasik

```v
for i := 0; i < 10; i++ {
    println(i)
}
```

## Gelung Syarat Sahaja (setara while)

```v
mut n := 0
for n < 5 {
    println(n)
    n++
}
```

## Gelung Tak Terhingga

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
    if i == 3 { continue }  // langkau 3
    if i == 7 { break }     // berhenti pada 7
    println(i)
}
```

## Gelung Berlabel

Untuk gelung bersarang, anda boleh melabel dan break/continue dari gelung luar:

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

## Contoh Nombor Perdana

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
