# Mape

Mape su neurejene pohrane ključ-vrijednost. Svi ključevi moraju biti istog tipa, a sve vrijednosti moraju biti istog tipa.

## Kreiranje mapa

```v
// literal mape
mut scores := {
    'Alice': 10
    'Bob':   20
    'Carol': 30
}

// prazna mapa
mut m := map[string]int{}
```

## Dodavanje i ažuriranje

```v
mut m := map[string]int{}
m['x'] = 1
m['y'] = 2
m['x'] = 99   // ažuriranje postojećeg ključa
println(m)    // {'x': 99, 'y': 2}
```

## Čitanje vrijednosti

```v
scores := {'Alice': 10, 'Bob': 20}

println(scores['Alice']) // 10

// sigurno pretraživanje s blokom `or` — izbjegava paniku kod nedostajućeg ključa
val := scores['Dave'] or { -1 }
println(val) // -1
```

## Provjera ključa

```v
m := {'a': 1, 'b': 2}

if 'a' in m {
    println('found a: ${m['a']}')
}

if 'z' !in m {
    println('z is not in the map')
}
```

## Brisanje ključeva

```v
mut m := {'a': 1, 'b': 2, 'c': 3}
m.delete('b')
println(m) // {'a': 1, 'c': 3}
```

## Iteracija

```v
m := {'one': 1, 'two': 2, 'three': 3}

for key, val in m {
    println('${key} = ${val}')
}

// ključevi i vrijednosti odvojeno
for key in m.keys() {
    println(key)
}
```

## Veličina mape

```v
m := {'a': 1, 'b': 2}
println(m.len) // 2
```

## Dozvoljeni tipovi ključeva

Ključevi mape mogu biti stringovi, integeri, decimalni brojevi, rune ili bilo koji tip koji implementira operator `==`.

```v
mut m := map[int]string{}
m[1] = 'one'
m[2] = 'two'
println(m[1]) // one
```
