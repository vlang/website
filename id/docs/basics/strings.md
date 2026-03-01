# String

Dalam V, string dikodekan dalam **UTF-8** dan bersifat **tak dapat diubah** secara default.

## Penggunaan Dasar

```v
s    := 'hello 🌎'
name := 'Bob'

println(s.len)         // 10  (jumlah byte)
println(name.len)      // 3
println(name[0])       // 66  (u8 — nilai byte dari 'B')
println(name[1..3])    // ob  (pemotongan mengembalikan string)
```

## Interpolasi String

Gunakan `${}` untuk menyematkan ekspresi di dalam string:

```v
name := 'Alice'
age  := 30
println('Hello, ${name}! You are ${age} years old.')
println('Is adult: ${age >= 18}')
```

## String Multi-baris

```v
text := 'line one
line two
line three'
```

## String Mentah

Tambahkan awalan `r` untuk menonaktifkan pemrosesan escape:

```v
s := r'hello\nworld'  // \n tetap sebagai dua karakter
println(s)            // hello\nworld
```

## Metode String

```v
s := 'Hello, World!'

println(s.to_upper())      // HELLO, WORLD!
println(s.to_lower())      // hello, world!
println(s.contains('World'))   // true
println(s.starts_with('Hello')) // true
println(s.ends_with('!'))  // true
println(s.replace('World', 'V')) // Hello, V!
println(s.split(', '))     // ['Hello', 'World!']
println(s.trim_space())    // Hello, World!  (menghapus spasi di awal/akhir)
```

## Konversi ke Angka

```v
s := '42'
n := s.int()          // 42
f := '3.14'.f64()     // 3.14

assert '0xc3'.int() == 195
assert '0o10'.int() == 8
assert '0b1010'.int() == 10
```

## Rune (Titik Kode Unicode)

Untuk bekerja dengan karakter Unicode daripada byte mentah, gunakan `runes()`:

```v
mut s := 'hello 🌎'
r := s.runes()
println(r.len)    // 7  (7 titik kode Unicode, bukan 10 byte)
println(r[6])     // 🌎
```

## String Builder

Untuk penggabungan string yang efisien, gunakan `strings.Builder`:

```v
import strings

fn main() {
    mut sb := strings.new_builder(64)
    sb.write_string('Hello')
    sb.write_string(', ')
    sb.write_string('World!')
    println(sb.str()) // Hello, World!
}
```
