# Cadenes

En V, les cadenes estan codificades en **UTF-8** i són **immutables** per defecte.

## Ús Bàsic

```v
s    := 'hello 🌎'
name := 'Bob'

println(s.len)         // 10  (nombre de bytes)
println(name.len)      // 3
println(name[0])       // 66  (u8 — valor de byte de 'B')
println(name[1..3])    // ob  (el tall retorna una cadena)
```

## Interpolació de Cadenes

Usa `${}` per inserir expressions dins de cadenes:

```v
name := 'Alice'
age  := 30
println('Hello, ${name}! You are ${age} years old.')
println('Is adult: ${age >= 18}')
```

## Cadenes Multilínia

```v
text := 'line one
line two
line three'
```

## Cadenes Crues

Afegeix `r` al principi per desactivar el processament d'escape:

```v
s := r'hello\nworld'  // \n is kept as two characters
println(s)            // hello\nworld
```

## Mètodes de Cadenes

```v
s := 'Hello, World!'

println(s.to_upper())      // HELLO, WORLD!
println(s.to_lower())      // hello, world!
println(s.contains('World'))   // true
println(s.starts_with('Hello')) // true
println(s.ends_with('!'))  // true
println(s.replace('World', 'V')) // Hello, V!
println(s.split(', '))     // ['Hello', 'World!']
println(s.trim_space())    // Hello, World!  (removes leading/trailing whitespace)
```

## Conversió a Nombres

```v
s := '42'
n := s.int()          // 42
f := '3.14'.f64()     // 3.14

assert '0xc3'.int() == 195
assert '0o10'.int() == 8
assert '0b1010'.int() == 10
```

## Runes (Punts de Codi Unicode)

Per treballar amb caràcters Unicode en lloc de bytes bruts, usa `runes()`:

```v
mut s := 'hello 🌎'
r := s.runes()
println(r.len)    // 7  (7 punts de codi Unicode, no 10 bytes)
println(r[6])     // 🌎
```

## Constructor de Cadenes

Per a la concatenació eficient de cadenes, usa `strings.Builder`:

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
