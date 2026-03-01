# If / Else

## 基本语法

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

## If 作为表达式

在 V 中，`if` 是一个表达式，可以用在赋值语句的右侧：

```v
num := 7
result := if num % 2 == 0 { 'even' } else { 'odd' }
println(result) // odd
```

## 内联简写

```v
x := 42
if x > 0 { println('positive') }
```

## 带初始化的条件

你可以在 `if` 条件中初始化一个变量：

```v
if val := some_function_returning_option() {
    println('got value: ${val}')
} else {
    println('no value')
}
```

## `in` 操作符

使用 `in` 检查数组或映射中的成员资格：

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

使用 `!in` 进行反向检查：

```v
if 5 !in nums {
    println('5 is not in the array')
}
```

## FizzBuzz 示例

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
