# الاختبار

تمتلك V دعمًا مدمَجًا للاختبار. لا حاجة لإطار اختبار أو مكتبة خارجية.

## كتابة الاختبارات

يجب أن تبدأ دوال الاختبار بـ`test_` وأن تكون في ملفات تنتهي بـ`_test.v`:

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

شغِّل الاختبارات باستخدام:

```bash
v test math_test.v
# or run all tests in a directory:
v test .
```

## التأكيدات

استخدم `assert` للتحقق من الشروط. يقوم التأكيد الفاشل بطباعة قيم الجانبين:

```v
fn test_string_ops() {
    s := 'Hello, World!'
    assert s.contains('World')
    assert s.to_upper() == 'HELLO, WORLD!'
    assert s.len == 13
}
```

## إعداد الاختبار وتفكيكه

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

## اختبار حالات الأخطاء

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

## تشغيل اختبارات محددة

```bash
# Run a single test file
v test mypackage/foo_test.v

# Run tests matching a pattern
v test -run test_add .

# Run with verbose output
v test -v .
```

## الاختبارات المُدارة بجدول

لا تمتلك V مساعدًا مدمَجًا للاختبارات المُدارة بجدول، لكن يمكنك تنفيذها يدويًا:

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

## تغطية الكود

أنشئ تقرير تغطية:

```bash
v -coverage ./coverage_output test .
```
