# Cadenas (Strings)

En V, las cadenas están codificadas en **UTF-8** y son **inmutables** por defecto.

## Uso Básico

```v
s    := 'hello 🌎'
name := 'Bob'

println(s.len)         // 10  (cantidad de bytes)
println(name.len)      // 3
println(name[0])       // 66  (u8 — valor en bytes de 'B')
println(name[1..3])    // ob  (el slicing devuelve una cadena)
```

## Interpolación de Cadenas

Usa `${}` para incrustar expresiones dentro de cadenas:

```v
name := 'Alice'
age  := 30
println('Hola, ${name}! Tienes ${age} años.')
println('Es adulto: ${age >= 18}')
```

## Cadenas Multilínea

```v
text := 'línea uno
línea dos
línea tres'
```

## Cadenas Crudas (Raw)

Antepón `r` para deshabilitar el procesamiento de secuencias de escape:

```v
s := r'hello\nworld'  // \n se mantiene como dos caracteres
println(s)            // hello\nworld
```

## Métodos de Cadena

```v
s := 'Hello, World!'

println(s.to_upper())      // HELLO, WORLD!
println(s.to_lower())      // hello, world!
println(s.contains('World'))   // true
println(s.starts_with('Hello')) // true
println(s.ends_with('!'))  // true
println(s.replace('World', 'V')) // Hello, V!
println(s.split(', '))     // ['Hello', 'World!']
println(s.trim_space())    // Hello, World!  (elimina espacios en blanco al inicio/final)
```

## Conversión a Números

```v
s := '42'
n := s.int()          // 42
f := '3.14'.f64()     // 3.14

assert '0xc3'.int() == 195
assert '0o10'.int() == 8
assert '0b1010'.int() == 10
```

## Runas (Puntos de Código Unicode)

Para trabajar con caracteres Unicode en lugar de bytes crudos, usa `runes()`:

```v
mut s := 'hello 🌎'
r := s.runes()
println(r.len)    // 7  (7 puntos de código Unicode, no 10 bytes)
println(r[6])     // 🌎
```

## Constructor de Cadenas (String Builder)

Para la concatenación eficiente de cadenas, usa `strings.Builder`:

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
