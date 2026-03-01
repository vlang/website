# Mapes

Els mapes són emmagatzemadors de clau-valor sense ordre. Totes les claus han de ser del mateix tipus i tots els valors han de ser del mateix tipus.

## Crear Mapes

```v
// literal de mapa
mut scores := {
    'Alice': 10
    'Bob':   20
    'Carol': 30
}

// mapa buit
mut m := map[string]int{}
```

## Afegir i Actualitzar

```v
mut m := map[string]int{}
m['x'] = 1
m['y'] = 2
m['x'] = 99   // update existing key
println(m)    // {'x': 99, 'y': 2}
```

## Llegir Valors

```v
scores := {'Alice': 10, 'Bob': 20}

println(scores['Alice']) // 10

// cerca segura amb bloc `or` — evita el pànic si falta la clau
val := scores['Dave'] or { -1 }
println(val) // -1
```

## Verificar una Clau

```v
m := {'a': 1, 'b': 2}

if 'a' in m {
    println('found a: ${m['a']}')
}

if 'z' !in m {
    println('z is not in the map')
}
```

## Eliminar Claus

```v
mut m := {'a': 1, 'b': 2, 'c': 3}
m.delete('b')
println(m) // {'a': 1, 'c': 3}
```

## Iteració

```v
m := {'one': 1, 'two': 2, 'three': 3}

for key, val in m {
    println('${key} = ${val}')
}

// claus i valors per separat
for key in m.keys() {
    println(key)
}
```

## Mida del Mapa

```v
m := {'a': 1, 'b': 2}
println(m.len) // 2
```

## Tipus de Clau Permesos

Les claus dels mapes poden ser cadenes, enters, decimals, runes o qualsevol tipus que implementi l'operador `==`.

```v
mut m := map[int]string{}
m[1] = 'one'
m[2] = 'two'
println(m[1]) // one
```
