# İlkel Tipler

## Tam Sayı Tipleri

```v
// İşaretli tam sayılar
i8    // -128 ile 127
i16   // -32.768 ile 32.767
int   // -2.147.483.648 ile 2.147.483.647  (her zaman 32-bit)
i64   // -9.223.372.036.854.775.808 ile 9.223.372.036.854.775.807

// İşaretsiz tam sayılar
u8    // 0 ile 255  (baytlar için de kullanılır)
u16   // 0 ile 65.535
u32   // 0 ile 4.294.967.295
u64   // 0 ile 18.446.744.073.709.551.615

// Platforma bağımlı
isize // işaretli, bir işaretçinin boyutu
usize // işaretsiz, bir işaretçinin boyutu
```

> **Not:** C ve Go'dan farklı olarak V'deki `int`, platformdan bağımsız olarak her zaman 32-bit'tir.

## Kayan Noktalı Tipler

```v
f32   // tek duyarlıklı (32-bit)
f64   // çift duyarlıklı (64-bit)
```

## Boolean

```v
is_ready := true
is_done  := false
```

## Rune

Bir `rune`, Unicode kod noktasını temsil eder:

```v
letter := `A`        // rune literali ters tırnak kullanır
emoji  := `🌎`
println(letter)      // A
println(int(letter)) // 65
```

## Tip Terfileri

Küçük tipler, bir operatörün aynı tarafındaki daha büyük tiplerle birleştirildiğinde otomatik olarak terfiye edilir:

```v
u := u16(12)
v := 13 + u    // v, u16'dır — terfiye edilmez
x := f32(45.6)
y := x + 3.14  // y, f32'dir — terfiye edilmez
a := 75        // int (tam sayı literalleri için varsayılan)
b := 14.7      // f64 (float literalleri için varsayılan)
```

## Sayısal Literaller

```v
n1 := 1_000_000      // okunabilirlik için alt çizgi
n2 := 0xff           // onaltılık
n3 := 0o77           // sekizlik
n4 := 0b1111_0000    // ikili
f1 := 3.14_159_265   // alt çizgili float
```

## `voidptr`

Esas olarak C birlikte çalışabilirliği için kullanılan ham işaretçi tipi. Salt V kodunda kullanmaktan kaçının.

```v
// çoğunlukla C birlikte çalışması için
p := voidptr(0)
```
