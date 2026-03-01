# For 循环

V 只有一个循环关键字：`for`。它涵盖所有迭代模式。

## 范围循环

遍历半开区间 `start..end`（不包含 end）：

```v
for i in 0 .. 5 {
    println(i) // 0 1 2 3 4
}
```

## 遍历数组

```v
names := ['Alice', 'Bob', 'Carol']

// 仅值
for name in names {
    println(name)
}

// 索引和值
for i, name in names {
    println('${i}: ${name}')
}
```

## 遍历映射

```v
m := {'a': 1, 'b': 2, 'c': 3}

for key, val in m {
    println('${key} => ${val}')
}
```

## 经典 C 风格循环

```v
for i := 0; i < 10; i++ {
    println(i)
}
```

## 仅条件循环（while 等价形式）

```v
mut n := 0
for n < 5 {
    println(n)
    n++
}
```

## 无限循环

```v
mut i := 0
for {
    i++
    if i >= 5 { break }
}
```

## `break` 和 `continue`

```v
for i in 0 .. 10 {
    if i == 3 { continue }  // 跳过 3
    if i == 7 { break }     // 在 7 处停止
    println(i)
}
```

## 带标签的循环

对于嵌套循环，可以使用标签从外层循环执行 break/continue：

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

## 质数示例

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
