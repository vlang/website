# Chaînes de caractères

En V, les chaînes sont encodées en **UTF-8** et sont **immuables** par défaut.

## Utilisation de base

```v
s    := 'hello 🌎'
name := 'Bob'

println(s.len)         // 10  (nombre d'octets)
println(name.len)      // 3
println(name[0])       // 66  (u8 — valeur d'octet de 'B')
println(name[1..3])    // ob  (le slicing retourne une chaîne)
```

## Interpolation de chaînes

Utilisez `${}` pour incorporer des expressions dans les chaînes :

```v
name := 'Alice'
age  := 30
println('Bonjour, ${name} ! Vous avez ${age} ans.')
println('Majeur : ${age >= 18}')
```

## Chaînes multilignes

```v
text := 'ligne un
ligne deux
ligne trois'
```

## Chaînes brutes

Préfixez avec `r` pour désactiver le traitement des séquences d'échappement :

```v
s := r'hello\nworld'  // \n est conservé comme deux caractères
println(s)            // hello\nworld
```

## Méthodes de chaînes

```v
s := 'Hello, World!'

println(s.to_upper())      // HELLO, WORLD!
println(s.to_lower())      // hello, world!
println(s.contains('World'))   // true
println(s.starts_with('Hello')) // true
println(s.ends_with('!'))  // true
println(s.replace('World', 'V')) // Hello, V!
println(s.split(', '))     // ['Hello', 'World!']
println(s.trim_space())    // Hello, World!  (supprime les espaces en début/fin)
```

## Conversion en nombres

```v
s := '42'
n := s.int()          // 42
f := '3.14'.f64()     // 3.14

assert '0xc3'.int() == 195
assert '0o10'.int() == 8
assert '0b1010'.int() == 10
```

## Runes (Points de code Unicode)

Pour travailler avec des caractères Unicode plutôt qu'avec des octets bruts, utilisez `runes()` :

```v
mut s := 'hello 🌎'
r := s.runes()
println(r.len)    // 7  (7 points de code Unicode, pas 10 octets)
println(r[6])     // 🌎
```

## Constructeur de chaînes

Pour une concaténation efficace de chaînes, utilisez `strings.Builder` :

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
