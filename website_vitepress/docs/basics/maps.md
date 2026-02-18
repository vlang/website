# Maps

Maps are unordered key-value stores. All keys must be of the same type, and all values must be of the same type.

## Creating Maps

```go
// map literal
mut scores := {
    'Alice': 10
    'Bob':   20
    'Carol': 30
}

// empty map
mut m := map[string]int{}
```

## Adding and Updating

```go
mut m := map[string]int{}
m['x'] = 1
m['y'] = 2
m['x'] = 99   // update existing key
println(m)    // {'x': 99, 'y': 2}
```

## Reading Values

```go
scores := {'Alice': 10, 'Bob': 20}

println(scores['Alice']) // 10

// safe lookup with `or` block — avoids panicking on missing key
val := scores['Dave'] or { -1 }
println(val) // -1
```

## Checking for a Key

```go
m := {'a': 1, 'b': 2}

if 'a' in m {
    println('found a: ${m['a']}')
}

if 'z' !in m {
    println('z is not in the map')
}
```

## Deleting Keys

```go
mut m := {'a': 1, 'b': 2, 'c': 3}
m.delete('b')
println(m) // {'a': 1, 'c': 3}
```

## Iterating

```go
m := {'one': 1, 'two': 2, 'three': 3}

for key, val in m {
    println('${key} = ${val}')
}

// keys and values separately
for key in m.keys() {
    println(key)
}
```

## Map Size

```go
m := {'a': 1, 'b': 2}
println(m.len) // 2
```

## Allowed Key Types

Map keys can be strings, integers, floats, runes, or any type that implements the `==` operator.

```go
mut m := map[int]string{}
m[1] = 'one'
m[2] = 'two'
println(m[1]) // one
```
