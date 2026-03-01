# Hello World

## Program V Pertama Anda

Cipta fail bernama `hello.v`:

```v
fn main() {
    println('Hello, World!')
}
```

Jalankannya:

```bash
v run hello.v
```

Atau kompil dan jalankan secara berasingan:

```bash
v hello.v
./hello
```

## Melangkau `fn main()`

Untuk skrip fail tunggal, `fn main()` adalah pilihan:

```v
println('Hello, World!')
```

Ini berguna untuk program kecil dan mempelajari bahasa.

## Menjalankan Beberapa Fail

Jika projek anda mempunyai beberapa fail `.v` dalam folder, jalankan semuanya sekaligus:

```bash
v run .
```

## Komen

```v
// Ini ialah komen satu baris.
/*
  Ini ialah komen berbilang baris.
  /* Ia boleh bersarang. */
*/
```

## Contoh yang Sedikit Lebih Besar

```v
// fibonacci.v — kira nombor Fibonacci sehingga pangkat tertentu
const args = arguments()

fn main() {
    if args.len != 2 {
        println('penggunaan: fibonacci [pangkat]')
        return
    }
    stop := args[1].int()
    if stop > 92 {
        println('pangkat mestilah 92 atau kurang')
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
