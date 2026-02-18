# Functions

## Basic Syntax

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

The return type is specified **after** the parameter list. If the function returns nothing, the return type is omitted.

## Hoisting

Functions can be used before they are declared. V hoists all declarations, so there is no need for header files or forward declarations.

## Multiple Return Values

```v
fn foo() (int, int) {
    return 2, 3
}

a, b := foo()
println(a) // 2
println(b) // 3
c, _ := foo() // ignore the second value with `_`
```

## Visibility

Functions are **private** by default. Use `pub` to export them:

```v
pub fn public_function() {
}

fn private_function() {
}
```

## No Overloading

Functions cannot be overloaded. This keeps the code unambiguous and easy to read.

## Methods

Functions can be attached to types:

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

## High-Order Functions

Functions are first-class values and can be passed to other functions:

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

## Anonymous Functions

```v
fn main() {
    double := fn (x int) int {
        return x * 2
    }
    println(double(5)) // 10
}
```
