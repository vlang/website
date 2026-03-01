# Тестирование

V имеет встроенную поддержку тестирования. Тестовые фреймворки и внешние библиотеки не нужны.

## Написание тестов

Тестовые функции должны начинаться с `test_` и находиться в файлах, оканчивающихся на `_test.v`:

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

Запустите тесты с помощью:

```bash
v test math_test.v
# или запустить все тесты в директории:
v test .
```

## Утверждения

Используйте `assert` для проверки условий. Неудачное утверждение выводит значения обеих сторон:

```v
fn test_string_ops() {
    s := 'Hello, World!'
    assert s.contains('World')
    assert s.to_upper() == 'HELLO, WORLD!'
    assert s.len == 13
}
```

## Подготовка и завершение тестов

```v
// Используйте testsuite_begin и testsuite_end для настройки/завершения на уровне модуля
fn testsuite_begin() {
    // выполняется один раз перед всеми тестами в файле
    println('Setting up test suite...')
}

fn testsuite_end() {
    // выполняется один раз после всех тестов в файле
    println('Tearing down test suite...')
}
```

## Тестирование обработки ошибок

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

## Запуск конкретных тестов

```bash
# Запустить один файл с тестами
v test mypackage/foo_test.v

# Запустить тесты по шаблону
v test -run test_add .

# Запустить с подробным выводом
v test -v .
```

## Табличные тесты

V не имеет встроенного помощника для табличных тестов, но можно сделать это вручную:

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

## Покрытие кода

Сгенерируйте отчёт о покрытии:

```bash
v -coverage ./coverage_output test .
```
