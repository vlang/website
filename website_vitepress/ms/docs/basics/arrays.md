# Tatasusunan

## Penggunaan Asas

```v
mut nums := [1, 2, 3]
println(nums)        // [1, 2, 3]
println(nums.len)    // 3
println(nums[0])     // 1
nums[1] = 20
println(nums)        // [1, 20, 3]
```

## Tatasusunan Bertaip

Jenis elemen tatasusunan disimpulkan. Anda juga boleh mengisytiharkan tatasusunan kosong dengan jenis eksplisit:

```v
mut names := []string{}
names << 'Alice'
names << 'Bob'
println(names) // ['Alice', 'Bob']
```

## Tatasusunan Pra-peruntukan

```v
// tatasusunan 5 int, semua bermula 0
a := []int{len: 5}

// tatasusunan 3 rentetan, semua bermula 'x'
b := []string{len: 3, init: 'x'}
```

## Menambah Elemen

Gunakan `<<` untuk menambah:

```v
mut a := [1, 2, 3]
a << 4
a << [5, 6]   // tambahkan tatasusunan lain
println(a)    // [1, 2, 3, 4, 5, 6]
```

## Penghirisan

```v
a := [1, 2, 3, 4, 5]
b := a[1..3]  // [2, 3]  (dari indeks 1, sehingga tetapi tidak termasuk 3)
c := a[..2]   // [1, 2]  (dari mula ke indeks 2)
d := a[3..]   // [4, 5]  (dari indeks 3 ke hujung)
```

## Pengulangan

```v
names := ['Alice', 'Bob', 'Carol']

for name in names {
    println(name)
}

for i, name in names {
    println('${i}: ${name}')
}
```

## Kaedah Biasa

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

## Tatasusunan Pelbagai Dimensi

```v
mut matrix := [][]int{len: 3, init: []int{len: 3}}
matrix[0][0] = 1
matrix[1][1] = 5
matrix[2][2] = 9
println(matrix) // [[1, 0, 0], [0, 5, 0], [0, 0, 9]]
```

## Tatasusunan Bersaiz Tetap

```v
mut a := [5]int{}   // tatasusunan tetap dengan 5 int
a[0] = 10
println(a)          // [10, 0, 0, 0, 0]
```

Tatasusunan tetap diperuntukkan pada tindanan dan tidak boleh dikembangkan.
