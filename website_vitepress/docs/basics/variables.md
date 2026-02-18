# Variables

## Declaration and Initialization

Variables are declared and initialized with `:=`. This is the only way to declare variables in V — they always have an initial value and their type is inferred from the right-hand side.

```go
name := 'Bob'
age := 20
large_number := i64(9999999999)
println(name)
println(age)
println(large_number)
```

## Mutable Variables

Variables are **immutable by default**. Use `mut` to make a variable mutable:

```go
mut age := 20
println(age)
age = 21
println(age)
```

> If you try to reassign without `mut`, the compiler will refuse to compile.

## Type Conversion

Use `T(value)` to convert between types:

```go
x := 42
y := f64(x)  // x converted to f64
z := u8(x)   // x converted to u8
```

## Multiple Assignment

Multiple variables can be changed or swapped in one line:

```go
mut a := 0
mut b := 1
println('${a}, ${b}') // 0, 1
a, b = b, a
println('${a}, ${b}') // 1, 0
```

## Ignoring Values

Use `_` to discard a return value:

```go
fn foo() (int, int) {
    return 2, 3
}

fn main() {
    c, _ := foo()
    println(c)
}
```

## Naming Convention

All variable and function names must use `snake_case`. Type names must use `PascalCase`. The compiler enforces this.

## No Global Variables

V does not allow global variables by default. All variables must be declared inside functions. This leads to more predictable, testable code.

## No Shadowing

Variable shadowing is not allowed. Declaring a variable with a name already used in a parent scope is a compile error:

```go
fn main() {
    a := 10
    // a := 20  // ← compile error: redefinition of `a`
}
```
