# Kart

Kart er uordnede nøkkel-verdi-lagre. Alle nøkler må være av samme type, og alle verdier må være av samme type.

## Opprette kart

```v
// map literal
mut scores := {
    'Alice': 10
    'Bob':   20
    'Carol': 30
}

// empty map
mut m := map[string]int{}
```

## Legge til og oppdatere

```v
mut m := map[string]int{}
m['x'] = 1
m['y'] = 2
m['x'] = 99   // oppdater eksisterende nøkkel
println(m)    // {'x': 99, 'y': 2}
```

## Lese verdier

```v
scores := {'Alice': 10, 'Bob': 20}

println(scores['Alice']) // 10

// trygt oppslag med `or`-blokk — unngår panikk ved manglende nøkkel
val := scores['Dave'] or { -1 }
println(val) // -1
```

## Sjekke etter nøkkel

```v
m := {'a': 1, 'b': 2}

if 'a' in m {
    println('fant a: ${m["a"]}')
}

if 'z' !in m {
    println('z er ikke i kartet')
}
```

## Slette nøkler

```v
mut m := {'a': 1, 'b': 2, 'c': 3}
m.delete('b')
println(m) // {'a': 1, 'c': 3}
```

## Iterasjon

```v
m := {'one': 1, 'two': 2, 'three': 3}

for key, val in m {
    println('${key} = ${val}')
}

// nøkler og verdier separat
for key in m.keys() {
    println(key)
}
```

## Kartststørrelse

```v
m := {'a': 1, 'b': 2}
println(m.len) // 2
```

## Tillatte nøkkeltyper

Kartnøkler kan være strenger, heltall, flyttall, runer eller hvilken som helst type som implementerer `==`-operatoren.

```v
mut m := map[int]string{}
m[1] = 'one'
m[2] = 'two'
println(m[1]) // one
```
