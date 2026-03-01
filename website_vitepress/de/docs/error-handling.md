# Error Handling

V uses **Option** and **Result** types instead of exceptions. This makes error handling explicit and visible in function signatures.

## Option Types

An `?T` (option) holds either a value of type `T` or `none`:

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

## Result Types

A `!T` (result) holds either a value of type `T` or an error:

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

## The `or` Block

The `or` block runs when the result is `none` or an error. Inside `or`, `err` holds the error value:

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

## Propagating Errors with `!`

Adding `!` after a call propagates the error up to the caller (similar to `?` in Rust):

```v
fn read_config(path string) !string {
    content := os.read_file(path)!  // propagates if error
    return content
}
```

## Custom Errors

Implement the `IError` interface to create custom error types:

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

## Matching on Error Types

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

## The `?` Unwrap Operator

Use `val?` inside an option context to unwrap or propagate `none`:

```v
fn get_name(users map[int]string, id int) ?string {
    return users[id]?
}
```
