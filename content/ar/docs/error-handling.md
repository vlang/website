# معالجة الأخطاء

تستخدم V نوعَي **Option** و**Result** بدلاً من الاستثناءات. وهذا يجعل معالجة الأخطاء صريحةً وظاهرةً في توقيعات الدوال.

## أنواع Option

يحمل `?T` (الخيار) إما قيمةً من النوع `T` أو `none`:

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

## أنواع Result

يحمل `!T` (النتيجة) إما قيمةً من النوع `T` أو خطأً:

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

## كتلة `or`

تعمل كتلة `or` عندما تكون النتيجة `none` أو خطأً. داخل `or`، يحتوي `err` على قيمة الخطأ:

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

## نشر الأخطاء باستخدام `!`

إضافة `!` بعد استدعاء دالة ينشر الخطأ إلى المُستدعي (مشابه لـ`?` في Rust):

```v
fn read_config(path string) !string {
    content := os.read_file(path)!  // propagates if error
    return content
}
```

## أخطاء مخصصة

نفِّذ واجهة `IError` لإنشاء أنواع أخطاء مخصصة:

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

## المطابقة على أنواع الأخطاء

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

## عامل الكشف `?`

استخدم `val?` داخل سياق خيار لكشف القيمة أو نشر `none`:

```v
fn get_name(users map[int]string, id int) ?string {
    return users[id]?
}
```
