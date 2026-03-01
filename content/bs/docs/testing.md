# Testiranje

V ima ugrađenu podršku za testiranje. Nije potreban okvir za testiranje niti vanjska biblioteka.

## Pisanje testova

Funkcije testiranja moraju počinjati s `test_` i nalaziti se u datotekama koje završavaju s `_test.v`:

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

Pokrenite testove s:

```bash
v test math_test.v
# ili pokrenite sve testove u direktoriju:
v test .
```

## Tvrdnje (assert)

Koristite `assert` za provjeru uvjeta. Neuspješna tvrdnja ispisuje vrijednosti obje strane:

```v
fn test_string_ops() {
    s := 'Hello, World!'
    assert s.contains('World')
    assert s.to_upper() == 'HELLO, WORLD!'
    assert s.len == 13
}
```

## Postavljanje i rasformiranje testova

```v
// Koristite testsuite_begin i testsuite_end za postavljanje/rasformiranje na razini modula
fn testsuite_begin() {
    // izvršava se jednom prije svih testova u datoteci
    println('Setting up test suite...')
}

fn testsuite_end() {
    // izvršava se jednom nakon svih testova u datoteci
    println('Tearing down test suite...')
}
```

## Testiranje slučajeva grešaka

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

## Pokretanje određenih testova

```bash
# Pokretanje jedne datoteke testova
v test mypackage/foo_test.v

# Pokretanje testova koji odgovaraju uzorku
v test -run test_add .

# Pokretanje s detaljnim ispisom
v test -v .
```

## Testovi vođeni tabelom

V nema ugrađeni pomoćnik za testove vođene tabelom, ali to možete učiniti ručno:

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

## Pokrivenost koda

Generirajte izvještaj o pokrivenosti:

```bash
v -coverage ./coverage_output test .
```
