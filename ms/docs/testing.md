# Pengujian

V mempunyai sokongan ujian terbina dalam. Tiada rangka kerja ujian atau pustaka luaran diperlukan.

## Menulis Ujian

Fungsi ujian mesti bermula dengan `test_` dan berada dalam fail yang berakhir dengan `_test.v`:

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

Jalankan ujian dengan:

```bash
v test math_test.v
# atau jalankan semua ujian dalam direktori:
v test .
```

## Penegasan

Gunakan `assert` untuk memeriksa syarat. Penegasan yang gagal mencetak nilai kedua-dua pihak:

```v
fn test_string_ops() {
    s := 'Hello, World!'
    assert s.contains('World')
    assert s.to_upper() == 'HELLO, WORLD!'
    assert s.len == 13
}
```

## Persediaan dan Pembungkusan Ujian

```v
// Gunakan testsuite_begin dan testsuite_end untuk persediaan/pembungkusan peringkat modul
fn testsuite_begin() {
    // berjalan sekali sebelum semua ujian dalam fail
    println('Menyediakan suite ujian...')
}

fn testsuite_end() {
    // berjalan sekali selepas semua ujian dalam fail
    println('Meruntuhkan suite ujian...')
}
```

## Menguji Kes Ralat

```v
fn safe_divide(a f64, b f64) !f64 {
    if b == 0 {
        return error('bahagi dengan sifar')
    }
    return a / b
}

fn test_divide_by_zero() {
    result := safe_divide(10, 0) or { err.msg() }
    assert result == 'bahagi dengan sifar'
}

fn test_divide_normal() {
    result := safe_divide(10, 2) or { panic(err) }
    assert result == 5.0
}
```

## Menjalankan Ujian Tertentu

```bash
# Jalankan satu fail ujian
v test mypackage/foo_test.v

# Jalankan ujian yang sepadan dengan corak
v test -run test_add .

# Jalankan dengan output verbose
v test -v .
```

## Ujian Berasaskan Jadual

V tidak mempunyai pembantu ujian berasaskan jadual terbina dalam, tetapi anda boleh melakukannya secara manual:

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

## Liputan Kod

Jana laporan liputan:

```bash
v -coverage ./coverage_output test .
```
