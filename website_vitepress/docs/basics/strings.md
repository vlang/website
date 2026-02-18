# Strings

In V, strings are encoded in **UTF-8** and are **immutable** by default.

## Basic Usage

```go
s    := 'hello 🌎'
name := 'Bob'

println(s.len)         // 10  (byte count)
println(name.len)      // 3
println(name[0])       // 66  (u8 — byte value of 'B')
println(name[1..3])    // ob  (slicing returns a string)
```

## String Interpolation

Use `${}` to embed expressions inside strings:

```go
name := 'Alice'
age  := 30
println('Hello, ${name}! You are ${age} years old.')
println('Is adult: ${age >= 18}')
```

## Multiline Strings

```go
text := 'line one
line two
line three'
```

## Raw Strings

Prepend `r` to disable escape processing:

```go
s := r'hello\nworld'  // \n is kept as two characters
println(s)            // hello\nworld
```

## String Methods

```go
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

## Converting to Numbers

```go
s := '42'
n := s.int()          // 42
f := '3.14'.f64()     // 3.14

assert '0xc3'.int() == 195
assert '0o10'.int() == 8
assert '0b1010'.int() == 10
```

## Runes (Unicode Code Points)

To work with Unicode characters rather than raw bytes, use `runes()`:

```go
mut s := 'hello 🌎'
r := s.runes()
println(r.len)    // 7  (7 Unicode code points, not 10 bytes)
println(r[6])     // 🌎
```

## String Builder

For efficient string concatenation, use `strings.Builder`:

```go
import strings

fn main() {
    mut sb := strings.new_builder(64)
    sb.write_string('Hello')
    sb.write_string(', ')
    sb.write_string('World!')
    println(sb.str()) // Hello, World!
}
```
