# 数组

## 基本用法

```v
mut nums := [1, 2, 3]
println(nums)        // [1, 2, 3]
println(nums.len)    // 3
println(nums[0])     // 1
nums[1] = 20
println(nums)        // [1, 20, 3]
```

## 类型化数组

数组元素类型会自动推断。也可以用显式类型声明一个空数组：

```v
mut names := []string{}
names << 'Alice'
names << 'Bob'
println(names) // ['Alice', 'Bob']
```

## 预分配数组

```v
// 5 个 int 的数组，全部初始化为 0
a := []int{len: 5}

// 3 个 string 的数组，全部初始化为 'x'
b := []string{len: 3, init: 'x'}
```

## 追加元素

使用 `<<` 追加：

```v
mut a := [1, 2, 3]
a << 4
a << [5, 6]   // 追加另一个数组
println(a)    // [1, 2, 3, 4, 5, 6]
```

## 切片

```v
a := [1, 2, 3, 4, 5]
b := a[1..3]  // [2, 3]  （从索引 1 开始，不包括索引 3）
c := a[..2]   // [1, 2]  （从开头到索引 2）
d := a[3..]   // [4, 5]  （从索引 3 到末尾）
```

## 迭代

```v
names := ['Alice', 'Bob', 'Carol']

for name in names {
    println(name)
}

for i, name in names {
    println('${i}: ${name}')
}
```

## 常用方法

```v
mut a := [3, 1, 4, 1, 5, 9, 2, 6]

println(a.len)          // 8
println(a.contains(5))  // true
println(a.index(4))     // 2

a.sort()
println(a) // [1, 1, 2, 3, 4, 5, 6, 9]

a.reverse()
println(a) // [9, 6, 5, 4, 3, 2, 1, 1]

filtered := a.filter(it > 3)
println(filtered) // [9, 6, 5, 4]

mapped := a.map(it * 2)
println(mapped) // [18, 12, 10, 8, 6, 4, 2, 2]
```

## 多维数组

```v
mut matrix := [][]int{len: 3, init: []int{len: 3}}
matrix[0][0] = 1
matrix[1][1] = 5
matrix[2][2] = 9
println(matrix) // [[1, 0, 0], [0, 5, 0], [0, 0, 9]]
```

## 固定大小数组

```v
mut a := [5]int{}   // 固定大小的 5 个 int 数组
a[0] = 10
println(a)          // [10, 0, 0, 0, 0]
```

固定数组分配在栈上，不可扩展。
