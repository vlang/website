# 字符串

在 V 中，字符串使用 **UTF-8** 编码，默认**不可变**。

## 基本用法

```v
s    := 'hello 🌎'
name := 'Bob'

println(s.len)         // 10  （字节数）
println(name.len)      // 3
println(name[0])       // 66  （u8 — 'B' 的字节值）
println(name[1..3])    // ob  （切片返回字符串）
```

## 字符串插值

使用 `${}` 在字符串中嵌入表达式：

```v
name := 'Alice'
age  := 30
println('Hello, ${name}! You are ${age} years old.')
println('Is adult: ${age >= 18}')
```

## 多行字符串

```v
text := 'line one
line two
line three'
```

## 原始字符串

在字符串前加 `r` 可禁用转义处理：

```v
s := r'hello\nworld'  // \n 保持为两个字符
println(s)            // hello\nworld
```

## 字符串方法

```v
s := 'Hello, World!'

println(s.to_upper())      // HELLO, WORLD!
println(s.to_lower())      // hello, world!
println(s.contains('World'))   // true
println(s.starts_with('Hello')) // true
println(s.ends_with('!'))  // true
println(s.replace('World', 'V')) // Hello, V!
println(s.split(', '))     // ['Hello', 'World!']
println(s.trim_space())    // Hello, World!  （移除首尾空白）
```

## 转换为数字

```v
s := '42'
n := s.int()          // 42
f := '3.14'.f64()     // 3.14

assert '0xc3'.int() == 195
assert '0o10'.int() == 8
assert '0b1010'.int() == 10
```

## Rune（Unicode 码点）

要操作 Unicode 字符而非原始字节，使用 `runes()`：

```v
mut s := 'hello 🌎'
r := s.runes()
println(r.len)    // 7  （7 个 Unicode 码点，而非 10 个字节）
println(r[6])     // 🌎
```

## 字符串构建器

对于高效的字符串拼接，使用 `strings.Builder`：

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
