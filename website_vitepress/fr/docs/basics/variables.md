# Variables

## Déclaration et initialisation

Les variables sont déclarées et initialisées avec `:=`. C'est la seule façon de déclarer des variables en V — elles ont toujours une valeur initiale et leur type est inféré depuis le membre droit.

```v
name := 'Bob'
age := 20
large_number := i64(9999999999)
println(name)
println(age)
println(large_number)
```

## Variables mutables

Les variables sont **immuables par défaut**. Utilisez `mut` pour rendre une variable mutable :

```v
mut age := 20
println(age)
age = 21
println(age)
```

> Si vous essayez de réassigner sans `mut`, le compilateur refusera de compiler.

## Conversion de type

Utilisez `T(valeur)` pour convertir entre les types :

```v
x := 42
y := f64(x)  // x converti en f64
z := u8(x)   // x converti en u8
```

## Assignation multiple

Plusieurs variables peuvent être modifiées ou échangées en une seule ligne :

```v
mut a := 0
mut b := 1
println('${a}, ${b}') // 0, 1
a, b = b, a
println('${a}, ${b}') // 1, 0
```

## Ignorer des valeurs

Utilisez `_` pour ignorer une valeur de retour :

```v
fn foo() (int, int) {
    return 2, 3
}

fn main() {
    c, _ := foo()
    println(c)
}
```

## Convention de nommage

Tous les noms de variables et de fonctions doivent utiliser `snake_case`. Les noms de types doivent utiliser `PascalCase`. Le compilateur l'impose.

## Pas de variables globales

V n'autorise pas les variables globales par défaut. Toutes les variables doivent être déclarées à l'intérieur des fonctions. Cela conduit à un code plus prévisible et testable.

## Pas de masquage

Le masquage de variable n'est pas autorisé. Déclarer une variable avec un nom déjà utilisé dans un scope parent est une erreur de compilation :

```v
fn main() {
    a := 10
    // a := 20  // ← erreur de compilation : redéfinition de `a`
}
```
