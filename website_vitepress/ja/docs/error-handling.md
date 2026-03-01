# エラーハンドリング

Vは例外の代わりに**Option**型と**Result**型を使用します。これにより、エラーハンドリングが明示的になり、関数シグネチャで可視化されます。

## Option型

`?T`（オプション）は型`T`の値または`none`のどちらかを保持します：

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

## Result型

`!T`（リザルト）は型`T`の値またはエラーのどちらかを保持します：

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

## `or`ブロック

`or`ブロックはリザルトが`none`またはエラーのときに実行されます。`or`の中では`err`がエラー値を保持します：

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

## `!`でエラーを伝播する

呼び出しの後に`!`を追加すると、エラーを呼び出し元に伝播します（Rustの`?`に相当）：

```v
fn read_config(path string) !string {
    content := os.read_file(path)!  // エラーの場合は伝播
    return content
}
```

## カスタムエラー

`IError`インターフェースを実装してカスタムエラー型を作成します：

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

## エラー型のマッチング

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

## `?`アンラップ演算子

オプションコンテキスト内で`val?`を使用してアンラップするか`none`を伝播します：

```v
fn get_name(users map[int]string, id int) ?string {
    return users[id]?
}
```
