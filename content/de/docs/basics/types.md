# Primitive Typen

## Integer-Typen

```v
// Vorzeichenbehaftete Integer
i8    // -128 bis 127
i16   // -32.768 bis 32.767
int   // -2.147.483.648 bis 2.147.483.647  (immer 32-Bit)
i64   // -9.223.372.036.854.775.808 bis 9.223.372.036.854.775.807

// Vorzeichenlose Integer
u8    // 0 bis 255  (auch für Bytes verwendet)
u16   // 0 bis 65.535
u32   // 0 bis 4.294.967.295
u64   // 0 bis 18.446.744.073.709.551.615

// Plattformabhängig
isize // vorzeichenbehaftet, Größe eines Zeigers
usize // vorzeichenlos, Größe eines Zeigers
```

> **Hinweis:** Anders als in C und Go ist `int` in V immer 32-Bit, unabhängig von der Plattform.

## Gleitkomma-Typen

```v
f32   // einfache Genauigkeit (32-Bit)
f64   // doppelte Genauigkeit (64-Bit)
```

## Boolean

```v
is_ready := true
is_done  := false
```

## Rune

Ein `rune` repräsentiert einen Unicode-Codepunkt:

```v
letter := `A`        // Rune-Literal verwendet Backticks
emoji  := `🌎`
println(letter)      // A
println(int(letter)) // 65
```

## Typbeförderungen

Kleine Typen werden automatisch befördert, wenn sie mit größeren Typen auf der gleichen Seite eines Operators kombiniert werden:

```v
u := u16(12)
v := 13 + u    // v ist u16 — keine Beförderung
x := f32(45.6)
y := x + 3.14  // y ist f32 — keine Beförderung
a := 75        // int (Standard für Integer-Literale)
b := 14.7      // f64 (Standard für Float-Literale)
```

## Numerische Literale

```v
n1 := 1_000_000      // Unterstriche zur besseren Lesbarkeit
n2 := 0xff           // hexadezimal
n3 := 0o77           // oktal
n4 := 0b1111_0000    // binär
f1 := 3.14_159_265   // Float mit Unterstrichen
```

## `voidptr`

Ein roher Zeigertyp, der hauptsächlich für C-Interoperabilität verwendet wird. In reinem V-Code vermeiden.

```v
// hauptsächlich für C-Interop
p := voidptr(0)
```
