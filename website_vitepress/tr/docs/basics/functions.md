# Fonksiyonlar

## Temel Sözdizimi

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

Dönüş tipi, parametre listesinden **sonra** belirtilir. Fonksiyon hiçbir şey döndürmüyorsa dönüş tipi atlanır.

## Öteleme (Hoisting)

Fonksiyonlar tanımlanmadan önce kullanılabilir. V tüm tanımlamaları ötelediğinden başlık dosyalarına veya ileri tanımlamalara gerek yoktur.

## Birden Fazla Dönüş Değeri

```v
fn foo() (int, int) {
    return 2, 3
}

a, b := foo()
println(a) // 2
println(b) // 3
c, _ := foo() // ikinci değeri `_` ile yoksay
```

## Görünürlük

Fonksiyonlar varsayılan olarak **özeldir**. Dışa aktarmak için `pub` kullanın:

```v
pub fn public_function() {
}

fn private_function() {
}
```

## Aşırı Yükleme Yok

Fonksiyonlar aşırı yüklenemez. Bu, kodu belirsizlikten arındırır ve okunmasını kolaylaştırır.

## Metodlar

Fonksiyonlar tiplere bağlanabilir:

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

## Yüksek Dereceli Fonksiyonlar

Fonksiyonlar birinci sınıf değerlerdir ve diğer fonksiyonlara aktarılabilir:

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

## Anonim Fonksiyonlar

```v
fn main() {
    double := fn (x int) int {
        return x * 2
    }
    println(double(5)) // 10
}
```
