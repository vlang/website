# Array

## Penggunaan Dasar

```v
mut nums := [1, 2, 3]
println(nums)        // [1, 2, 3]
println(nums.len)    // 3
println(nums[0])     // 1
nums[1] = 20
println(nums)        // [1, 20, 3]
```

## Array Bertipe

Tipe elemen array disimpulkan secara otomatis. Anda juga dapat mendeklarasikan array kosong dengan tipe eksplisit:

```v
mut names := []string{}
names << 'Alice'
names << 'Bob'
println(names) // ['Alice', 'Bob']
```

## Array Pre-alokasi

```v
// array berisi 5 int, semua diinisialisasi ke 0
a := []int{len: 5}

// array berisi 3 string, semua diinisialisasi ke 'x'
b := []string{len: 3, init: 'x'}
```

## Menambahkan Elemen

Gunakan `<<` untuk menambahkan:

```v
mut a := [1, 2, 3]
a << 4
a << [5, 6]   // tambahkan array lain
println(a)    // [1, 2, 3, 4, 5, 6]
```

## Pemotongan (Slicing)

```v
a := [1, 2, 3, 4, 5]
b := a[1..3]  // [2, 3]  (dari indeks 1, hingga tapi tidak termasuk 3)
c := a[..2]   // [1, 2]  (dari awal hingga indeks 2)
d := a[3..]   // [4, 5]  (dari indeks 3 hingga akhir)
```

## Iterasi

```v
names := ['Alice', 'Bob', 'Carol']

for name in names {
    println(name)
}

for i, name in names {
    println('${i}: ${name}')
}
```

## Metode Umum

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

## Array Multidimensi

```v
mut matrix := [][]int{len: 3, init: []int{len: 3}}
matrix[0][0] = 1
matrix[1][1] = 5
matrix[2][2] = 9
println(matrix) // [[1, 0, 0], [0, 5, 0], [0, 0, 9]]
```

## Array Berukuran Tetap

```v
mut a := [5]int{}   // array tetap berisi 5 int
a[0] = 10
println(a)          // [10, 0, 0, 0, 0]
```

Array tetap dialokasikan di stack dan tidak dapat diperbesar.
