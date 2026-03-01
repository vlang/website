# Proves

V té suport de proves integrat. No cal cap framework de proves ni biblioteca externa.

## Escriure Proves

Les funcions de prova han de començar amb `test_` i estar en fitxers que acabin amb `_test.v`:

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

Executa les proves amb:

```bash
v test math_test.v
# o executa totes les proves d'un directori:
v test .
```

## Assercions

Usa `assert` per verificar condicions. Una asserció fallida imprimeix els valors dels dos costats:

```v
fn test_string_ops() {
    s := 'Hello, World!'
    assert s.contains('World')
    assert s.to_upper() == 'HELLO, WORLD!'
    assert s.len == 13
}
```

## Configuració i Desmuntatge de Proves

```v
// Usa testsuite_begin i testsuite_end per a la configuració/desmuntatge a nivell de mòdul
fn testsuite_begin() {
    // s'executa una vegada abans de totes les proves del fitxer
    println('Setting up test suite...')
}

fn testsuite_end() {
    // s'executa una vegada després de totes les proves del fitxer
    println('Tearing down test suite...')
}
```

## Provar Casos d'Error

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

## Executar Proves Específiques

```bash
# Executa un sol fitxer de proves
v test mypackage/foo_test.v

# Executa proves que coincideixin amb un patró
v test -run test_add .

# Executa amb sortida detallada
v test -v .
```

## Proves Basades en Taules

V no té un auxiliar de proves basat en taules integrat, però es pot fer manualment:

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

## Cobertura de Codi

Genera un informe de cobertura:

```bash
v -coverage ./coverage_output test .
```
