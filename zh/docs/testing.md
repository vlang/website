# 测试

V 内置了测试支持，无需测试框架或外部库。

## 编写测试

测试函数必须以 `test_` 开头，并放在以 `_test.v` 结尾的文件中：

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

使用以下命令运行测试：

```bash
v test math_test.v
# 或运行目录下所有测试：
v test .
```

## 断言

使用 `assert` 检查条件。断言失败时会打印两侧的值：

```v
fn test_string_ops() {
    s := 'Hello, World!'
    assert s.contains('World')
    assert s.to_upper() == 'HELLO, WORLD!'
    assert s.len == 13
}
```

## 测试的 Setup 和 Teardown

```v
// 使用 testsuite_begin 和 testsuite_end 进行模块级别的 setup/teardown
fn testsuite_begin() {
    // 在文件中所有测试之前运行一次
    println('Setting up test suite...')
}

fn testsuite_end() {
    // 在文件中所有测试之后运行一次
    println('Tearing down test suite...')
}
```

## 测试错误场景

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

## 运行特定测试

```bash
# 运行单个测试文件
v test mypackage/foo_test.v

# 运行匹配模式的测试
v test -run test_add .

# 带详细输出运行
v test -v .
```

## 表驱动测试

V 没有内置的表驱动测试辅助工具，但可以手动实现：

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

## 代码覆盖率

生成覆盖率报告：

```bash
v -coverage ./coverage_output test .
```
