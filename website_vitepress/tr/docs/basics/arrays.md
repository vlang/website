# Diziler

## Temel Kullanım

```v
mut nums := [1, 2, 3]
println(nums)        // [1, 2, 3]
println(nums.len)    // 3
println(nums[0])     // 1
nums[1] = 20
println(nums)        // [1, 20, 3]
```

## Tipli Diziler

Dizi eleman tipleri çıkarılır. Ayrıca açık bir tipte boş bir dizi de tanımlayabilirsiniz:

```v
mut names := []string{}
names << 'Alice'
names << 'Bob'
println(names) // ['Alice', 'Bob']
```

## Önceden Tahsis Edilmiş Diziler

```v
// 5 int'ten oluşan, hepsi 0'a başlatılmış dizi
a := []int{len: 5}

// 3 string'ten oluşan, hepsi 'x'e başlatılmış dizi
b := []string{len: 3, init: 'x'}
```

## Eleman Ekleme

Eklemek için `<<` kullanın:

```v
mut a := [1, 2, 3]
a << 4
a << [5, 6]   // başka bir dizi ekle
println(a)    // [1, 2, 3, 4, 5, 6]
```

## Dilimleme

```v
a := [1, 2, 3, 4, 5]
b := a[1..3]  // [2, 3]  (1. indeksten başlayarak, 3. dahil değil)
c := a[..2]   // [1, 2]  (baştan 2. indekse kadar)
d := a[3..]   // [4, 5]  (3. indeksten sona kadar)
```

## Yineleme

```v
names := ['Alice', 'Bob', 'Carol']

for name in names {
    println(name)
}

for i, name in names {
    println('${i}: ${name}')
}
```

## Yaygın Metodlar

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

## Çok Boyutlu Diziler

```v
mut matrix := [][]int{len: 3, init: []int{len: 3}}
matrix[0][0] = 1
matrix[1][1] = 5
matrix[2][2] = 9
println(matrix) // [[1, 0, 0], [0, 5, 0], [0, 0, 9]]
```

## Sabit Boyutlu Diziler

```v
mut a := [5]int{}   // 5 int'ten oluşan sabit dizi
a[0] = 10
println(a)          // [10, 0, 0, 0, 0]
```

Sabit diziler yığında tahsis edilir ve büyütülemez.
