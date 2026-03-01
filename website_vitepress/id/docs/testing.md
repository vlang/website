# Pengujian

V memiliki dukungan pengujian bawaan. Tidak diperlukan framework pengujian atau pustaka eksternal.

## Menulis Pengujian

Fungsi pengujian harus dimulai dengan `test_` dan berada dalam file yang diakhiri dengan `_test.v`:

```v
// math_test.v

fn add(a int, b int) int {
    return a + b
}

fn test_add() {
    assert add(2, 3) == 5
    assert add(0, 0) == 0
    assert add(-1, 1) == 0
}

fn test_add_large_numbers() {
    assert add(1_000_000, 2_000_000) == 3_000_000
}
```

Jalankan pengujian dengan:

```bash
v test math_test.v
# atau jalankan semua pengujian dalam direktori:
v test .
```

## Assertion

Gunakan `assert` untuk memeriksa kondisi. Assertion yang gagal mencetak nilai dari kedua sisi:

```v
fn test_string_ops() {
    s := 'Hello, World!'
    assert s.contains('World')
    assert s.to_upper() == 'HELLO, WORLD!'
    assert s.len == 13
}
```

## Setup dan Teardown Pengujian

```v
// Gunakan testsuite_begin dan testsuite_end untuk setup/teardown tingkat modul
fn testsuite_begin() {
    // dijalankan sekali sebelum semua pengujian dalam file
    println('Setting up test suite...')
}

fn testsuite_end() {
    // dijalankan sekali setelah semua pengujian dalam file
    println('Tearing down test suite...')
}
```

## Menguji Kasus Error

```v
fn safe_divide(a f64, b f64) !f64 {
    if b == 0 {
        return error('division by zero')
    }
    return a / b
}

fn test_divide_by_zero() {
    result := safe_divide(10, 0) or { err.msg() }
    assert result == 'division by zero'
}

fn test_divide_normal() {
    result := safe_divide(10, 2) or { panic(err) }
    assert result == 5.0
}
```

## Menjalankan Pengujian Tertentu

```bash
# Jalankan satu file pengujian
v test mypackage/foo_test.v

# Jalankan pengujian yang cocok dengan pola
v test -run test_add .

# Jalankan dengan output verbose
v test -v .
```

## Pengujian Berbasis Tabel

V tidak memiliki helper pengujian berbasis tabel bawaan, namun Anda bisa melakukannya secara manual:

```v
fn test_add_table() {
    cases := [
        [2, 3, 5],
        [0, 0, 0],
        [-1, 1, 0],
        [100, 200, 300],
    ]
    for c in cases {
        assert add(c[0], c[1]) == c[2]
    }
}
```

## Cakupan Kode

Buat laporan cakupan kode:

```bash
v -coverage ./coverage_output test .
```
