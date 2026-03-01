# Pengendalian Ralat

V menggunakan jenis **Option** dan **Result** sebagai ganti pengecualian. Ini menjadikan pengendalian ralat eksplisit dan kelihatan dalam tandatangan fungsi.

## Jenis Option

Sebuah `?T` (option) menahan sama ada nilai jenis `T` atau `none`:

```v
fn find_user(id int) ?string {
    users := {1: 'Alice', 2: 'Bob'}
    return users[id] or { return none }
}

fn main() {
    if name := find_user(1) {
        println('Dijumpai: ${name}') // Dijumpai: Alice
    } else {
        println('Tidak dijumpai')
    }
}
```

## Jenis Result

Sebuah `!T` (result) menahan sama ada nilai jenis `T` atau ralat:

```v
fn divide(a f64, b f64) !f64 {
    if b == 0.0 {
        return error('bahagi dengan sifar')
    }
    return a / b
}

fn main() {
    result := divide(10.0, 2.0) or {
        eprintln('Ralat: ${err}')
        return
    }
    println(result) // 5.0
}
```

## Blok `or`

Blok `or` berjalan apabila hasilnya adalah `none` atau ralat. Di dalam `or`, `err` menyimpan nilai ralat:

```v
import net.http

fn main() {
    resp := http.get('https://vlang.io/utc_now') or {
        eprintln('Gagal mengambil. Ralat: ${err}')
        return
    }
    println(resp.body)
}
```

## Menyebarkan Ralat dengan `!`

Menambah `!` selepas panggilan menyebarkan ralat kepada pemanggil (serupa dengan `?` dalam Rust):

```v
fn read_config(path string) !string {
    content := os.read_file(path)!  // sebarkan jika ralat
    return content
}
```

## Ralat Tersuai

Laksanakan antara muka `IError` untuk mencipta jenis ralat tersuai:

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
        return DivisionError{msg: 'tidak boleh bahagi dengan sifar', code: 1}
    }
    return a / b
}
```

## Pemadanan pada Jenis Ralat

```v
import semver

fn main() {
    semver.from('invalid') or { check_error(err) }
    semver.from('') or { check_error(err) }
}

fn check_error(err IError) {
    match err {
        semver.InvalidVersionFormatError {
            println('format salah')
        }
        semver.EmptyInputError {
            println('input kosong')
        }
        else {
            println('ralat tidak diketahui: ${err}')
        }
    }
}
```

## Pengendali Nyah Bungkus `?`

Gunakan `val?` dalam konteks pilihan untuk membuka bungkusan atau menyebarkan `none`:

```v
fn get_name(users map[int]string, id int) ?string {
    return users[id]?
}
```
