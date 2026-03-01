# Maps (Mapas)

Los maps son almacenes desordenados de clave-valor. Todas las claves deben ser del mismo tipo y todos los valores deben ser del mismo tipo.

## Crear Maps

```v
// literal de map
mut scores := {
    'Alice': 10
    'Bob':   20
    'Carol': 30
}

// map vacío
mut m := map[string]int{}
```

## Agregar y Actualizar

```v
mut m := map[string]int{}
m['x'] = 1
m['y'] = 2
m['x'] = 99   // actualizar clave existente
println(m)    // {'x': 99, 'y': 2}
```

## Leer Valores

```v
scores := {'Alice': 10, 'Bob': 20}

println(scores['Alice']) // 10

// búsqueda segura con bloque `or` — evita pánico por clave faltante
val := scores['Dave'] or { -1 }
println(val) // -1
```

## Verificar una Clave

```v
m := {'a': 1, 'b': 2}

if 'a' in m {
    println('encontrado a: ${m["a"]}')
}

if 'z' !in m {
    println('z no está en el map')
}
```

## Eliminar Claves

```v
mut m := {'a': 1, 'b': 2, 'c': 3}
m.delete('b')
println(m) // {'a': 1, 'c': 3}
```

## Iteración

```v
m := {'one': 1, 'two': 2, 'three': 3}

for key, val in m {
    println('${key} = ${val}')
}

// claves y valores por separado
for key in m.keys() {
    println(key)
}
```

## Tamaño del Map

```v
m := {'a': 1, 'b': 2}
println(m.len) // 2
```

## Tipos de Clave Permitidos

Las claves del map pueden ser cadenas, enteros, flotantes, runas o cualquier tipo que implemente el operador `==`.

```v
mut m := map[int]string{}
m[1] = 'one'
m[2] = 'two'
println(m[1]) // one
```
