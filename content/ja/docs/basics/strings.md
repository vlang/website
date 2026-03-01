# 文字列

Vでは、文字列は**UTF-8**でエンコードされ、デフォルトで**イミュータブル**です。

## 基本的な使い方

```v
s    := 'hello 🌎'
name := 'Bob'

println(s.len)         // 10  （バイト数）
println(name.len)      // 3
println(name[0])       // 66  （u8 — 'B'のバイト値）
println(name[1..3])    // ob  （スライシングは文字列を返す）
```

## 文字列補間

文字列内に式を埋め込むには`${}`を使用します：

```v
name := 'Alice'
age  := 30
println('Hello, ${name}! You are ${age} years old.')
println('Is adult: ${age >= 18}')
```

## 複数行文字列

```v
text := 'line one
line two
line three'
```

## 生文字列

エスケープ処理を無効にするには`r`を先頭に付けます：

```v
s := r'hello\nworld'  // \n は2文字のままです
println(s)            // hello\nworld
```

## 文字列メソッド

```v
s := 'Hello, World!'

println(s.to_upper())      // HELLO, WORLD!
println(s.to_lower())      // hello, world!
println(s.contains('World'))   // true
println(s.starts_with('Hello')) // true
println(s.ends_with('!'))  // true
println(s.replace('World', 'V')) // Hello, V!
println(s.split(', '))     // ['Hello', 'World!']
println(s.trim_space())    // Hello, World!  （先頭/末尾の空白を削除）
```

## 数値への変換

```v
s := '42'
n := s.int()          // 42
f := '3.14'.f64()     // 3.14

assert '0xc3'.int() == 195
assert '0o10'.int() == 8
assert '0b1010'.int() == 10
```

## ルーン（Unicodeコードポイント）

生のバイトではなくUnicode文字を操作するには、`runes()`を使用します：

```v
mut s := 'hello 🌎'
r := s.runes()
println(r.len)    // 7  （7つのUnicodeコードポイント、10バイトではない）
println(r[6])     // 🌎
```

## 文字列ビルダー

効率的な文字列連結には`strings.Builder`を使用します：

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
