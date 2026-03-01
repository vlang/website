# السلاسل النصية

في V، السلاسل النصية مُرمَّزة بـ**UTF-8** و**غير قابلة للتغيير** بشكل افتراضي.

## الاستخدام الأساسي

```v
s    := 'hello 🌎'
name := 'Bob'

println(s.len)         // 10  (byte count)
println(name.len)      // 3
println(name[0])       // 66  (u8 — byte value of 'B')
println(name[1..3])    // ob  (slicing returns a string)
```

## التضمين في السلاسل النصية

استخدم `${}` لتضمين التعبيرات داخل السلاسل النصية:

```v
name := 'Alice'
age  := 30
println('Hello, ${name}! You are ${age} years old.')
println('Is adult: ${age >= 18}')
```

## السلاسل النصية متعددة الأسطر

```v
text := 'line one
line two
line three'
```

## السلاسل النصية الخام

أضف `r` قبل السلسلة لتعطيل معالجة الهروب:

```v
s := r'hello\nworld'  // \n is kept as two characters
println(s)            // hello\nworld
```

## دوال السلاسل النصية

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

## التحويل إلى أرقام

```v
s := '42'
n := s.int()          // 42
f := '3.14'.f64()     // 3.14

assert '0xc3'.int() == 195
assert '0o10'.int() == 8
assert '0b1010'.int() == 10
```

## الرموز (Runes - نقاط الشيفرة Unicode)

للعمل مع محارف Unicode بدلاً من البايتات الخام، استخدم `runes()`:

```v
mut s := 'hello 🌎'
r := s.runes()
println(r.len)    // 7  (7 Unicode code points, not 10 bytes)
println(r[6])     // 🌎
```

## منشئ السلاسل النصية

لتسلسل السلاسل النصية بكفاءة، استخدم `strings.Builder`:

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
