# Nizovi

## Osnovna upotreba

```v
mut nums := [1, 2, 3]
println(nums)        // [1, 2, 3]
println(nums.len)    // 3
println(nums[0])     // 1
nums[1] = 20
println(nums)        // [1, 20, 3]
```

## Tipizirani nizovi

Tipovi elemenata niza se automatski određuju. Možete i deklarirati prazan niz s eksplicitnim tipom:

```v
mut names := []string{}
names << 'Alice'
names << 'Bob'
println(names) // ['Alice', 'Bob']
```

## Unaprijed alocirani nizovi

```v
// niz od 5 integera, svi inicijalizirani na 0
a := []int{len: 5}

// niz od 3 stringa, svi inicijalizirani na 'x'
b := []string{len: 3, init: 'x'}
```

## Dodavanje elemenata

Koristite `<<` za dodavanje:

```v
mut a := [1, 2, 3]
a << 4
a << [5, 6]   // dodaj još jedan niz
println(a)    // [1, 2, 3, 4, 5, 6]
```

## Rezanje (Slicing)

```v
a := [1, 2, 3, 4, 5]
b := a[1..3]  // [2, 3]  (od indeksa 1, do ali ne uključujući 3)
c := a[..2]   // [1, 2]  (od početka do indeksa 2)
d := a[3..]   // [4, 5]  (od indeksa 3 do kraja)
```

## Iteracija

```v
names := ['Alice', 'Bob', 'Carol']

for name in names {
    println(name)
}

for i, name in names {
    println('${i}: ${name}')
}
```

## Uobičajene metode

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

## Višedimenzionalni nizovi

```v
mut matrix := [][]int{len: 3, init: []int{len: 3}}
matrix[0][0] = 1
matrix[1][1] = 5
matrix[2][2] = 9
println(matrix) // [[1, 0, 0], [0, 5, 0], [0, 0, 9]]
```

## Nizovi fiksne veličine

```v
mut a := [5]int{}   // fiksni niz od 5 integera
a[0] = 10
println(a)          // [10, 0, 0, 0, 0]
```

Nizovi fiksne veličine se alociraju na stogu i ne mogu rasti.
