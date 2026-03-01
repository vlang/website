# Primitivni tipovi

## Cjelobrojni tipovi

```v
// Predznačeni integeri
i8    // -128 do 127
i16   // -32.768 do 32.767
int   // -2.147.483.648 do 2.147.483.647  (uvijek 32-bitni)
i64   // -9.223.372.036.854.775.808 do 9.223.372.036.854.775.807

// Nepredznačeni integeri
u8    // 0 do 255  (koristi se i za bajtove)
u16   // 0 do 65.535
u32   // 0 do 4.294.967.295
u64   // 0 do 18.446.744.073.709.551.615

// Ovisno o platformi
isize // predznačen, veličina pokazivača
usize // nepredznačen, veličina pokazivača
```

> **Napomena:** Za razliku od C i Go, `int` u V-u je uvijek 32-bitni bez obzira na platformu.

## Tipovi s pomičnim zarezom

```v
f32   // jednostruka preciznost (32-bitni)
f64   // dvostruka preciznost (64-bitni)
```

## Boolean

```v
is_ready := true
is_done  := false
```

## Rune

`rune` predstavlja Unicode kodnu tačku:

```v
letter := `A`        // literal rune koristi backtick znakove
emoji  := `🌎`
println(letter)      // A
println(int(letter)) // 65
```

## Promocije tipova

Mali tipovi se automatski promoviraju kada se kombiniraju s većim tipovima na istoj strani operatora:

```v
u := u16(12)
v := 13 + u    // v je u16 — bez promocije
x := f32(45.6)
y := x + 3.14  // y je f32 — bez promocije
a := 75        // int (zadano za cjelobrojne literale)
b := 14.7      // f64 (zadano za literale s pomičnim zarezom)
```

## Numerički literali

```v
n1 := 1_000_000      // donje crtice za čitljivost
n2 := 0xff           // heksadecimalni
n3 := 0o77           // oktalni
n4 := 0b1111_0000    // binarni
f1 := 3.14_159_265   // decimalni s donjim crticama
```

## `voidptr`

Tip sirovog pokazivača koji se uglavnom koristi za C interoperabilnost. Izbjegavajte u čistom V kodu.

```v
// uglavnom za C interop
p := voidptr(0)
```
