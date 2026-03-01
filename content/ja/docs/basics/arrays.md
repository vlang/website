# 配列

## 基本的な使い方

```v
mut nums := [1, 2, 3]
println(nums)        // [1, 2, 3]
println(nums.len)    // 3
println(nums[0])     // 1
nums[1] = 20
println(nums)        // [1, 20, 3]
```

## 型付き配列

配列の要素型は推論されます。明示的な型で空の配列を宣言することもできます：

```v
mut names := []string{}
names << 'Alice'
names << 'Bob'
println(names) // ['Alice', 'Bob']
```

## 事前割り当て配列

```v
// 5つのintの配列、すべて0で初期化
a := []int{len: 5}

// 3つのstringの配列、すべて'x'で初期化
b := []string{len: 3, init: 'x'}
```

## 要素の追加

`<<`を使って追加します：

```v
mut a := [1, 2, 3]
a << 4
a << [5, 6]   // 別の配列を追加
println(a)    // [1, 2, 3, 4, 5, 6]
```

## スライシング

```v
a := [1, 2, 3, 4, 5]
b := a[1..3]  // [2, 3]  （インデックス1から3を含まない）
c := a[..2]   // [1, 2]  （先頭からインデックス2まで）
d := a[3..]   // [4, 5]  （インデックス3から末尾まで）
```

## イテレーション

```v
names := ['Alice', 'Bob', 'Carol']

for name in names {
    println(name)
}

for i, name in names {
    println('${i}: ${name}')
}
```

## 主なメソッド

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

## 多次元配列

```v
mut matrix := [][]int{len: 3, init: []int{len: 3}}
matrix[0][0] = 1
matrix[1][1] = 5
matrix[2][2] = 9
println(matrix) // [[1, 0, 0], [0, 5, 0], [0, 0, 9]]
```

## 固定サイズ配列

```v
mut a := [5]int{}   // 5つのintの固定配列
a[0] = 10
println(a)          // [10, 0, 0, 0, 0]
```

固定配列はスタックに割り当てられ、拡張できません。
