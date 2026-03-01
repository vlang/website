# Feilhåndtering

V bruker **Option**- og **Result**-typer i stedet for unntak. Dette gjør feilhåndtering eksplisitt og synlig i funksjonssignaturer.

## Option-typer

En `?T` (option) holder enten en verdi av typen `T` eller `none`:

```v
fn find_user(id int) ?string {
    users := {1: 'Alice', 2: 'Bob'}
    return users[id] or { return none }
}

fn main() {
    if name := find_user(1) {
        println('Fant: ${name}') // Fant: Alice
    } else {
        println('Ikke funnet')
    }
}
```

## Result-typer

En `!T` (result) holder enten en verdi av typen `T` eller en feil:

```v
fn divide(a f64, b f64) !f64 {
    if b == 0.0 {
        return error('divisjon med null')
    }
    return a / b
}

fn main() {
    result := divide(10.0, 2.0) or {
        eprintln('Feil: ${err}')
        return
    }
    println(result) // 5.0
}
```

## `or`-blokken

`or`-blokken kjører når resultatet er `none` eller en feil. Inne i `or` holder `err` feilverdien:

```v
import net.http

fn main() {
    resp := http.get('https://vlang.io/utc_now') or {
        eprintln('Klarte ikke å hente. Feil: ${err}')
        return
    }
    println(resp.body)
}
```

## Videreformidle feil med `!`

Å legge til `!` etter et kall videresender feilen til kalleren (ligner på `?` i Rust):

```v
fn read_config(path string) !string {
    content := os.read_file(path)!  // videreformidler ved feil
    return content
}
```

## Egendefinerte feil

Implementer `IError`-grensesnittet for å lage egendefinerte feiltyper:

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
        return DivisionError{msg: 'kan ikke dele med null', code: 1}
    }
    return a / b
}
```

## Matching på feiltyper

```v
import semver

fn main() {
    semver.from('invalid') or { check_error(err) }
    semver.from('') or { check_error(err) }
}

fn check_error(err IError) {
    match err {
        semver.InvalidVersionFormatError {
            println('feil format')
        }
        semver.EmptyInputError {
            println('tom inndata')
        }
        else {
            println('ukjent feil: ${err}')
        }
    }
}
```

## `?`-operatoren for utpakking

Bruk `val?` inne i en option-kontekst for å pakke ut eller videreformidle `none`:

```v
fn get_name(users map[int]string, id int) ?string {
    return users[id]?
}
```
