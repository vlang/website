# Maps

Maps são armazenamentos de chave-valor não ordenados. Todas as chaves devem ser do mesmo tipo, e todos os valores devem ser do mesmo tipo.

## Criando Maps

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

## Adicionando e Atualizando

```v
mut m := map[string]int{}
m['x'] = 1
m['y'] = 2
m['x'] = 99   // update existing key
println(m)    // {'x': 99, 'y': 2}
```

## Lendo Valores

```v
scores := {'Alice': 10, 'Bob': 20}

println(scores['Alice']) // 10

// safe lookup with `or` block — avoids panicking on missing key
val := scores['Dave'] or { -1 }
println(val) // -1
```

## Verificando se uma Chave Existe

```v
m := {'a': 1, 'b': 2}

if 'a' in m {
    println('found a: ${m['a']}')
}

if 'z' !in m {
    println('z is not in the map')
}
```

## Removendo Chaves

```v
mut m := {'a': 1, 'b': 2, 'c': 3}
m.delete('b')
println(m) // {'a': 1, 'c': 3}
```

## Iterando

```v
m := {'one': 1, 'two': 2, 'three': 3}

for key, val in m {
    println('${key} = ${val}')
}

// keys and values separately
for key in m.keys() {
    println(key)
}
```

## Tamanho do Map

```v
m := {'a': 1, 'b': 2}
println(m.len) // 2
```

## Tipos de Chave Permitidos

As chaves de um map podem ser strings, inteiros, floats, runes, ou qualquer tipo que implemente o operador `==`.

```v
mut m := map[int]string{}
m[1] = 'one'
m[2] = 'two'
println(m[1]) // one
```
