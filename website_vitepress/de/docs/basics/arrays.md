# Arrays

## Grundlegende Verwendung

```v
mut nums := [1, 2, 3]
println(nums)        // [1, 2, 3]
println(nums.len)    // 3
println(nums[0])     // 1
nums[1] = 20
println(nums)        // [1, 20, 3]
```

## Typisierte Arrays

Array-Elementtypen werden automatisch erkannt. Du kannst auch ein leeres Array mit einem expliziten Typ deklarieren:

```v
mut names := []string{}
names << 'Alice'
names << 'Bob'
println(names) // ['Alice', 'Bob']
```

## Vorab alloziierte Arrays

```v
// Array mit 5 ints, alle mit 0 initialisiert
a := []int{len: 5}

// Array mit 3 strings, alle mit 'x' initialisiert
b := []string{len: 3, init: 'x'}
```

## Elemente anhängen

Verwende `<<` zum Anhängen:

```v
mut a := [1, 2, 3]
a << 4
a << [5, 6]   // ein weiteres Array anhängen
println(a)    // [1, 2, 3, 4, 5, 6]
```

## Slicing

```v
a := [1, 2, 3, 4, 5]
b := a[1..3]  // [2, 3]  (von Index 1 bis ausschließlich Index 3)
c := a[..2]   // [1, 2]  (vom Anfang bis Index 2)
d := a[3..]   // [4, 5]  (von Index 3 bis zum Ende)
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

## Häufige Methoden

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

## Mehrdimensionale Arrays

```v
mut matrix := [][]int{len: 3, init: []int{len: 3}}
matrix[0][0] = 1
matrix[1][1] = 5
matrix[2][2] = 9
println(matrix) // [[1, 0, 0], [0, 5, 0], [0, 0, 9]]
```

## Arrays mit fester Größe

```v
mut a := [5]int{}   // festes Array mit 5 ints
a[0] = 10
println(a)          // [10, 0, 0, 0, 0]
```

Arrays mit fester Größe werden auf dem Stack alloziert und können nicht vergrößert werden.
