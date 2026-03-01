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

## Arrays Tipados

O tipo dos elementos do array é inferido. Você também pode declarar um array vazio com um tipo explícito:

```v
mut names := []string{}
names << 'Alice'
names << 'Bob'
println(names) // ['Alice', 'Bob']
```

## Arrays Pré-alocados

```v
// array de 5 ints, todos inicializados com 0
a := []int{len: 5}

// array de 3 strings, todos inicializados com 'x'
b := []string{len: 3, init: 'x'}
```

## Adicionando Elementos

Use `<<` para adicionar:

```v
mut a := [1, 2, 3]
a << 4
a << [5, 6]   // append another array
println(a)    // [1, 2, 3, 4, 5, 6]
```

## Fatiamento

```v
a := [1, 2, 3, 4, 5]
b := a[1..3]  // [2, 3]  (do índice 1, até mas não incluindo 3)
c := a[..2]   // [1, 2]  (do início até o índice 2)
d := a[3..]   // [4, 5]  (do índice 3 até o fim)
```

## Iteração

```v
names := ['Alice', 'Bob', 'Carol']

for name in names {
    println(name)
}

for i, name in names {
    println('${i}: ${name}')
}
```

## Métodos Comuns

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

## Arrays Multidimensionais

```v
mut matrix := [][]int{len: 3, init: []int{len: 3}}
matrix[0][0] = 1
matrix[1][1] = 5
matrix[2][2] = 9
println(matrix) // [[1, 0, 0], [0, 5, 0], [0, 0, 9]]
```
