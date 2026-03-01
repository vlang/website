# Tipe Primitif

## Tipe Integer

```v
// Integer bertanda
i8    // -128 hingga 127
i16   // -32.768 hingga 32.767
int   // -2.147.483.648 hingga 2.147.483.647  (selalu 32-bit)
i64   // -9.223.372.036.854.775.808 hingga 9.223.372.036.854.775.807

// Integer tak bertanda
u8    // 0 hingga 255  (juga digunakan untuk byte)
u16   // 0 hingga 65.535
u32   // 0 hingga 4.294.967.295
u64   // 0 hingga 18.446.744.073.709.551.615

// Bergantung platform
isize // bertanda, ukuran pointer
usize // tak bertanda, ukuran pointer
```

> **Catatan:** Tidak seperti C dan Go, `int` dalam V selalu 32-bit tanpa memandang platform.

## Tipe Titik Mengambang

```v
f32   // presisi tunggal (32-bit)
f64   // presisi ganda (64-bit)
```

## Boolean

```v
is_ready := true
is_done  := false
```

## Rune

`rune` mewakili titik kode Unicode:

```v
letter := `A`        // literal rune menggunakan backtick
emoji  := `🌎`
println(letter)      // A
println(int(letter)) // 65
```

## Promosi Tipe

Tipe kecil secara otomatis dipromosikan ketika digabungkan dengan tipe yang lebih besar di sisi yang sama dari sebuah operator:

```v
u := u16(12)
v := 13 + u    // v adalah u16 — tidak ada promosi
x := f32(45.6)
y := x + 3.14  // y adalah f32 — tidak ada promosi
a := 75        // int (default untuk literal integer)
b := 14.7      // f64 (default untuk literal float)
```

## Literal Numerik

```v
n1 := 1_000_000      // garis bawah untuk keterbacaan
n2 := 0xff           // heksadesimal
n3 := 0o77           // oktal
n4 := 0b1111_0000    // biner
f1 := 3.14_159_265   // float dengan garis bawah
```

## `voidptr`

Tipe pointer mentah yang digunakan terutama untuk interoperabilitas C. Hindari dalam kode V murni.

```v
// terutama untuk interop C
p := voidptr(0)
```
