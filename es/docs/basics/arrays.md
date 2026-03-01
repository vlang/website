# Arrays

## Uso Básico

```v
mut nums := [1, 2, 3]
println(nums)        // [1, 2, 3]
println(nums.len)    // 3
println(nums[0])     // 1
nums[1] = 20
println(nums)        // [1, 20, 3]
```

## Arrays con Tipos

Los tipos de elementos del array se infieren. También puedes declarar un array vacío con un tipo explícito:

```v
mut names := []string{}
names << 'Alice'
names << 'Bob'
println(names) // ['Alice', 'Bob']
```

## Arrays Pre-asignados

```v
// array de 5 enteros, todos inicializados a 0
a := []int{len: 5}

// array de 3 cadenas, todas inicializadas a 'x'
b := []string{len: 3, init: 'x'}
```

## Agregar Elementos

Usa `<<` para agregar:

```v
mut a := [1, 2, 3]
a << 4
a << [5, 6]   // agregar otro array
println(a)    // [1, 2, 3, 4, 5, 6]
```

## Slicing (Segmentación)

```v
a := [1, 2, 3, 4, 5]
b := a[1..3]  // [2, 3]  (desde el índice 1, hasta el 3 sin incluirlo)
c := a[..2]   // [1, 2]  (desde el inicio hasta el índice 2)
d := a[3..]   // [4, 5]  (desde el índice 3 hasta el final)
```

## Iteración

```v
names := ['Alice', 'Bob', 'Carol']

for name in names {
    println(name)
}

for i, name in names {
    println('${i}: ${name}')
}
```

## Métodos Comunes

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

## Arrays Multidimensionales

```v
mut matrix := [][]int{len: 3, init: []int{len: 3}}
matrix[0][0] = 1
matrix[1][1] = 5
matrix[2][2] = 9
println(matrix) // [[1, 0, 0], [0, 5, 0], [0, 0, 9]]
```

## Arrays de Tamaño Fijo

```v
mut a := [5]int{}   // array fijo de 5 enteros
a[0] = 10
println(a)          // [10, 0, 0, 0, 0]
```

Los arrays fijos se asignan en la pila y no pueden crecer.
