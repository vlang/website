# 映射（Map）

映射是无序的键值存储。所有键必须是同一类型，所有值也必须是同一类型。

## 创建映射

```v
// 映射字面量
mut scores := {
    'Alice': 10
    'Bob':   20
    'Carol': 30
}

// 空映射
mut m := map[string]int{}
```

## 添加和更新

```v
mut m := map[string]int{}
m['x'] = 1
m['y'] = 2
m['x'] = 99   // 更新已存在的键
println(m)    // {'x': 99, 'y': 2}
```

## 读取值

```v
scores := {'Alice': 10, 'Bob': 20}

println(scores['Alice']) // 10

// 使用 `or` 块安全查找——避免对缺失键发生 panic
val := scores['Dave'] or { -1 }
println(val) // -1
```

## 检查键是否存在

```v
m := {'a': 1, 'b': 2}

if 'a' in m {
    println('found a: ${m['a']}')
}

if 'z' !in m {
    println('z is not in the map')
}
```

## 删除键

```v
mut m := {'a': 1, 'b': 2, 'c': 3}
m.delete('b')
println(m) // {'a': 1, 'c': 3}
```

## 迭代

```v
m := {'one': 1, 'two': 2, 'three': 3}

for key, val in m {
    println('${key} = ${val}')
}

// 分别获取键和值
for key in m.keys() {
    println(key)
}
```

## 映射大小

```v
m := {'a': 1, 'b': 2}
println(m.len) // 2
```

## 允许的键类型

映射的键可以是字符串、整数、浮点数、rune，或任何实现了 `==` 运算符的类型。

```v
mut m := map[int]string{}
m[1] = 'one'
m[2] = 'two'
println(m[1]) // one
```
