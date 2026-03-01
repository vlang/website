# Strenger

I V er strenger kodet i **UTF-8** og er **uforanderlige** som standard.

## Grunnleggende bruk

```v
s    := 'hello 🌎'
name := 'Bob'

println(s.len)         // 10  (antall byte)
println(name.len)      // 3
println(name[0])       // 66  (u8 — byteverdi av 'B')
println(name[1..3])    // ob  (slicing returnerer en streng)
```

## Strenginterpolasjon

Bruk `${}` for å bygge inn uttrykk i strenger:

```v
name := 'Alice'
age  := 30
println('Hei, ${name}! Du er ${age} år gammel.')
println('Er voksen: ${age >= 18}')
```

## Flerlinjestrenger

```v
text := 'line one
line two
line three'
```

## Råstrenger

Sett `r` foran for å deaktivere escape-behandling:

```v
s := r'hello\nworld'  // \n beholdes som to tegn
println(s)            // hello\nworld
```

## Strengmetoder

```v
s := 'Hello, World!'

println(s.to_upper())      // HELLO, WORLD!
println(s.to_lower())      // hello, world!
println(s.contains('World'))   // true
println(s.starts_with('Hello')) // true
println(s.ends_with('!'))  // true
println(s.replace('World', 'V')) // Hello, V!
println(s.split(', '))     // ['Hello', 'World!']
println(s.trim_space())    // Hello, World!  (fjerner ledende/etterfølgende mellomrom)
```

## Konvertere til tall

```v
s := '42'
n := s.int()          // 42
f := '3.14'.f64()     // 3.14

assert '0xc3'.int() == 195
assert '0o10'.int() == 8
assert '0b1010'.int() == 10
```

## Runer (Unicode-kodepunkter)

For å arbeide med Unicode-tegn i stedet for rå byte, bruk `runes()`:

```v
mut s := 'hello 🌎'
r := s.runes()
println(r.len)    // 7  (7 Unicode-kodepunkter, ikke 10 byte)
println(r[6])     // 🌎
```

## Strengbygger

For effektiv strengsammenkobling, bruk `strings.Builder`:

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
