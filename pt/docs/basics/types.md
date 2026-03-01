# Tipos Primitivos

## Tipos Inteiros

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

> **Nota:** Ao contrário de C e Go, `int` em V é sempre 32-bit independentemente da plataforma.

## Tipos de Ponto Flutuante

```v
f32   // single-precision (32-bit)
f64   // double-precision (64-bit)
```

## Booleano

```v
is_ready := true
is_done  := false
```

## Rune

Um `rune` representa um ponto de código Unicode:

```v
letter := `A`        // rune literal uses backticks
emoji  := `🌎`
println(letter)      // A
println(int(letter)) // 65
```

## Promoções de Tipo

Tipos pequenos são automaticamente promovidos quando combinados com tipos maiores no mesmo lado de um operador:

```v
u := u16(12)
v := 13 + u    // v is u16 — no promotion
x := f32(45.6)
y := x + 3.14  // y is f32 — no promotion
a := 75        // int (default for integer literals)
b := 14.7      // f64 (default for float literals)
```

## Literais Numéricos

```v
n1 := 1_000_000      // underscores for readability
n2 := 0xff           // hex
n3 := 0o77           // octal
n4 := 0b1111_0000    // binary
f1 := 3.14_159_265   // float with underscores
```

## `voidptr`

Um tipo de ponteiro bruto usado principalmente para interoperabilidade com C. Evite em código V puro.

```v
// mostly for C interop
p := voidptr(0)
```
