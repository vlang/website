# 函数

## 基本语法

```v
fn main() {
    println(add(77, 33))
    println(sub(100, 50))
}

fn add(x int, y int) int {
    return x + y
}

fn sub(x int, y int) int {
    return x - y
}
```

返回类型写在参数列表**之后**。如果函数没有返回值，则省略返回类型。

## 提升

函数可以在声明之前使用。V 会提升所有声明，因此不需要头文件或前向声明。

## 多返回值

```v
fn foo() (int, int) {
    return 2, 3
}

a, b := foo()
println(a) // 2
println(b) // 3
c, _ := foo() // 用 `_` 忽略第二个值
```

## 可见性

函数默认是**私有的**。使用 `pub` 导出：

```v
pub fn public_function() {
}

fn private_function() {
}
```

## 不支持重载

函数不能重载。这使代码无歧义、易于阅读。

## 方法

函数可以附加到类型上：

```v
struct User {
    name string
    age  int
}

fn (u User) can_register() bool {
    return u.age >= 16
}

fn (mut u User) register() {
    println('${u.name} is now registered')
}

fn main() {
    mut u := User{ name: 'Frodo', age: 25 }
    if u.can_register() {
        u.register()
    }
}
```

## 高阶函数

函数是一等值，可以传递给其他函数：

```v
fn apply(arr []int, f fn(int) int) []int {
    mut result := []int{}
    for x in arr {
        result << f(x)
    }
    return result
}

fn double(x int) int {
    return x * 2
}

fn main() {
    nums := [1, 2, 3, 4, 5]
    doubled := apply(nums, double)
    println(doubled) // [2, 4, 6, 8, 10]
}
```

## 匿名函数

```v
fn main() {
    double := fn (x int) int {
        return x * 2
    }
    println(double(5)) // 10
}
```
