# マップ

マップは順不同のキーと値のストアです。すべてのキーは同じ型でなければならず、すべての値も同じ型でなければなりません。

## マップの作成

```v
// マップリテラル
mut scores := {
    'Alice': 10
    'Bob':   20
    'Carol': 30
}

// 空のマップ
mut m := map[string]int{}
```

## 追加と更新

```v
mut m := map[string]int{}
m['x'] = 1
m['y'] = 2
m['x'] = 99   // 既存のキーを更新
println(m)    // {'x': 99, 'y': 2}
```

## 値の読み取り

```v
scores := {'Alice': 10, 'Bob': 20}

println(scores['Alice']) // 10

// `or`ブロックによる安全なルックアップ — キーが存在しない場合のパニックを回避
val := scores['Dave'] or { -1 }
println(val) // -1
```

## キーの確認

```v
m := {'a': 1, 'b': 2}

if 'a' in m {
    println('found a: ${m['a']}')
}

if 'z' !in m {
    println('z is not in the map')
}
```

## キーの削除

```v
mut m := {'a': 1, 'b': 2, 'c': 3}
m.delete('b')
println(m) // {'a': 1, 'c': 3}
```

## イテレーション

```v
m := {'one': 1, 'two': 2, 'three': 3}

for key, val in m {
    println('${key} = ${val}')
}

// キーと値を別々に
for key in m.keys() {
    println(key)
}
```

## マップのサイズ

```v
m := {'a': 1, 'b': 2}
println(m.len) // 2
```

## 使用可能なキー型

マップのキーには、文字列、整数、浮動小数点数、ルーン、または`==`演算子を実装する任意の型を使用できます。

```v
mut m := map[int]string{}
m[1] = 'one'
m[2] = 'two'
println(m[1]) // one
```
