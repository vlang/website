# Fehlerbehandlung

V verwendet **Option**- und **Result**-Typen anstelle von Ausnahmen. Dadurch wird die Fehlerbehandlung explizit und in Funktionssignaturen sichtbar.

## Option-Typen

Ein `?T` (Option) enthält entweder einen Wert vom Typ `T` oder `none`:

```v
fn find_user(id int) ?string {
    users := {1: 'Alice', 2: 'Bob'}
    return users[id] or { return none }
}

fn main() {
    if name := find_user(1) {
        println('Found: ${name}') // Found: Alice
    } else {
        println('Not found')
    }
}
```

## Result-Typen

Ein `!T` (Result) enthält entweder einen Wert vom Typ `T` oder einen Fehler:

```v
fn divide(a f64, b f64) !f64 {
    if b == 0.0 {
        return error('division by zero')
    }
    return a / b
}

fn main() {
    result := divide(10.0, 2.0) or {
        eprintln('Error: ${err}')
        return
    }
    println(result) // 5.0
}
```

## Der `or`-Block

Der `or`-Block wird ausgeführt, wenn das Ergebnis `none` oder ein Fehler ist. Innerhalb von `or` enthält `err` den Fehlerwert:

```v
import net.http

fn main() {
    resp := http.get('https://vlang.io/utc_now') or {
        eprintln('Failed to fetch. Error: ${err}')
        return
    }
    println(resp.body)
}
```

## Fehler mit `!` weitergeben

Das Hinzufügen von `!` nach einem Aufruf gibt den Fehler an den Aufrufer weiter (ähnlich wie `?` in Rust):

```v
fn read_config(path string) !string {
    content := os.read_file(path)!  // wird weitergegeben, wenn ein Fehler auftritt
    return content
}
```

## Eigene Fehlertypen

Implementiere das `IError`-Interface, um eigene Fehlertypen zu erstellen:

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
        return DivisionError{msg: 'cannot divide by zero', code: 1}
    }
    return a / b
}
```

## Auf Fehlertypen matchen

```v
import semver

fn main() {
    semver.from('invalid') or { check_error(err) }
    semver.from('') or { check_error(err) }
}

fn check_error(err IError) {
    match err {
        semver.InvalidVersionFormatError {
            println('wrong format')
        }
        semver.EmptyInputError {
            println('empty input')
        }
        else {
            println('unknown error: ${err}')
        }
    }
}
```

## Der `?`-Entpack-Operator

Verwende `val?` in einem Option-Kontext, um den Wert zu entpacken oder `none` weiterzugeben:

```v
fn get_name(users map[int]string, id int) ?string {
    return users[id]?
}
```
