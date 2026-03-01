# Gestió d'Errors

V utilitza tipus **Option** i **Result** en lloc d'excepcions. Això fa que la gestió d'errors sigui explícita i visible en les signatures de les funcions.

## Tipus Option

Un `?T` (option) conté un valor de tipus `T` o `none`:

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

## Tipus Result

Un `!T` (result) conté un valor de tipus `T` o un error:

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

## El Bloc `or`

El bloc `or` s'executa quan el resultat és `none` o un error. Dins de `or`, `err` conté el valor de l'error:

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

## Propagació d'Errors amb `!`

Afegir `!` després d'una crida propaga l'error cap al cridant (similar a `?` en Rust):

```v
fn read_config(path string) !string {
    content := os.read_file(path)!  // propaga si hi ha error
    return content
}
```

## Errors Personalitzats

Implementa la interfície `IError` per crear tipus d'error personalitzats:

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

## Coincidència amb Tipus d'Error

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

## L'Operador de Desembolcall `?`

Usa `val?` dins d'un context d'option per desembolcallar o propagar `none`:

```v
fn get_name(users map[int]string, id int) ?string {
    return users[id]?
}
```
