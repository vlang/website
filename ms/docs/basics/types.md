# Jenis Primitif

## Jenis Integer

```v
// Integer bertanda
i8    // -128 hingga 127
i16   // -32,768 hingga 32,767
int   // -2,147,483,648 hingga 2,147,483,647  (sentiasa 32-bit)
i64   // -9,223,372,036,854,775,808 hingga 9,223,372,036,854,775,807

// Integer tanpa tanda
u8    // 0 hingga 255  (juga digunakan untuk bait)
u16   // 0 hingga 65,535
u32   // 0 hingga 4,294,967,295
u64   // 0 hingga 18,446,744,073,709,551,615

// Bergantung pada platform
isize // bertanda, saiz penunjuk
usize // tanpa tanda, saiz penunjuk
```

> **Nota:** Tidak seperti C dan Go, `int` dalam V sentiasa 32-bit tanpa mengira platform.

## Jenis Titik Apung

```v
f32   // ketepatan tunggal (32-bit)
f64   // ketepatan berganda (64-bit)
```

## Boolean

```v
is_ready := true
is_done  := false
```

## Rune

Sebuah `rune` mewakili titik kod Unicode:

```v
letter := `A`        // literal rune menggunakan petik belakang
emoji  := `🌎`
println(letter)      // A
println(int(letter)) // 65
```

## Promosi Jenis

Jenis kecil dinaikkan secara automatik apabila digabungkan dengan jenis yang lebih besar pada sisi yang sama dalam pengendali:

```v
u := u16(12)
v := 13 + u    // v ialah u16 — tiada promosi
x := f32(45.6)
y := x + 3.14  // y ialah f32 — tiada promosi
a := 75        // int (lalai untuk literal integer)
b := 14.7      // f64 (lalai untuk literal titik apung)
```

## Literal Berangka

```v
n1 := 1_000_000      // garis bawah untuk kebolehbacaan
n2 := 0xff           // heks
n3 := 0o77           // oktal
n4 := 0b1111_0000    // perduaan
f1 := 3.14_159_265   // titik apung dengan garis bawah
```

## `voidptr`

Jenis penunjuk mentah yang digunakan terutamanya untuk kebolehoperasian C. Elakkan dalam kod V tulen.

```v
// kebanyakannya untuk interop C
p := voidptr(0)
```
