# الأنواع الأولية

## أنواع الأعداد الصحيحة

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

> **ملاحظة:** خلافًا لـC وGo، يكون `int` في V دائمًا 32 بت بغض النظر عن المنصة.

## أنواع الأعداد العشرية

```v
f32   // single-precision (32-bit)
f64   // double-precision (64-bit)
```

## القيم المنطقية

```v
is_ready := true
is_done  := false
```

## الرمز (Rune)

يمثِّل `rune` نقطة شيفرة Unicode:

```v
letter := `A`        // rune literal uses backticks
emoji  := `🌎`
println(letter)      // A
println(int(letter)) // 65
```

## ترقيات الأنواع

تُرقَّى الأنواع الصغيرة تلقائيًا عند دمجها مع الأنواع الأكبر على نفس جانب عامل:

```v
u := u16(12)
v := 13 + u    // v is u16 — no promotion
x := f32(45.6)
y := x + 3.14  // y is f32 — no promotion
a := 75        // int (default for integer literals)
b := 14.7      // f64 (default for float literals)
```

## القيم العددية الحرفية

```v
n1 := 1_000_000      // underscores for readability
n2 := 0xff           // hex
n3 := 0o77           // octal
n4 := 0b1111_0000    // binary
f1 := 3.14_159_265   // float with underscores
```

## `voidptr`

نوع مؤشر خام يُستخدم بشكل رئيسي للتفاعل مع C. تجنَّبه في كود V الخالص.

```v
// mostly for C interop
p := voidptr(0)
```
