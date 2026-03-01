# For-Schleifen

V hat ein einziges Schleifen-Schlüsselwort: `for`. Es deckt alle Iterationsmuster ab.

## Bereichsschleife

Über einen halboffenen Bereich `start..end` iterieren (end ist exklusiv):

```v
for i in 0 .. 5 {
    println(i) // 0 1 2 3 4
}
```

## Über Arrays iterieren

```v
names := ['Alice', 'Bob', 'Carol']

// nur Wert
for name in names {
    println(name)
}

// Index und Wert
for i, name in names {
    println('${i}: ${name}')
}
```

## Über Maps iterieren

```v
m := {'a': 1, 'b': 2, 'c': 3}

for key, val in m {
    println('${key} => ${val}')
}
```

## Klassische C-Stil-Schleife

```v
for i := 0; i < 10; i++ {
    println(i)
}
```

## Nur-Bedingung-Schleife (while-Äquivalent)

```v
mut n := 0
for n < 5 {
    println(n)
    n++
}
```

## Endlosschleife

```v
mut i := 0
for {
    i++
    if i >= 5 { break }
}
```

## `break` und `continue`

```v
for i in 0 .. 10 {
    if i == 3 { continue }  // 3 überspringen
    if i == 7 { break }     // bei 7 stoppen
    println(i)
}
```

## Beschriftete Schleifen

Bei verschachtelten Schleifen kann man eine äußere Schleife beschriften und aus ihr heraus break/continue ausführen:

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

## Primzahlen-Beispiel

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
