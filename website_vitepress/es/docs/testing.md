# Pruebas

V tiene soporte de pruebas integrado. No se necesita ningún framework de pruebas ni biblioteca externa.

## Escribir Pruebas

Las funciones de prueba deben comenzar con `test_` y estar en archivos que terminen con `_test.v`:

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

Ejecuta las pruebas con:

```bash
v test math_test.v
# o ejecuta todas las pruebas en un directorio:
v test .
```

## Aserciones

Usa `assert` para verificar condiciones. Una aserción fallida imprime los valores de ambos lados:

```v
fn test_string_ops() {
    s := 'Hello, World!'
    assert s.contains('World')
    assert s.to_upper() == 'HELLO, WORLD!'
    assert s.len == 13
}
```

## Configuración y Limpieza de Pruebas

```v
// Usa testsuite_begin y testsuite_end para configuración/limpieza a nivel de módulo
fn testsuite_begin() {
    // se ejecuta una vez antes de todas las pruebas del archivo
    println('Configurando suite de pruebas...')
}

fn testsuite_end() {
    // se ejecuta una vez después de todas las pruebas del archivo
    println('Desmontando suite de pruebas...')
}
```

## Pruebas de Casos de Error

```v
fn safe_divide(a f64, b f64) !f64 {
    if b == 0 {
        return error('división por cero')
    }
    return a / b
}

fn test_divide_by_zero() {
    result := safe_divide(10, 0) or { err.msg() }
    assert result == 'división por cero'
}

fn test_divide_normal() {
    result := safe_divide(10, 2) or { panic(err) }
    assert result == 5.0
}
```

## Ejecutar Pruebas Específicas

```bash
# Ejecutar un solo archivo de prueba
v test mypackage/foo_test.v

# Ejecutar pruebas que coincidan con un patrón
v test -run test_add .

# Ejecutar con salida detallada
v test -v .
```

## Pruebas Basadas en Tabla

V no tiene un ayudante integrado para pruebas basadas en tabla, pero puedes hacerlo manualmente:

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

## Cobertura de Código

Genera un informe de cobertura:

```bash
v -coverage ./coverage_output test .
```
