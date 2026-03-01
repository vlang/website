# String'ler

V'de string'ler **UTF-8** ile kodlanmıştır ve varsayılan olarak **değişmezdir**.

## Temel Kullanım

```v
s    := 'hello 🌎'
name := 'Bob'

println(s.len)         // 10  (bayt sayısı)
println(name.len)      // 3
println(name[0])       // 66  (u8 — 'B'nin bayt değeri)
println(name[1..3])    // ob  (dilimleme bir string döndürür)
```

## String İnterpolasyonu

String'lerin içine ifade gömmek için `${}` kullanın:

```v
name := 'Alice'
age  := 30
println('Hello, ${name}! You are ${age} years old.')
println('Is adult: ${age >= 18}')
```

## Çok Satırlı String'ler

```v
text := 'line one
line two
line three'
```

## Ham String'ler

Kaçış işlemini devre dışı bırakmak için başına `r` ekleyin:

```v
s := r'hello\nworld'  // \n iki karakter olarak kalır
println(s)            // hello\nworld
```

## String Metodları

```v
s := 'Hello, World!'

println(s.to_upper())      // HELLO, WORLD!
println(s.to_lower())      // hello, world!
println(s.contains('World'))   // true
println(s.starts_with('Hello')) // true
println(s.ends_with('!'))  // true
println(s.replace('World', 'V')) // Hello, V!
println(s.split(', '))     // ['Hello', 'World!']
println(s.trim_space())    // Hello, World!  (baştaki/sondaki boşlukları kaldırır)
```

## Sayılara Dönüştürme

```v
s := '42'
n := s.int()          // 42
f := '3.14'.f64()     // 3.14

assert '0xc3'.int() == 195
assert '0o10'.int() == 8
assert '0b1010'.int() == 10
```

## Rune'lar (Unicode Kod Noktaları)

Ham baytlar yerine Unicode karakterleriyle çalışmak için `runes()` kullanın:

```v
mut s := 'hello 🌎'
r := s.runes()
println(r.len)    // 7  (7 Unicode kod noktası, 10 bayt değil)
println(r[6])     // 🌎
```

## String Oluşturucu

Verimli string birleştirme için `strings.Builder` kullanın:

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
