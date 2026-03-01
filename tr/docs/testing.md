# Test

V'nin yerleşik test desteği vardır. Test çerçevesi veya harici kütüphane gerekmez.

## Test Yazma

Test fonksiyonları `test_` ile başlamalı ve `_test.v` ile biten dosyalarda yer almalıdır:

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

Testleri şu şekilde çalıştırın:

```bash
v test math_test.v
# ya da bir dizindeki tüm testleri çalıştırın:
v test .
```

## Assertion'lar

Koşulları kontrol etmek için `assert` kullanın. Başarısız bir assertion, her iki tarafın değerlerini yazdırır:

```v
fn test_string_ops() {
    s := 'Hello, World!'
    assert s.contains('World')
    assert s.to_upper() == 'HELLO, WORLD!'
    assert s.len == 13
}
```

## Test Kurulumu ve Kaldırma

```v
// Modül düzeyinde kurulum/kaldırma için testsuite_begin ve testsuite_end kullanın
fn testsuite_begin() {
    // dosyadaki tüm testlerden önce bir kez çalışır
    println('Setting up test suite...')
}

fn testsuite_end() {
    // dosyadaki tüm testlerden sonra bir kez çalışır
    println('Tearing down test suite...')
}
```

## Hata Durumlarını Test Etme

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

## Belirli Testleri Çalıştırma

```bash
# Tek bir test dosyasını çalıştır
v test mypackage/foo_test.v

# Bir desenle eşleşen testleri çalıştır
v test -run test_add .

# Ayrıntılı çıktıyla çalıştır
v test -v .
```

## Tablo Tabanlı Testler

V'nin yerleşik tablo tabanlı test yardımcısı yoktur, ancak bunu manuel olarak yapabilirsiniz:

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

## Kod Kapsama

Kapsama raporu oluşturun:

```bash
v -coverage ./coverage_output test .
```
