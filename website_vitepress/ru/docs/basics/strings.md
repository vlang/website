# Строки

В V строки кодируются в **UTF-8** и **неизменяемы** по умолчанию.

## Базовое использование

```v
s    := 'hello 🌎'
name := 'Bob'

println(s.len)         // 10  (количество байт)
println(name.len)      // 3
println(name[0])       // 66  (u8 — байтовое значение 'B')
println(name[1..3])    // ob  (срез возвращает строку)
```

## Интерполяция строк

Используйте `${}` для вставки выражений внутрь строк:

```v
name := 'Alice'
age  := 30
println('Hello, ${name}! You are ${age} years old.')
println('Is adult: ${age >= 18}')
```

## Многострочные строки

```v
text := 'line one
line two
line three'
```

## Сырые строки

Добавьте `r` перед строкой, чтобы отключить обработку спецсимволов:

```v
s := r'hello\nworld'  // \n остаётся как два символа
println(s)            // hello\nworld
```

## Методы строк

```v
s := 'Hello, World!'

println(s.to_upper())      // HELLO, WORLD!
println(s.to_lower())      // hello, world!
println(s.contains('World'))   // true
println(s.starts_with('Hello')) // true
println(s.ends_with('!'))  // true
println(s.replace('World', 'V')) // Hello, V!
println(s.split(', '))     // ['Hello', 'World!']
println(s.trim_space())    // Hello, World!  (удаляет пробелы в начале и конце)
```

## Преобразование в числа

```v
s := '42'
n := s.int()          // 42
f := '3.14'.f64()     // 3.14

assert '0xc3'.int() == 195
assert '0o10'.int() == 8
assert '0b1010'.int() == 10
```

## Руны (кодовые точки Unicode)

Для работы с символами Unicode, а не с сырыми байтами, используйте `runes()`:

```v
mut s := 'hello 🌎'
r := s.runes()
println(r.len)    // 7  (7 кодовых точек Unicode, не 10 байт)
println(r[6])     // 🌎
```

## Строковый буилдер

Для эффективной конкатенации строк используйте `strings.Builder`:

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
