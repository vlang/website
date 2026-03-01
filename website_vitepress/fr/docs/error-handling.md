# Gestion des erreurs

V utilise les types **Option** et **Result** à la place des exceptions. Cela rend la gestion des erreurs explicite et visible dans les signatures de fonctions.

## Types Option

Un `?T` (option) contient soit une valeur de type `T`, soit `none` :

```v
fn find_user(id int) ?string {
    users := {1: 'Alice', 2: 'Bob'}
    return users[id] or { return none }
}

fn main() {
    if name := find_user(1) {
        println('Trouvé : ${name}') // Trouvé : Alice
    } else {
        println('Non trouvé')
    }
}
```

## Types Result

Un `!T` (result) contient soit une valeur de type `T`, soit une erreur :

```v
fn divide(a f64, b f64) !f64 {
    if b == 0.0 {
        return error('division par zéro')
    }
    return a / b
}

fn main() {
    result := divide(10.0, 2.0) or {
        eprintln('Erreur : ${err}')
        return
    }
    println(result) // 5.0
}
```

## Le bloc `or`

Le bloc `or` s'exécute quand le résultat est `none` ou une erreur. À l'intérieur de `or`, `err` contient la valeur d'erreur :

```v
import net.http

fn main() {
    resp := http.get('https://vlang.io/utc_now') or {
        eprintln('Échec de la requête. Erreur : ${err}')
        return
    }
    println(resp.body)
}
```

## Propagation des erreurs avec `!`

Ajouter `!` après un appel propage l'erreur vers l'appelant (similaire à `?` en Rust) :

```v
fn read_config(path string) !string {
    content := os.read_file(path)!  // propage si erreur
    return content
}
```

## Erreurs personnalisées

Implémentez l'interface `IError` pour créer des types d'erreur personnalisés :

```v
struct DivisionError {
    msg  string
    code int
}

fn (e DivisionError) msg() string {
    return e.msg
}

fn (e DivisionError) code() int {
    return e.code
}

fn safe_divide(a f64, b f64) !f64 {
    if b == 0 {
        return DivisionError{msg: 'impossible de diviser par zéro', code: 1}
    }
    return a / b
}
```

## Correspondance sur les types d'erreur

```v
import semver

fn main() {
    semver.from('invalid') or { check_error(err) }
    semver.from('') or { check_error(err) }
}

fn check_error(err IError) {
    match err {
        semver.InvalidVersionFormatError {
            println('format incorrect')
        }
        semver.EmptyInputError {
            println('entrée vide')
        }
        else {
            println('erreur inconnue : ${err}')
        }
    }
}
```

## L'opérateur de déballage `?`

Utilisez `val?` dans un contexte option pour déballer ou propager `none` :

```v
fn get_name(users map[int]string, id int) ?string {
    return users[id]?
}
```
