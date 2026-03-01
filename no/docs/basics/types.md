# Primitive typer

## Heltallstyper

```v
// Fortegnstall
i8    // -128 til 127
i16   // -32 768 til 32 767
int   // -2 147 483 648 til 2 147 483 647  (alltid 32-bit)
i64   // -9 223 372 036 854 775 808 til 9 223 372 036 854 775 807

// Usignerte heltall
u8    // 0 til 255  (brukes også for byte)
u16   // 0 til 65 535
u32   // 0 til 4 294 967 295
u64   // 0 til 18 446 744 073 709 551 615

// Plattformavhengig
isize // fortegn, størrelse på en peker
usize // usignert, størrelse på en peker
```

> **Merk:** I motsetning til C og Go er `int` i V alltid 32-bit uavhengig av plattform.

## Flyttallstyper

```v
f32   // enkel presisjon (32-bit)
f64   // dobbel presisjon (64-bit)
```

## Boolsk

```v
is_ready := true
is_done  := false
```

## Rune

En `rune` repræsenterer et Unicode-kodepunkt:

```v
letter := `A`        // rune-literal bruker gravisaksent
emoji  := `🌎`
println(letter)      // A
println(int(letter)) // 65
```

## Typeopprykk

Små typer promoteres automatisk når de kombineres med større typer på samme side av en operator:

```v
u := u16(12)
v := 13 + u    // v er u16 — ingen opprykk
x := f32(45.6)
y := x + 3.14  // y er f32 — ingen opprykk
a := 75        // int (standard for heltallsliteraler)
b := 14.7      // f64 (standard for flyttallsliteraler)
```

## Tallliteraler

```v
n1 := 1_000_000      // understrek for lesbarhet
n2 := 0xff           // heksadesimal
n3 := 0o77           // oktal
n4 := 0b1111_0000    // binær
f1 := 3.14_159_265   // flyttall med understrek
```

## `voidptr`

En rå peker-type brukt hovedsakelig for C-interoperabilitet. Unngå i ren V-kode.

```v
// mest for C-interop
p := voidptr(0)
```
