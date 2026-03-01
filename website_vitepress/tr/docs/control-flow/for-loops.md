# For Döngüleri

V'de tek bir döngü anahtar sözcüğü vardır: `for`. Tüm yineleme desenlerini kapsar.

## Aralık Döngüsü

Yarı açık bir aralık üzerinde yineleme yapın `start..end` (bitiş dahil değil):

```v
for i in 0 .. 5 {
    println(i) // 0 1 2 3 4
}
```

## Diziler Üzerinde Yineleme

```v
names := ['Alice', 'Bob', 'Carol']

// yalnızca değer
for name in names {
    println(name)
}

// indeks ve değer
for i, name in names {
    println('${i}: ${name}')
}
```

## Haritalar Üzerinde Yineleme

```v
m := {'a': 1, 'b': 2, 'c': 3}

for key, val in m {
    println('${key} => ${val}')
}
```

## Klasik C Tarzı Döngü

```v
for i := 0; i < 10; i++ {
    println(i)
}
```

## Yalnızca Koşullu Döngü (while eşdeğeri)

```v
mut n := 0
for n < 5 {
    println(n)
    n++
}
```

## Sonsuz Döngü

```v
mut i := 0
for {
    i++
    if i >= 5 { break }
}
```

## `break` ve `continue`

```v
for i in 0 .. 10 {
    if i == 3 { continue }  // 3'ü atla
    if i == 7 { break }     // 7'de dur
    println(i)
}
```

## Etiketli Döngüler

İç içe döngüler için, dış döngüyü etiketleyip oradan break/continue yapabilirsiniz:

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

## Asal Sayılar Örneği

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
