# Zeichenketten (Strings)

In V sind Strings in **UTF-8** kodiert und standardmäßig **unveränderlich**.

## Grundlegende Verwendung

```v
s    := 'hello 🌎'
name := 'Bob'

println(s.len)         // 10  (Byte-Anzahl)
println(name.len)      // 3
println(name[0])       // 66  (u8 — Byte-Wert von 'B')
println(name[1..3])    // ob  (Slicing gibt einen String zurück)
```

## String-Interpolation

Verwende `${}`, um Ausdrücke in Strings einzubetten:

```v
name := 'Alice'
age  := 30
println('Hello, ${name}! You are ${age} years old.')
println('Is adult: ${age >= 18}')
```

## Mehrzeilige Strings

```v
text := 'line one
line two
line three'
```

## Raw-Strings

Füge `r` voran, um die Escape-Verarbeitung zu deaktivieren:

```v
s := r'hello\nworld'  // \n wird als zwei Zeichen beibehalten
println(s)            // hello\nworld
```

## String-Methoden

```v
s := 'Hello, World!'

println(s.to_upper())      // HELLO, WORLD!
println(s.to_lower())      // hello, world!
println(s.contains('World'))   // true
println(s.starts_with('Hello')) // true
println(s.ends_with('!'))  // true
println(s.replace('World', 'V')) // Hello, V!
println(s.split(', '))     // ['Hello', 'World!']
println(s.trim_space())    // Hello, World!  (entfernt führende/nachfolgende Leerzeichen)
```

## In Zahlen umwandeln

```v
s := '42'
n := s.int()          // 42
f := '3.14'.f64()     // 3.14

assert '0xc3'.int() == 195
assert '0o10'.int() == 8
assert '0b1010'.int() == 10
```

## Runes (Unicode-Codepunkte)

Um mit Unicode-Zeichen statt mit rohen Bytes zu arbeiten, verwende `runes()`:

```v
mut s := 'hello 🌎'
r := s.runes()
println(r.len)    // 7  (7 Unicode-Codepunkte, nicht 10 Bytes)
println(r[6])     // 🌎
```

## String-Builder

Für effiziente String-Verkettung verwende `strings.Builder`:

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
