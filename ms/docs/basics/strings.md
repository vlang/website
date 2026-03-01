# Rentetan

Dalam V, rentetan dikodkan dalam **UTF-8** dan adalah **tidak boleh diubah** secara lalai.

## Penggunaan Asas

```v
s    := 'hello 🌎'
name := 'Bob'

println(s.len)         // 10  (bilangan bait)
println(name.len)      // 3
println(name[0])       // 66  (u8 — nilai bait 'B')
println(name[1..3])    // ob  (penghirisan mengembalikan rentetan)
```

## Interpolasi Rentetan

Gunakan `${}` untuk menyematkan ungkapan dalam rentetan:

```v
name := 'Alice'
age  := 30
println('Helo, ${name}! Anda berumur ${age} tahun.')
println('Dewasa: ${age >= 18}')
```

## Rentetan Berbilang Baris

```v
text := 'line one
line two
line three'
```

## Rentetan Mentah

Letakkan awalan `r` untuk melumpuhkan pemprosesan jujukan lari:

```v
s := r'hello\nworld'  // \n disimpan sebagai dua aksara
println(s)            // hello\nworld
```

## Kaedah Rentetan

```v
s := 'Hello, World!'

println(s.to_upper())      // HELLO, WORLD!
println(s.to_lower())      // hello, world!
println(s.contains('World'))   // true
println(s.starts_with('Hello')) // true
println(s.ends_with('!'))  // true
println(s.replace('World', 'V')) // Hello, V!
println(s.split(', '))     // ['Hello', 'World!']
println(s.trim_space())    // Hello, World!  (buang ruang di hadapan/belakang)
```

## Menukar kepada Nombor

```v
s := '42'
n := s.int()          // 42
f := '3.14'.f64()     // 3.14

assert '0xc3'.int() == 195
assert '0o10'.int() == 8
assert '0b1010'.int() == 10
```

## Rune (Titik Kod Unicode)

Untuk bekerja dengan aksara Unicode berbanding bait mentah, gunakan `runes()`:

```v
mut s := 'hello 🌎'
r := s.runes()
println(r.len)    // 7  (7 titik kod Unicode, bukan 10 bait)
println(r[6])     // 🌎
```

## Pembina Rentetan

Untuk penggabungan rentetan yang cekap, gunakan `strings.Builder`:

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
