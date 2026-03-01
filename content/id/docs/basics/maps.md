# Map

Map adalah penyimpanan kunci-nilai yang tidak berurutan. Semua kunci harus bertipe sama, dan semua nilai harus bertipe sama.

## Membuat Map

```v
// literal map
mut scores := {
    'Alice': 10
    'Bob':   20
    'Carol': 30
}

// map kosong
mut m := map[string]int{}
```

## Menambah dan Memperbarui

```v
mut m := map[string]int{}
m['x'] = 1
m['y'] = 2
m['x'] = 99   // perbarui kunci yang sudah ada
println(m)    // {'x': 99, 'y': 2}
```

## Membaca Nilai

```v
scores := {'Alice': 10, 'Bob': 20}

println(scores['Alice']) // 10

// pencarian aman dengan blok `or` — menghindari panic pada kunci yang tidak ada
val := scores['Dave'] or { -1 }
println(val) // -1
```

## Memeriksa Kunci

```v
m := {'a': 1, 'b': 2}

if 'a' in m {
    println('found a: ${m['a']}')
}

if 'z' !in m {
    println('z is not in the map')
}
```

## Menghapus Kunci

```v
mut m := {'a': 1, 'b': 2, 'c': 3}
m.delete('b')
println(m) // {'a': 1, 'c': 3}
```

## Iterasi

```v
m := {'one': 1, 'two': 2, 'three': 3}

for key, val in m {
    println('${key} = ${val}')
}

// kunci dan nilai secara terpisah
for key in m.keys() {
    println(key)
}
```

## Ukuran Map

```v
m := {'a': 1, 'b': 2}
println(m.len) // 2
```

## Tipe Kunci yang Diizinkan

Kunci map dapat berupa string, integer, float, rune, atau tipe apa pun yang mengimplementasikan operator `==`.

```v
mut m := map[int]string{}
m[1] = 'one'
m[2] = 'two'
println(m[1]) // one
```
