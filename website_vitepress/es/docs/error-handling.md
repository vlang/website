# Manejo de Errores

V usa los tipos **Option** y **Result** en lugar de excepciones. Esto hace que el manejo de errores sea explícito y visible en las firmas de las funciones.

## Tipos Option

Un `?T` (option) contiene ya sea un valor de tipo `T` o `none`:

```v
fn find_user(id int) ?string {
    users := {1: 'Alice', 2: 'Bob'}
    return users[id] or { return none }
}

fn main() {
    if name := find_user(1) {
        println('Encontrado: ${name}') // Encontrado: Alice
    } else {
        println('No encontrado')
    }
}
```

## Tipos Result

Un `!T` (result) contiene ya sea un valor de tipo `T` o un error:

```v
fn divide(a f64, b f64) !f64 {
    if b == 0.0 {
        return error('división por cero')
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

## El Bloque `or`

El bloque `or` se ejecuta cuando el resultado es `none` o un error. Dentro de `or`, `err` contiene el valor del error:

```v
import net.http

fn main() {
    resp := http.get('https://vlang.io/utc_now') or {
        eprintln('Error al obtener datos. Error: ${err}')
        return
    }
    println(resp.body)
}
```

## Propagación de Errores con `!`

Añadir `!` después de una llamada propaga el error al llamador (similar a `?` en Rust):

```v
fn read_config(path string) !string {
    content := os.read_file(path)!  // propaga si hay error
    return content
}
```

## Errores Personalizados

Implementa la interfaz `IError` para crear tipos de error personalizados:

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
        return DivisionError{msg: 'no se puede dividir por cero', code: 1}
    }
    return a / b
}
```

## Coincidencia en Tipos de Error

```v
import semver

fn main() {
    semver.from('invalid') or { check_error(err) }
    semver.from('') or { check_error(err) }
}

fn check_error(err IError) {
    match err {
        semver.InvalidVersionFormatError {
            println('formato incorrecto')
        }
        semver.EmptyInputError {
            println('entrada vacía')
        }
        else {
            println('error desconocido: ${err}')
        }
    }
}
```

## El Operador de Desempaquetado `?`

Usa `val?` dentro de un contexto option para desempaquetar o propagar `none`:

```v
fn get_name(users map[int]string, id int) ?string {
    return users[id]?
}
```
