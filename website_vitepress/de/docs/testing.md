# Tests

V hat eingebaute Test-Unterstützung. Kein Test-Framework oder externe Bibliothek erforderlich.

## Tests schreiben

Testfunktionen müssen mit `test_` beginnen und in Dateien liegen, die auf `_test.v` enden:

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

Tests ausführen mit:

```bash
v test math_test.v
# oder alle Tests in einem Verzeichnis ausführen:
v test .
```

## Assertions

Verwende `assert`, um Bedingungen zu prüfen. Eine fehlgeschlagene Assertion gibt die Werte beider Seiten aus:

```v
fn test_string_ops() {
    s := 'Hello, World!'
    assert s.contains('World')
    assert s.to_upper() == 'HELLO, WORLD!'
    assert s.len == 13
}
```

## Test-Setup und Teardown

```v
// Verwende testsuite_begin und testsuite_end für Setup/Teardown auf Modulebene
fn testsuite_begin() {
    // wird einmal vor allen Tests in der Datei ausgeführt
    println('Setting up test suite...')
}

fn testsuite_end() {
    // wird einmal nach allen Tests in der Datei ausgeführt
    println('Tearing down test suite...')
}
```

## Fehlerfälle testen

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

## Bestimmte Tests ausführen

```bash
# Eine einzelne Testdatei ausführen
v test mypackage/foo_test.v

# Tests ausführen, die einem Muster entsprechen
v test -run test_add .

# Mit ausführlicher Ausgabe
v test -v .
```

## Tabellengesteuerte Tests

V hat keinen eingebauten Helfer für tabellengesteuerte Tests, aber man kann es manuell umsetzen:

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

## Code-Abdeckung

Einen Abdeckungsbericht erstellen:

```bash
v -coverage ./coverage_output test .
```
