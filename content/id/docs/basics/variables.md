# Variabel

## Deklarasi dan Inisialisasi

Variabel dideklarasikan dan diinisialisasi dengan `:=`. Ini adalah satu-satunya cara mendeklarasikan variabel dalam V — variabel selalu memiliki nilai awal dan tipenya disimpulkan dari sisi kanan.

```v
name := 'Bob'
age := 20
large_number := i64(9999999999)
println(name)
println(age)
println(large_number)
```

## Variabel yang Dapat Diubah

Variabel bersifat **tak dapat diubah secara default**. Gunakan `mut` untuk membuat variabel dapat diubah:

```v
mut age := 20
println(age)
age = 21
println(age)
```

> Jika Anda mencoba mengubah nilai tanpa `mut`, kompiler akan menolak mengompilasi.

## Konversi Tipe

Gunakan `T(value)` untuk mengonversi antar tipe:

```v
x := 42
y := f64(x)  // x dikonversi ke f64
z := u8(x)   // x dikonversi ke u8
```

## Penugasan Ganda

Beberapa variabel dapat diubah atau ditukar dalam satu baris:

```v
mut a := 0
mut b := 1
println('${a}, ${b}') // 0, 1
a, b = b, a
println('${a}, ${b}') // 1, 0
```

## Mengabaikan Nilai

Gunakan `_` untuk membuang nilai kembalian:

```v
fn foo() (int, int) {
    return 2, 3
}

fn main() {
    c, _ := foo()
    println(c)
}
```

## Konvensi Penamaan

Semua nama variabel dan fungsi harus menggunakan `snake_case`. Nama tipe harus menggunakan `PascalCase`. Kompiler menegakkan aturan ini.

## Tidak Ada Variabel Global

V tidak mengizinkan variabel global secara default. Semua variabel harus dideklarasikan di dalam fungsi. Ini menghasilkan kode yang lebih dapat diprediksi dan diuji.

## Tidak Ada Shadowing

Shadowing variabel tidak diizinkan. Mendeklarasikan variabel dengan nama yang sudah digunakan dalam cakupan induk adalah kesalahan kompilasi:

```v
fn main() {
    a := 10
    // a := 20  // ← kesalahan kompilasi: pendefinisian ulang `a`
}
```
