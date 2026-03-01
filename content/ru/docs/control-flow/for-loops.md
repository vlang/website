# Циклы for

V имеет единственное ключевое слово для циклов: `for`. Оно охватывает все шаблоны итерации.

## Цикл по диапазону

Итерация по полуоткрытому диапазону `start..end` (end не включающий):

```v
for i in 0 .. 5 {
    println(i) // 0 1 2 3 4
}
```

## Итерация по массивам

```v
names := ['Alice', 'Bob', 'Carol']

// только значение
for name in names {
    println(name)
}

// индекс и значение
for i, name in names {
    println('${i}: ${name}')
}
```

## Итерация по словарям

```v
m := {'a': 1, 'b': 2, 'c': 3}

for key, val in m {
    println('${key} => ${val}')
}
```

## Классический цикл в стиле C

```v
for i := 0; i < 10; i++ {
    println(i)
}
```

## Цикл с условием (аналог while)

```v
mut n := 0
for n < 5 {
    println(n)
    n++
}
```

## Бесконечный цикл

```v
mut i := 0
for {
    i++
    if i >= 5 { break }
}
```

## `break` и `continue`

```v
for i in 0 .. 10 {
    if i == 3 { continue }  // пропустить 3
    if i == 7 { break }     // остановиться на 7
    println(i)
}
```

## Метكи циклов

Для вложенных циклов можно помечать цикл и выполнять break/continue во внешнем цикле:

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

## Пример: Иско Простых Чисел

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
