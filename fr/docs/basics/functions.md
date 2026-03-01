# Fonctions

## Syntaxe de base

```v
fn main() {
    println(add(77, 33))
    println(sub(100, 50))
}

fn add(x int, y int) int {
    return x + y
}

fn sub(x int, y int) int {
    return x - y
}
```

Le type de retour est spécifié **après** la liste des paramètres. Si la fonction ne retourne rien, le type de retour est omis.

## Hissage (Hoisting)

Les fonctions peuvent être utilisées avant d'être déclarées. V hisse toutes les déclarations, il n'y a donc pas besoin de fichiers d'en-tête ni de déclarations anticipatives.

## Valeurs de retour multiples

```v
fn foo() (int, int) {
    return 2, 3
}

a, b := foo()
println(a) // 2
println(b) // 3
c, _ := foo() // ignorer la deuxième valeur avec `_`
```

## Visibilité

Les fonctions sont **privées** par défaut. Utilisez `pub` pour les exporter :

```v
pub fn public_function() {
}

fn private_function() {
}
```

## Pas de surcharge

Les fonctions ne peuvent pas être surchargées. Cela rend le code non ambigu et facile à lire.

## Méthodes

Les fonctions peuvent être attachées à des types :

```v
struct User {
    name string
    age  int
}

fn (u User) can_register() bool {
    return u.age >= 16
}

fn (mut u User) register() {
    println('${u.name} est maintenant inscrit')
}

fn main() {
    mut u := User{ name: 'Frodo', age: 25 }
    if u.can_register() {
        u.register()
    }
}
```

## Fonctions d'ordre supérieur

Les fonctions sont des valeurs de première classe et peuvent être passées à d'autres fonctions :

```v
fn apply(arr []int, f fn(int) int) []int {
    mut result := []int{}
    for x in arr {
        result << f(x)
    }
    return result
}

fn double(x int) int {
    return x * 2
}

fn main() {
    nums := [1, 2, 3, 4, 5]
    doubled := apply(nums, double)
    println(doubled) // [2, 4, 6, 8, 10]
}
```

## Fonctions anonymes

```v
fn main() {
    double := fn (x int) int {
        return x * 2
    }
    println(double(5)) // 10
}
```
