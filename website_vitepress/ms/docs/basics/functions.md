# Fungsi

## Sintaks Asas

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

Jenis pulangan dinyatakan **selepas** senarai parameter. Jika fungsi tidak mengembalikan apa-apa, jenis pulangan ditinggalkan.

## Pengangkatan

Fungsi boleh digunakan sebelum dideklarasikan. V mengangkat semua deklarasi, jadi tiada keperluan untuk fail pengepala atau deklarasi hadapan.

## Pelbagai Nilai Pulangan

```v
fn foo() (int, int) {
    return 2, 3
}

a, b := foo()
println(a) // 2
println(b) // 3
c, _ := foo() // abaikan nilai kedua dengan `_`
```

## Keterlihatan

Fungsi adalah **peribadi** secara lalai. Gunakan `pub` untuk mengeksportnya:

```v
pub fn public_function() {
}

fn private_function() {
}
```

## Tiada Lebih Muatan

Fungsi tidak boleh ditindih. Ini memastikan kod tidak samar-samar dan mudah dibaca.

## Kaedah

Fungsi boleh dilampirkan pada jenis:

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

## Fungsi Tertib Tinggi

Fungsi adalah nilai kelas pertama dan boleh dihantar ke fungsi lain:

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

## Fungsi Tanpa Nama

```v
fn main() {
    double := fn (x int) int {
        return x * 2
    }
    println(double(5)) // 10
}
```
