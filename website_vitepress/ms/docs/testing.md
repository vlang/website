# Testing

V has built-in testing support. No test framework or external library needed.

## Writing Tests

Test functions must start with `test_` and live in files ending with `_test.v`:

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

Run tests with:

```bash
v test math_test.v
# or run all tests in a directory:
v test .
```

## Assertions

Use `assert` to check conditions. A failing assertion prints the values of both sides:

```v
fn test_string_ops() {
    s := 'Hello, World!'
    assert s.contains('World')
    assert s.to_upper() == 'HELLO, WORLD!'
    assert s.len == 13
}
```

## Test Setup and Teardown

```v
// Use testsuite_begin and testsuite_end for module-level setup/teardown
fn testsuite_begin() {
    // runs once before all tests in the file
    println('Setting up test suite...')
}

fn testsuite_end() {
    // runs once after all tests in the file
    println('Tearing down test suite...')
}
```

## Testing Error Cases

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

## Running Specific Tests

```bash
# Run a single test file
v test mypackage/foo_test.v

# Run tests matching a pattern
v test -run test_add .

# Run with verbose output
v test -v .
```

## Table-driven Tests

V doesn't have a built-in table-driven test helper, but you can do it manually:

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

## Code Coverage

Generate a coverage report:

```bash
v -coverage ./coverage_output test .
```
