# Testing

V har innebygd testestøtte. Ingen testramme eller ekstern pakke nødvendig.

## Skrive tester

Testfunksjoner må starte med `test_` og være i filer som slutter med `_test.v`:

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

Kjør tester med:

```bash
v test math_test.v
# eller kjør alle tester i en mappe:
v test .
```

## Påstander

Bruk `assert` for å sjekke betingelser. En mislykket påstand skriver ut verdiene på begge sider:

```v
fn test_string_ops() {
    s := 'Hello, World!'
    assert s.contains('World')
    assert s.to_upper() == 'HELLO, WORLD!'
    assert s.len == 13
}
```

## Oppsett og nedrigging av tester

```v
// Bruk testsuite_begin og testsuite_end for oppsett/nedrigging på modulnivå
fn testsuite_begin() {
    // kjører én gang før alle tester i filen
    println('Setter opp testpakke...')
}

fn testsuite_end() {
    // kjører én gang etter alle tester i filen
    println('Rydder opp testpakke...')
}
```

## Teste feiltilfeller

```v
fn safe_divide(a f64, b f64) !f64 {
    if b == 0 {
        return error('divisjon med null')
    }
    return a / b
}

fn test_divide_by_zero() {
    result := safe_divide(10, 0) or { err.msg() }
    assert result == 'divisjon med null'
}

fn test_divide_normal() {
    result := safe_divide(10, 2) or { panic(err) }
    assert result == 5.0
}
```

## Kjøre spesifikke tester

```bash
# Kjør en enkelt testfil
v test mypackage/foo_test.v

# Kjør tester som matcher et mønster
v test -run test_add .

# Kjør med detaljert utdata
v test -v .
```

## Tabellbaserte tester

V har ikke en innebygd tabellbasert testhjelper, men du kan gjøre det manuelt:

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

## Kodedekning

Generer en dekningsrapport:

```bash
v -coverage ./coverage_output test .
```
