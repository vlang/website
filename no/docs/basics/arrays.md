# Matriser

## Grunnleggende bruk

```v
mut nums := [1, 2, 3]
println(nums)        // [1, 2, 3]
println(nums.len)    // 3
println(nums[0])     // 1
nums[1] = 20
println(nums)        // [1, 20, 3]
```

## Typede matriser

matriseelementer utledes automatisk. Du kan også deklarere en tom matrise med en eksplisitt type:

```v
mut names := []string{}
names << 'Alice'
names << 'Bob'
println(names) // ['Alice', 'Bob']
```

## Forhåndsallokerte matriser

```v
// matrise med 5 heltall, alle initialisert til 0
a := []int{len: 5}

// matrise med 3 strenger, alle initialisert til 'x'
b := []string{len: 3, init: 'x'}
```

## Legge til elementer

Bruk `<<` for å legge til:

```v
mut a := [1, 2, 3]
a << 4
a << [5, 6]   // legg til en annen matrise
println(a)    // [1, 2, 3, 4, 5, 6]
```

## Slicing

```v
a := [1, 2, 3, 4, 5]
b := a[1..3]  // [2, 3]  (fra indeks 1, opp til men ikke inkludert 3)
c := a[..2]   // [1, 2]  (fra start til indeks 2)
d := a[3..]   // [4, 5]  (fra indeks 3 til slutten)
```

## Iterasjon

```v
names := ['Alice', 'Bob', 'Carol']

for name in names {
    println(name)
}

for i, name in names {
    println('${i}: ${name}')
}
```

## Vanlige metoder

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

## Flerdimensjonale matriser

```v
mut matrix := [][]int{len: 3, init: []int{len: 3}}
matrix[0][0] = 1
matrix[1][1] = 5
matrix[2][2] = 9
println(matrix) // [[1, 0, 0], [0, 5, 0], [0, 0, 9]]
```

## Matriser med fast størrelse

```v
mut a := [5]int{}   // fast matrise med 5 heltall
a[0] = 10
println(a)          // [10, 0, 0, 0, 0]
```

Faste matriser er stakk-allokert og kan ikke vokse.
