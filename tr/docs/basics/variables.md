# Değişkenler

## Tanımlama ve Başlatma

Değişkenler `:=` ile tanımlanır ve başlatılır. V'de değişken tanımlamanın tek yolu budur — değişkenler her zaman bir başlangıç değerine sahiptir ve tipleri sağ taraftan çıkarılır.

```v
name := 'Bob'
age := 20
large_number := i64(9999999999)
println(name)
println(age)
println(large_number)
```

## Değiştirilebilir Değişkenler

Değişkenler **varsayılan olarak değişmezdir**. Değiştirilebilir yapmak için `mut` kullanın:

```v
mut age := 20
println(age)
age = 21
println(age)
```

> `mut` olmadan yeniden atama yapmaya çalışırsanız, derleyici derlemeyi reddeder.

## Tip Dönüşümü

Tipler arasında dönüşüm yapmak için `T(value)` kullanın:

```v
x := 42
y := f64(x)  // x, f64'e dönüştürüldü
z := u8(x)   // x, u8'e dönüştürüldü
```

## Çoklu Atama

Birden fazla değişken tek satırda değiştirilebilir veya takas edilebilir:

```v
mut a := 0
mut b := 1
println('${a}, ${b}') // 0, 1
a, b = b, a
println('${a}, ${b}') // 1, 0
```

## Değerleri Yoksaymak

Bir dönüş değerini atmak için `_` kullanın:

```v
fn foo() (int, int) {
    return 2, 3
}

fn main() {
    c, _ := foo()
    println(c)
}
```

## İsimlendirme Kuralı

Tüm değişken ve fonksiyon adları `snake_case` kullanmalıdır. Tip adları `PascalCase` kullanmalıdır. Derleyici bunu zorlar.

## Global Değişken Yok

V, varsayılan olarak global değişkenlere izin vermez. Tüm değişkenler fonksiyonların içinde tanımlanmalıdır. Bu, daha öngörülü ve test edilebilir kod sağlar.

## Gölgeleme Yok

Değişken gölgelemeye izin verilmez. Bir üst kapsamda zaten kullanılan bir adla değişken tanımlamak derleme hatasıdır:

```v
fn main() {
    a := 10
    // a := 20  // ← derleme hatası: `a`'nın yeniden tanımlanması
}
```
