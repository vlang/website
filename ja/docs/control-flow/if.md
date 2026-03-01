# If / Else

## 基本構文

```v
a := 10

if a < 10 {
    println('less than 10')
} else if a == 10 {
    println('exactly 10')
} else {
    println('greater than 10')
}
```

## 式としてのif

Vでは、`if`は式であり、代入の右辺に使用できます：

```v
num := 7
result := if num % 2 == 0 { 'even' } else { 'odd' }
println(result) // odd
```

## インラインの短縮形

```v
x := 42
if x > 0 { println('positive') }
```

## 初期化付き条件

`if`条件の中で変数を初期化できます：

```v
if val := some_function_returning_option() {
    println('got value: ${val}')
} else {
    println('no value')
}
```

## `in`演算子

`in`を使用して配列またはマップのメンバーシップを確認します：

```v
nums := [1, 2, 3]
if 2 in nums {
    println('found 2')
}

m := {'a': 1, 'b': 2}
if 'a' in m {
    println('key exists')
}
```

逆の場合は`!in`を使用します：

```v
if 5 !in nums {
    println('5 is not in the array')
}
```

## FizzBuzzの例

```v
for n in 1 .. 101 {
    println(match true {
        n % 15 == 0 { 'FizzBuzz' }
        n % 5 == 0  { 'Buzz' }
        n % 3 == 0  { 'Fizz' }
        else        { n.str() }
    })
}
```
