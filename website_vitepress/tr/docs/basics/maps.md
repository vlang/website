# Haritalar

Haritalar, sırasız anahtar-değer depolardır. Tüm anahtarlar aynı tipte, tüm değerler de aynı tipte olmalıdır.

## Harita Oluşturma

```v
// harita literali
mut scores := {
    'Alice': 10
    'Bob':   20
    'Carol': 30
}

// boş harita
mut m := map[string]int{}
```

## Ekleme ve Güncelleme

```v
mut m := map[string]int{}
m['x'] = 1
m['y'] = 2
m['x'] = 99   // mevcut anahtarı güncelle
println(m)    // {'x': 99, 'y': 2}
```

## Değerleri Okuma

```v
scores := {'Alice': 10, 'Bob': 20}

println(scores['Alice']) // 10

// `or` bloğu ile güvenli arama — eksik anahtarda panik olmaz
val := scores['Dave'] or { -1 }
println(val) // -1
```

## Anahtar Kontrolü

```v
m := {'a': 1, 'b': 2}

if 'a' in m {
    println('found a: ${m['a']}')
}

if 'z' !in m {
    println('z is not in the map')
}
```

## Anahtar Silme

```v
mut m := {'a': 1, 'b': 2, 'c': 3}
m.delete('b')
println(m) // {'a': 1, 'c': 3}
```

## Yineleme

```v
m := {'one': 1, 'two': 2, 'three': 3}

for key, val in m {
    println('${key} = ${val}')
}

// anahtarlar ve değerler ayrı ayrı
for key in m.keys() {
    println(key)
}
```

## Harita Boyutu

```v
m := {'a': 1, 'b': 2}
println(m.len) // 2
```

## İzin Verilen Anahtar Tipleri

Harita anahtarları string, integer, float, rune veya `==` operatörünü uygulayan herhangi bir tip olabilir.

```v
mut m := map[int]string{}
m[1] = 'one'
m[2] = 'two'
println(m[1]) // one
```
