# 错误处理

V 使用 **Option** 和 **Result** 类型代替异常。这使得错误处理在函数签名中显式可见。

## Option 类型

`?T`（option）持有类型为 `T` 的值或 `none`：

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

## Result 类型

`!T`（result）持有类型为 `T` 的值或一个错误：

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

## `or` 块

当结果为 `none` 或错误时，`or` 块会执行。在 `or` 内部，`err` 持有错误值：

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

## 使用 `!` 传播错误

在调用后添加 `!` 可将错误向上传播给调用者（类似 Rust 中的 `?`）：

```v
fn read_config(path string) !string {
    content := os.read_file(path)!  // 如果出错则传播
    return content
}
```

## 自定义错误

实现 `IError` 接口以创建自定义错误类型：

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

## 匹配错误类型

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

## `?` 解包运算符

在 option 上下文中使用 `val?` 可以解包或传播 `none`：

```v
fn get_name(users map[int]string, id int) ?string {
    return users[id]?
}
```
