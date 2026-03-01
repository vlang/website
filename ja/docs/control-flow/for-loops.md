# forループ

Vにはループキーワードが`for`一つだけあります。すべてのイテレーションパターンをカバーします。

## 範囲ループ

半開区間`start..end`（endは含まない）でイテレートします：

```v
for i in 0 .. 5 {
    println(i) // 0 1 2 3 4
}
```

## 配列のイテレーション

```v
names := ['Alice', 'Bob', 'Carol']

// 値のみ
for name in names {
    println(name)
}

// インデックスと値
for i, name in names {
    println('${i}: ${name}')
}
```

## マップのイテレーション

```v
m := {'a': 1, 'b': 2, 'c': 3}

for key, val in m {
    println('${key} => ${val}')
}
```

## Cスタイルの古典的ループ

```v
for i := 0; i < 10; i++ {
    println(i)
}
```

## 条件のみのループ（whileに相当）

```v
mut n := 0
for n < 5 {
    println(n)
    n++
}
```

## 無限ループ

```v
mut i := 0
for {
    i++
    if i >= 5 { break }
}
```

## `break`と`continue`

```v
for i in 0 .. 10 {
    if i == 3 { continue }  // 3をスキップ
    if i == 7 { break }     // 7で停止
    println(i)
}
```

## ラベル付きループ

ネストしたループでは、外側のループにラベルを付けてbreak/continueできます：

```v
outer: for i in 0 .. 3 {
    for j in 0 .. 3 {
        if j == 1 {
            continue outer
        }
        println('${i},${j}')
    }
}
```

## 素数の例

```v
import math { log }

n := 10
sz := int(f64(n) * (log(f64(n)) + log(log(f64(n))))) + 10
mut sieve := []bool{len: sz}

for i := 2; i * i < sz; i++ {
    if !sieve[i] {
        for j := i * i; j < sz; j += i {
            sieve[j] = true
        }
    }
}

mut count := 0
for i := 2; count < n && i < sz; i++ {
    if !sieve[i] {
        println(i)
        count++
    }
}
```
