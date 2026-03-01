# Hata Yönetimi

V, istisnalar yerine **Option** ve **Result** türlerini kullanır. Bu, hata yönetimini açık ve fonksiyon imzalarında görünür kılar.

## Option Türleri

`?T` (option), `T` türünde bir değer veya `none` tutar:

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

## Result Türleri

`!T` (result), `T` türünde bir değer veya bir hata tutar:

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

## `or` Bloğu

`or` bloğu, sonuç `none` veya hata olduğunda çalışır. `or` içinde `err`, hata değerini tutar:

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

## `!` ile Hataları Yayma

Bir çağrıdan sonra `!` eklemek, hatayı çağırana yayar (Rust'taki `?`'ye benzer):

```v
fn read_config(path string) !string {
    content := os.read_file(path)!  // hata varsa yayar
    return content
}
```

## Özel Hatalar

Özel hata türleri oluşturmak için `IError` arayüzünü uygulayın:

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

## Hata Türlerinde Eşleştirme

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

## `?` Açma Operatörü

Bir option bağlamında `none`'ı açmak veya yaymak için `val?` kullanın:

```v
fn get_name(users map[int]string, id int) ?string {
    return users[id]?
}
```
