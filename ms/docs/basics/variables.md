# Pemboleh Ubah

## Pengisytiharan dan Permulaan

Pemboleh ubah diisytiharkan dan dimulakan dengan `:=`. Ini adalah satu-satunya cara untuk mengisytiharkan pemboleh ubah dalam V — ia sentiasa mempunyai nilai awal dan jenisnya disimpulkan dari sebelah kanan.

```v
name := 'Bob'
age := 20
large_number := i64(9999999999)
println(name)
println(age)
println(large_number)
```

## Pemboleh Ubah Boleh Ubah

Pemboleh ubah adalah **tidak boleh diubah secara lalai**. Gunakan `mut` untuk menjadikan pemboleh ubah boleh diubah:

```v
mut age := 20
println(age)
age = 21
println(age)
```

> Jika anda cuba menetapkan semula tanpa `mut`, pengkompil akan menolak untuk mengkompil.

## Penukaran Jenis

Gunakan `T(value)` untuk menukar antara jenis:

```v
x := 42
y := f64(x)  // x ditukar kepada f64
z := u8(x)   // x ditukar kepada u8
```

## Penetapan Berganda

Pelbagai pemboleh ubah boleh ditukar atau ditukar kedudukan dalam satu baris:

```v
mut a := 0
mut b := 1
println('${a}, ${b}') // 0, 1
a, b = b, a
println('${a}, ${b}') // 1, 0
```

## Mengabaikan Nilai

Gunakan `_` untuk membuang nilai pulangan:

```v
fn foo() (int, int) {
    return 2, 3
}

fn main() {
    c, _ := foo()
    println(c)
}
```

## Konvensyen Penamaan

Semua nama pemboleh ubah dan fungsi mestilah menggunakan `snake_case`. Nama jenis mestilah menggunakan `PascalCase`. Pengkompil menguatkuasakannya.

## Tiada Pemboleh Ubah Global

V tidak membenarkan pemboleh ubah global secara lalai. Semua pemboleh ubah mesti diisytiharkan dalam fungsi. Ini menghasilkan kod yang lebih boleh diramal dan diuji.

## Tiada Perlindungan Bayangan

Bayangan pemboleh ubah tidak dibenarkan. Mengisytiharkan pemboleh ubah dengan nama yang sudah digunakan dalam skop induk adalah ralat kompilasi:

```v
fn main() {
    a := 10
    // a := 20  // ← ralat kompilasi: redefinisi `a`
}
```
