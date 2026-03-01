# Peta

Peta ialah stor nilai kunci yang tidak tersusun. Semua kunci mestilah jenis yang sama, dan semua nilai mestilah jenis yang sama.

## Mencipta Peta

```v
// map literal
mut scores := {
    'Alice': 10
    'Bob':   20
    'Carol': 30
}

// empty map
mut m := map[string]int{}
```

## Menambah dan Mengemas Kini

```v
mut m := map[string]int{}
m['x'] = 1
m['y'] = 2
m['x'] = 99   // kemas kini kunci sedia ada
println(m)    // {'x': 99, 'y': 2}
```

## Membaca Nilai

```v
scores := {'Alice': 10, 'Bob': 20}

println(scores['Alice']) // 10

// carian selamat dengan blok `or` — mengelakkan panik pada kunci hilang
val := scores['Dave'] or { -1 }
println(val) // -1
```

## Menyemak Kunci

```v
m := {'a': 1, 'b': 2}

if 'a' in m {
    println('dijumpai a: ${m["a"]}')
}

if 'z' !in m {
    println('z tidak ada dalam peta')
}
```

## Memadam Kunci

```v
mut m := {'a': 1, 'b': 2, 'c': 3}
m.delete('b')
println(m) // {'a': 1, 'c': 3}
```

## Pengulangan

```v
m := {'one': 1, 'two': 2, 'three': 3}

for key, val in m {
    println('${key} = ${val}')
}

// kunci dan nilai secara berasingan
for key in m.keys() {
    println(key)
}
```

## Saiz Peta

```v
m := {'a': 1, 'b': 2}
println(m.len) // 2
```

## Jenis Kunci yang Dibenarkan

Kunci peta boleh berupa rentetan, integer, titik apung, rune, atau sebarang jenis yang melaksanakan pengendali `==`.

```v
mut m := map[int]string{}
m[1] = 'one'
m[2] = 'two'
println(m[1]) // one
```
