# Stringovi

U V-u, stringovi su kodirani u **UTF-8** i **nepromjenjivi** su po zadanom.

## Osnovna upotreba

```v
s    := 'hello 🌎'
name := 'Bob'

println(s.len)         // 10  (broj bajtova)
println(name.len)      // 3
println(name[0])       // 66  (u8 — vrijednost bajta za 'B')
println(name[1..3])    // ob  (rezanje vraća string)
```

## Interpolacija stringa

Koristite `${}` za ugrađivanje izraza unutar stringova:

```v
name := 'Alice'
age  := 30
println('Hello, ${name}! You are ${age} years old.')
println('Is adult: ${age >= 18}')
```

## Višelinjski stringovi

```v
text := 'line one
line two
line three'
```

## Sirovi stringovi

Dodajte `r` za onemogućavanje obrade escape sekvenci:

```v
s := r'hello\nworld'  // \n je zadržan kao dva znaka
println(s)            // hello\nworld
```

## Metode stringa

```v
s := 'Hello, World!'

println(s.to_upper())      // HELLO, WORLD!
println(s.to_lower())      // hello, world!
println(s.contains('World'))   // true
println(s.starts_with('Hello')) // true
println(s.ends_with('!'))  // true
println(s.replace('World', 'V')) // Hello, V!
println(s.split(', '))     // ['Hello', 'World!']
println(s.trim_space())    // Hello, World!  (uklanja vodeće/zakasnjele razmake)
```

## Pretvaranje u brojeve

```v
s := '42'
n := s.int()          // 42
f := '3.14'.f64()     // 3.14

assert '0xc3'.int() == 195
assert '0o10'.int() == 8
assert '0b1010'.int() == 10
```

## Rune (Unicode kodne tačke)

Za rad s Unicode znakovima umjesto sirovih bajtova, koristite `runes()`:

```v
mut s := 'hello 🌎'
r := s.runes()
println(r.len)    // 7  (7 Unicode kodnih tačaka, ne 10 bajtova)
println(r[6])     // 🌎
```

## Graditelj stringova

Za efikasno spajanje stringova koristite `strings.Builder`:

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
