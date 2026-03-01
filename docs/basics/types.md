# Primitive Types

## Integer Types

```v
// Signed integers
i8    // -128 to 127
i16   // -32,768 to 32,767
int   // -2,147,483,648 to 2,147,483,647  (always 32-bit)
i64   // -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807

// Unsigned integers
u8    // 0 to 255  (also used for bytes)
u16   // 0 to 65,535
u32   // 0 to 4,294,967,295
u64   // 0 to 18,446,744,073,709,551,615

// Platform-dependent
isize // signed, size of a pointer
usize // unsigned, size of a pointer
```

> **Note:** Unlike C and Go, `int` in V is always 32-bit regardless of platform.

## Floating-Point Types

```v
f32   // single-precision (32-bit)
f64   // double-precision (64-bit)
```

## Boolean

```v
is_ready := true
is_done  := false
```

## Rune

A `rune` represents a Unicode code point:

```v
letter := `A`        // rune literal uses backticks
emoji  := `🌎`
println(letter)      // A
println(int(letter)) // 65
```

## Type Promotions

Small types are automatically promoted when combined with larger types on the same side of an operator:

```v
u := u16(12)
v := 13 + u    // v is u16 — no promotion
x := f32(45.6)
y := x + 3.14  // y is f32 — no promotion
a := 75        // int (default for integer literals)
b := 14.7      // f64 (default for float literals)
```

## Numeric Literals

```v
n1 := 1_000_000      // underscores for readability
n2 := 0xff           // hex
n3 := 0o77           // octal
n4 := 0b1111_0000    // binary
f1 := 3.14_159_265   // float with underscores
```

## `voidptr`

A raw pointer type used mainly for C interoperability. Avoid in pure V code.

```v
// mostly for C interop
p := voidptr(0)
```
