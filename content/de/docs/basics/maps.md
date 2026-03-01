# Maps

Maps sind ungeordnete Schlüssel-Wert-Speicher. Alle Schlüssel müssen vom gleichen Typ sein, und alle Werte müssen vom gleichen Typ sein.

## Maps erstellen

```v
// Map-Literal
mut scores := {
    'Alice': 10
    'Bob':   20
    'Carol': 30
}

// Leere Map
mut m := map[string]int{}
```

## Hinzufügen und Aktualisieren

```v
mut m := map[string]int{}
m['x'] = 1
m['y'] = 2
m['x'] = 99   // vorhandenen Schlüssel aktualisieren
println(m)    // {'x': 99, 'y': 2}
```

## Werte lesen

```v
scores := {'Alice': 10, 'Bob': 20}

println(scores['Alice']) // 10

// sicheres Nachschlagen mit `or`-Block — verhindert Panic bei fehlendem Schlüssel
val := scores['Dave'] or { -1 }
println(val) // -1
```

## Auf einen Schlüssel prüfen

```v
m := {'a': 1, 'b': 2}

if 'a' in m {
    println('found a: ${m['a']}')
}

if 'z' !in m {
    println('z is not in the map')
}
```

## Schlüssel löschen

```v
mut m := {'a': 1, 'b': 2, 'c': 3}
m.delete('b')
println(m) // {'a': 1, 'c': 3}
```

## Iteration

```v
m := {'one': 1, 'two': 2, 'three': 3}

for key, val in m {
    println('${key} = ${val}')
}

// Schlüssel und Werte separat
for key in m.keys() {
    println(key)
}
```

## Map-Größe

```v
m := {'a': 1, 'b': 2}
println(m.len) // 2
```

## Erlaubte Schlüsseltypen

Map-Schlüssel können Strings, Integer, Floats, Runes oder beliebige Typen sein, die den `==`-Operator implementieren.

```v
mut m := map[int]string{}
m[1] = 'one'
m[2] = 'two'
println(m[1]) // one
```
