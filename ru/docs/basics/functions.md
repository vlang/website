# Функции

## Базовый синтаксис

```v
fn main() {
    println(add(77, 33))
    println(sub(100, 50))
}

fn add(x int, y int) int {
    return x + y
}

fn sub(x int, y int) int {
    return x - y
}
```

Тип возвращаемого значения указывается **после** списка параметров. Если функция ничего не возвращает, тип возвращаемого значения опускается.

## Подъём объявлений

Функции можно использовать до их объявления. V поднимает все объявления, поэтому нет необходимости в заголовочных файлах или предварительных объявлениях.

## Несколько возвращаемых значений

```v
fn foo() (int, int) {
    return 2, 3
}

a, b := foo()
println(a) // 2
println(b) // 3
c, _ := foo() // игнорируем второе значение с помощью `_`
```

## Видимость

Функции **приватны** по умолчанию. Используйте `pub` для экспорта:

```v
pub fn public_function() {
}

fn private_function() {
}
```

## Отсутствие перегрузки

Функции нельзя перегружать. Это делает код однозначным и лёгким для чтения.

## Методы

Функции можно прикреплять к типам:

```v
struct User {
    name string
    age  int
}

fn (u User) can_register() bool {
    return u.age >= 16
}

fn (mut u User) register() {
    println('${u.name} is now registered')
}

fn main() {
    mut u := User{ name: 'Frodo', age: 25 }
    if u.can_register() {
        u.register()
    }
}
```

## Функции высшего порядка

Функции являются значениями первого класса и могут передаваться другим функциям:

```v
fn apply(arr []int, f fn(int) int) []int {
    mut result := []int{}
    for x in arr {
        result << f(x)
    }
    return result
}

fn double(x int) int {
    return x * 2
}

fn main() {
    nums := [1, 2, 3, 4, 5]
    doubled := apply(nums, double)
    println(doubled) // [2, 4, 6, 8, 10]
}
```

## Анонимные функции

```v
fn main() {
    double := fn (x int) int {
        return x * 2
    }
    println(double(5)) // 10
}
```
