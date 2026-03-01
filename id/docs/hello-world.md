# Hello World

## Program V Pertama Anda

Buat sebuah file bernama `hello.v`:

```v
fn main() {
    println('Hello, World!')
}
```

Jalankan:

```bash
v run hello.v
```

Atau kompilasi dan jalankan secara terpisah:

```bash
v hello.v
./hello
```

## Menghilangkan `fn main()`

Untuk skrip satu file, `fn main()` bersifat opsional:

```v
println('Hello, World!')
```

Ini berguna untuk program kecil dan saat belajar bahasa.

## Menjalankan Beberapa File

Jika proyek Anda memiliki beberapa file `.v` dalam satu folder, jalankan semuanya sekaligus:

```bash
v run .
```

## Komentar

```v
// Ini adalah komentar satu baris.
/*
  Ini adalah komentar multi-baris.
  /* Bisa bersarang. */
*/
```

## Contoh yang Sedikit Lebih Besar

```v
// fibonacci.v — menghitung bilangan Fibonacci hingga peringkat tertentu
const args = arguments()

fn main() {
    if args.len != 2 {
        println('penggunaan: fibonacci [peringkat]')
        return
    }
    stop := args[1].int()
    if stop > 92 {
        println('peringkat harus 92 atau kurang')
        return
    }
    mut a := i64(0)
    mut b := i64(0)
    mut c := i64(1)
    println(a + b + c)
    for _ in 0 .. stop {
        a = b
        b = c
        c = a + b
        println(c)
    }
}
```
