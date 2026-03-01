# Maps (Dictionnaires)

Les maps sont des magasins clé-valeur non ordonnés. Toutes les clés doivent être du même type, et toutes les valeurs doivent être du même type.

## Créer des maps

```v
// littéral de map
mut scores := {
    'Alice': 10
    'Bob':   20
    'Carol': 30
}

// map vide
mut m := map[string]int{}
```

## Ajouter et mettre à jour

```v
mut m := map[string]int{}
m['x'] = 1
m['y'] = 2
m['x'] = 99   // mettre à jour une clé existante
println(m)    // {'x': 99, 'y': 2}
```

## Lire des valeurs

```v
scores := {'Alice': 10, 'Bob': 20}

println(scores['Alice']) // 10

// lecture sécurisée avec bloc `or` — évite la panique sur une clé manquante
val := scores['Dave'] or { -1 }
println(val) // -1
```

## Vérifier une clé

```v
m := {'a': 1, 'b': 2}

if 'a' in m {
    println('trouvé a : ${m['a']}')
}

if 'z' !in m {
    println('z n\'est pas dans la map')
}
```

## Supprimer des clés

```v
mut m := {'a': 1, 'b': 2, 'c': 3}
m.delete('b')
println(m) // {'a': 1, 'c': 3}
```

## Itération

```v
m := {'one': 1, 'two': 2, 'three': 3}

for key, val in m {
    println('${key} = ${val}')
}

// clés et valeurs séparément
for key in m.keys() {
    println(key)
}
```

## Taille de la map

```v
m := {'a': 1, 'b': 2}
println(m.len) // 2
```

## Types de clés autorisés

Les clés d'une map peuvent être des chaînes, des entiers, des flottants, des runes, ou tout type qui implémente l'opérateur `==`.

```v
mut m := map[int]string{}
m[1] = 'one'
m[2] = 'two'
println(m[1]) // one
```
