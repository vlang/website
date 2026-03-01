# الخرائط (Maps)

الخرائط هي مخازن غير مُرتَّبة للمفاتيح والقيم. يجب أن تكون جميع المفاتيح من نفس النوع، وجميع القيم من نفس النوع.

## إنشاء الخرائط

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

## الإضافة والتحديث

```v
mut m := map[string]int{}
m['x'] = 1
m['y'] = 2
m['x'] = 99   // update existing key
println(m)    // {'x': 99, 'y': 2}
```

## قراءة القيم

```v
scores := {'Alice': 10, 'Bob': 20}

println(scores['Alice']) // 10

// safe lookup with `or` block — avoids panicking on missing key
val := scores['Dave'] or { -1 }
println(val) // -1
```

## التحقق من وجود مفتاح

```v
m := {'a': 1, 'b': 2}

if 'a' in m {
    println('found a: ${m['a']}')
}

if 'z' !in m {
    println('z is not in the map')
}
```

## حذف المفاتيح

```v
mut m := {'a': 1, 'b': 2, 'c': 3}
m.delete('b')
println(m) // {'a': 1, 'c': 3}
```

## التكرار

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

## حجم الخريطة

```v
m := {'a': 1, 'b': 2}
println(m.len) // 2
```

## أنواع المفاتيح المسموح بها

يمكن أن تكون مفاتيح الخريطة سلاسل نصية أو أعداد صحيحة أو أعداد عشرية أو رموز (runes) أو أي نوع ينفِّذ عامل `==`.

```v
mut m := map[int]string{}
m[1] = 'one'
m[2] = 'two'
println(m[1]) // one
```
