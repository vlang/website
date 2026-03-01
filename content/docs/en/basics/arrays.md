# Arrays

## Basic Usage

```v
mut nums := [1, 2, 3]
println(nums)        // [1, 2, 3]
println(nums.len)    // 3
println(nums[0])     // 1
nums[1] = 20
println(nums)        // [1, 20, 3]
```

## Typed Arrays

Array element types are inferred. You can also declare an empty array with an explicit type:

```v
mut names := []string{}
names << 'Alice'
names << 'Bob'
println(names) // ['Alice', 'Bob']
```

## Pre-allocated Arrays

```v
// array of 5 ints, all initialized to 0
a := []int{len: 5}

// array of 3 strings, all initialized to 'x'
b := []string{len: 3, init: 'x'}
```

## Appending Elements

Use `<<` to append:

```v
mut a := [1, 2, 3]
a << 4
a << [5, 6]   // append another array
println(a)    // [1, 2, 3, 4, 5, 6]
```

## Slicing

```v
a := [1, 2, 3, 4, 5]
b := a[1..3]  // [2, 3]  (from index 1, up to but not including 3)
c := a[..2]   // [1, 2]  (from start to index 2)
d := a[3..]   // [4, 5]  (from index 3 to end)
```

## Iteration

```v
names := ['Alice', 'Bob', 'Carol']

for name in names {
    println(name)
}

for i, name in names {
    println('${i}: ${name}')
}
```

## Common Methods

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

## Multidimensional Arrays

```v
mut matrix := [][]int{len: 3, init: []int{len: 3}}
matrix[0][0] = 1
matrix[1][1] = 5
matrix[2][2] = 9
println(matrix) // [[1, 0, 0], [0, 5, 0], [0, 0, 9]]
```

## Fixed-size Arrays

```v
mut a := [5]int{}   // fixed array of 5 ints
a[0] = 10
println(a)          // [10, 0, 0, 0, 0]
```

Fixed arrays are stack-allocated and cannot be grown.
