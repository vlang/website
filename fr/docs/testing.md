# Tests

V dispose d'un support de tests intégré. Aucun framework de test ni bibliothèque externe n'est nécessaire.

## Écrire des tests

Les fonctions de test doivent commencer par `test_` et se trouver dans des fichiers se terminant par `_test.v` :

```v
// math_test.v

fn add(a int, b int) int {
    return a + b
}

fn test_add() {
    assert add(2, 3) == 5
    assert add(0, 0) == 0
    assert add(-1, 1) == 0
}

fn test_add_large_numbers() {
    assert add(1_000_000, 2_000_000) == 3_000_000
}
```

Exécutez les tests avec :

```bash
v test math_test.v
# ou exécutez tous les tests dans un répertoire :
v test .
```

## Assertions

Utilisez `assert` pour vérifier des conditions. Une assertion échouée affiche les valeurs des deux côtés :

```v
fn test_string_ops() {
    s := 'Hello, World!'
    assert s.contains('World')
    assert s.to_upper() == 'HELLO, WORLD!'
    assert s.len == 13
}
```

## Initialisation et nettoyage des tests

```v
// Utilisez testsuite_begin et testsuite_end pour l'initialisation/nettoyage au niveau du module
fn testsuite_begin() {
    // s'exécute une fois avant tous les tests du fichier
    println('Initialisation de la suite de tests...')
}

fn testsuite_end() {
    // s'exécute une fois après tous les tests du fichier
    println('Nettoyage de la suite de tests...')
}
```

## Tester les cas d'erreur

```v
fn safe_divide(a f64, b f64) !f64 {
    if b == 0 {
        return error('division par zéro')
    }
    return a / b
}

fn test_divide_by_zero() {
    result := safe_divide(10, 0) or { err.msg() }
    assert result == 'division par zéro'
}

fn test_divide_normal() {
    result := safe_divide(10, 2) or { panic(err) }
    assert result == 5.0
}
```

## Exécuter des tests spécifiques

```bash
# Exécuter un seul fichier de test
v test mypackage/foo_test.v

# Exécuter les tests correspondant à un motif
v test -run test_add .

# Exécuter avec une sortie détaillée
v test -v .
```

## Tests pilotés par table

V n'a pas d'assistant de test piloté par table intégré, mais vous pouvez le faire manuellement :

```v
fn test_add_table() {
    cases := [
        [2, 3, 5],
        [0, 0, 0],
        [-1, 1, 0],
        [100, 200, 300],
    ]
    for c in cases {
        assert add(c[0], c[1]) == c[2]
    }
}
```

## Couverture de code

Générez un rapport de couverture :

```bash
v -coverage ./coverage_output test .
```
