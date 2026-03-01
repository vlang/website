# Обработка ошибок

V использует типы **Option** и **Result** вместо исключений. Это делает обработку ошибок явной и видимой в сигнатурах функций.

## Тип Option

`?T` (опциональный тип) содержит либо значение типа `T`, либо `none`:

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

## Тип Result

`!T` (результирующий тип) содержит либо значение типа `T`, либо ошибку:

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

## Блок `or`

Блок `or` выполняется, когда результат равен `none` или является ошибкой. Внутри `or` переменная `err` содержит значение ошибки:

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

## Распространение ошибок с помощью `!`

Добавление `!` после вызова передаёт ошибку вызывающей функции (аналогично `?` в Rust):

```v
fn read_config(path string) !string {
    content := os.read_file(path)!  // передаёт ошибку выше при её наличии
    return content
}
```

## Пользовательские ошибки

Реализуйте интерфейс `IError` для создания собственных типов ошибок:

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

## Сопоставление по типам ошибок

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

## Оператор `?` для unwrap

Используйте `val?` внутри опционального контекста для извлечения значения или передачи `none` выше:

```v
fn get_name(users map[int]string, id int) ?string {
    return users[id]?
}
```
