# 变量

## 声明与初始化

变量用 `:=` 声明并初始化。这是 V 中声明变量的唯一方式——变量始终有初始值，类型从右侧自动推断。

```v
name := 'Bob'
age := 20
large_number := i64(9999999999)
println(name)
println(age)
println(large_number)
```

## 可变变量

变量**默认不可变**。使用 `mut` 使变量可变：

```v
mut age := 20
println(age)
age = 21
println(age)
```

> 如果没有 `mut` 就尝试重新赋值，编译器会拒绝编译。

## 类型转换

使用 `T(value)` 在类型之间转换：

```v
x := 42
y := f64(x)  // x 转换为 f64
z := u8(x)   // x 转换为 u8
```

## 多重赋值

多个变量可以在一行中赋值或交换：

```v
mut a := 0
mut b := 1
println('${a}, ${b}') // 0, 1
a, b = b, a
println('${a}, ${b}') // 1, 0
```

## 忽略值

使用 `_` 丢弃返回值：

```v
fn foo() (int, int) {
    return 2, 3
}

fn main() {
    c, _ := foo()
    println(c)
}
```

## 命名约定

所有变量名和函数名必须使用 `snake_case`。类型名必须使用 `PascalCase`。编译器会强制执行此规则。

## 没有全局变量

V 默认不允许全局变量。所有变量必须在函数内部声明。这使代码更可预测、更易于测试。

## 不允许变量遮蔽

不允许变量遮蔽。在父作用域中已使用的名称再次声明变量是编译错误：

```v
fn main() {
    a := 10
    // a := 20  // ← 编译错误：重定义 `a`
}
```
