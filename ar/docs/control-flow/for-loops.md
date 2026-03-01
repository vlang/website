# حلقات For

تمتلك V كلمةً مفتاحيةً واحدة للتكرار: `for`. وهي تغطي جميع أنماط التكرار.

## حلقة النطاق

التكرار على نطاق نصف مفتوح `start..end` (النهاية غير مشمولة):

```v
for i in 0 .. 5 {
    println(i) // 0 1 2 3 4
}
```

## التكرار على المصفوفات

```v
names := ['Alice', 'Bob', 'Carol']

// value only
for name in names {
    println(name)
}

// index and value
for i, name in names {
    println('${i}: ${name}')
}
```

## التكرار على الخرائط

```v
m := {'a': 1, 'b': 2, 'c': 3}

for key, val in m {
    println('${key} => ${val}')
}
```

## حلقة بأسلوب C الكلاسيكي

```v
for i := 0; i < 10; i++ {
    println(i)
}
```

## حلقة بشرط فقط (مكافئ while)

```v
mut n := 0
for n < 5 {
    println(n)
    n++
}
```

## الحلقة اللانهائية

```v
mut i := 0
for {
    i++
    if i >= 5 { break }
}
```

## `break` و`continue`

```v
for i in 0 .. 10 {
    if i == 3 { continue }  // skip 3
    if i == 7 { break }     // stop at 7
    println(i)
}
```

## الحلقات المُسمَّاة

بالنسبة للحلقات المتداخلة، يمكنك تسمية الحلقات والخروج/الاستمرار من حلقة خارجية:

```v
outer: for i in 0 .. 3 {
    for j in 0 .. 3 {
        if j == 1 {
            continue outer
        }
        println('${i},${j}')
    }
}
```

## مثال الأعداد الأولية

```v
import math { log }

n := 10
sz := int(f64(n) * (log(f64(n)) + log(log(f64(n))))) + 10
mut sieve := []bool{len: sz}

for i := 2; i * i < sz; i++ {
    if !sieve[i] {
        for j := i * i; j < sz; j += i {
            sieve[j] = true
        }
    }
}

mut count := 0
for i := 2; count < n && i < sz; i++ {
    if !sieve[i] {
        println(i)
        count++
    }
}
```
