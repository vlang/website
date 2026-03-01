# Tableaux

## Utilisation de base

```v
mut nums := [1, 2, 3]
println(nums)        // [1, 2, 3]
println(nums.len)    // 3
println(nums[0])     // 1
nums[1] = 20
println(nums)        // [1, 20, 3]
```

## Tableaux typés

Les types des éléments d'un tableau sont inférés. Vous pouvez aussi déclarer un tableau vide avec un type explicite :

```v
mut names := []string{}
names << 'Alice'
names << 'Bob'
println(names) // ['Alice', 'Bob']
```

## Tableaux pré-alloués

```v
// tableau de 5 entiers, tous initialisés à 0
a := []int{len: 5}

// tableau de 3 chaînes, toutes initialisées à 'x'
b := []string{len: 3, init: 'x'}
```

## Ajouter des éléments

Utilisez `<<` pour ajouter :

```v
mut a := [1, 2, 3]
a << 4
a << [5, 6]   // ajouter un autre tableau
println(a)    // [1, 2, 3, 4, 5, 6]
```

## Tranches (Slicing)

```v
a := [1, 2, 3, 4, 5]
b := a[1..3]  // [2, 3]  (de l'index 1, jusqu'à mais non inclus 3)
c := a[..2]   // [1, 2]  (du début à l'index 2)
d := a[3..]   // [4, 5]  (de l'index 3 jusqu'à la fin)
```

## Itération

```v
names := ['Alice', 'Bob', 'Carol']

for name in names {
    println(name)
}

for i, name in names {
    println('${i}: ${name}')
}
```

## Méthodes courantes

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

## Tableaux multidimensionnels

```v
mut matrix := [][]int{len: 3, init: []int{len: 3}}
matrix[0][0] = 1
matrix[1][1] = 5
matrix[2][2] = 9
println(matrix) // [[1, 0, 0], [0, 5, 0], [0, 0, 9]]
```

## Tableaux de taille fixe

```v
mut a := [5]int{}   // tableau fixe de 5 entiers
a[0] = 10
println(a)          // [10, 0, 0, 0, 0]
```

Les tableaux fixes sont alloués sur la pile et ne peuvent pas être agrandis.
