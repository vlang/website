# Tipus Primitius

## Tipus Enters

```v
// Enters amb signe
i8    // -128 fins a 127
i16   // -32.768 fins a 32.767
int   // -2.147.483.648 fins a 2.147.483.647  (sempre de 32 bits)
i64   // -9.223.372.036.854.775.808 fins a 9.223.372.036.854.775.807

// Enters sense signe
u8    // 0 fins a 255  (també usat per als bytes)
u16   // 0 fins a 65.535
u32   // 0 fins a 4.294.967.295
u64   // 0 fins a 18.446.744.073.709.551.615

// Dependent de la plataforma
isize // amb signe, mida d'un punter
usize // sense signe, mida d'un punter
```

> **Nota:** A diferència de C i Go, `int` en V sempre és de 32 bits independentment de la plataforma.

## Tipus de Punt Flotant

```v
f32   // single-precision (32-bit)
f64   // double-precision (64-bit)
```

## Booleà

```v
is_ready := true
is_done  := false
```

## Rune

Un `rune` representa un punt de codi Unicode:

```v
letter := `A`        // rune literal uses backticks
emoji  := `🌎`
println(letter)      // A
println(int(letter)) // 65
```

## Promocions de Tipus

Els tipus petits es promocionen automàticament quan es combinen amb tipus més grans al mateix costat d'un operador:

```v
u := u16(12)
v := 13 + u    // v is u16 — no promotion
x := f32(45.6)
y := x + 3.14  // y is f32 — no promotion
a := 75        // int (default for integer literals)
b := 14.7      // f64 (default for float literals)
```

## Literals Numèrics

```v
n1 := 1_000_000      // guions baixos per a llegibilitat
n2 := 0xff           // hexadecimal
n3 := 0o77           // octal
n4 := 0b1111_0000    // binari
f1 := 3.14_159_265   // decimal amb guions baixos
```

## `voidptr`

Un tipus de punter brut usat principalment per a la interoperabilitat amb C. Evita'l en codi V pur.

```v
// principalment per a la interoperabilitat amb C
p := voidptr(0)
```
