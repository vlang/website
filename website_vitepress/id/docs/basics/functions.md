# Fungsi

## Sintaks Dasar

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

Tipe kembalian ditentukan **setelah** daftar parameter. Jika fungsi tidak mengembalikan nilai, tipe kembalian dihilangkan.

## Hoisting

Fungsi dapat digunakan sebelum dideklarasikan. V mengangkat semua deklarasi sehingga tidak diperlukan file header atau deklarasi maju.

## Beberapa Nilai Kembalian

```v
fn foo() (int, int) {
    return 2, 3
}

a, b := foo()
println(a) // 2
println(b) // 3
c, _ := foo() // abaikan nilai kedua dengan `_`
```

## Visibilitas

Fungsi bersifat **privat secara default**. Gunakan `pub` untuk mengekspornya:

```v
pub fn public_function() {
}

fn private_function() {
}
```

## Tidak Ada Overloading

Fungsi tidak dapat di-overload. Ini membuat kode tetap tidak ambigu dan mudah dibaca.

## Metode

Fungsi dapat dilampirkan ke tipe:

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

## Fungsi Tingkat Tinggi

Fungsi adalah nilai kelas satu dan dapat diteruskan ke fungsi lain:

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

## Fungsi Anonim

```v
fn main() {
    double := fn (x int) int {
        return x * 2
    }
    println(double(5)) // 10
}
```
