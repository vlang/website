# Arrays

## Ús Bàsic

```v
mut nums := [1, 2, 3]
println(nums)        // [1, 2, 3]
println(nums.len)    // 3
println(nums[0])     // 1
nums[1] = 20
println(nums)        // [1, 20, 3]
```

## Arrays Tipats

Els tipus dels elements dels arrays s'infereixen automàticament. També pots declarar un array buit amb un tipus explícit:

```v
mut names := []string{}
names << 'Alice'
names << 'Bob'
println(names) // ['Alice', 'Bob']
```

## Arrays Preasignats

```v
// array de 5 enters, tots inicialitzats a 0
a := []int{len: 5}

// array de 3 cadenes, totes inicialitzades a 'x'
b := []string{len: 3, init: 'x'}
```

## Afegir Elements

Usa `<<` per afegir:

```v
mut a := [1, 2, 3]
a << 4
a << [5, 6]   // afegeix un altre array
println(a)    // [1, 2, 3, 4, 5, 6]
```

## Tallat

```v
a := [1, 2, 3, 4, 5]
b := a[1..3]  // [2, 3]  (des de l'índex 1, fins a però sense incloure el 3)
c := a[..2]   // [1, 2]  (des del principi fins a l'índex 2)
d := a[3..]   // [4, 5]  (des de l'índex 3 fins al final)
```

## Iteració

```v
names := ['Alice', 'Bob', 'Carol']

for name in names {
    println(name)
}

for i, name in names {
    println('${i}: ${name}')
}
```

## Mètodes Comuns

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

## Arrays Multidimensionals

```v
mut matrix := [][]int{len: 3, init: []int{len: 3}}
matrix[0][0] = 1
matrix[1][1] = 5
matrix[2][2] = 9
println(matrix) // [[1, 0, 0], [0, 5, 0], [0, 0, 9]]
```

## Arrays de Mida Fixa

```v
mut a := [5]int{}   // array de mida fixa de 5 enters
a[0] = 10
println(a)          // [10, 0, 0, 0, 0]
```

Els arrays de mida fixa s'assignen a la pila i no es poden ampliar.
