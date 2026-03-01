# Rukovanje greškama

V koristi tipove **Option** i **Result** umjesto iznimki. Ovo čini rukovanje greškama eksplicitnim i vidljivim u potpisima funkcija.

## Option tipovi

`?T` (opcija) sadrži ili vrijednost tipa `T` ili `none`:

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

## Result tipovi

`!T` (rezultat) sadrži ili vrijednost tipa `T` ili grešku:

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

## Blok `or`

Blok `or` se izvršava kada je rezultat `none` ili greška. Unutar `or`, `err` sadrži vrijednost greške:

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

## Propagiranje grešaka s `!`

Dodavanje `!` nakon poziva propagira grešku do pozivaoca (slično `?` u Rustu):

```v
fn read_config(path string) !string {
    content := os.read_file(path)!  // propagira ako dođe do greške
    return content
}
```

## Prilagođene greške

Implementirajte sučelje `IError` za kreiranje prilagođenih tipova grešaka:

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

## Podudaranje na tipovima grešaka

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

## Operator `?` za raspakivanje

Koristite `val?` unutar option konteksta za raspakivanje ili propagiranje `none`:

```v
fn get_name(users map[int]string, id int) ?string {
    return users[id]?
}
```
