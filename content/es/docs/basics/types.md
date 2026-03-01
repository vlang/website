# Tipos Primitivos

## Tipos Enteros

```v
// Enteros con signo
i8    // -128 a 127
i16   // -32,768 a 32,767
int   // -2,147,483,648 a 2,147,483,647  (siempre 32 bits)
i64   // -9,223,372,036,854,775,808 a 9,223,372,036,854,775,807

// Enteros sin signo
u8    // 0 a 255  (también usado para bytes)
u16   // 0 a 65,535
u32   // 0 a 4,294,967,295
u64   // 0 a 18,446,744,073,709,551,615

// Dependientes de la plataforma
isize // con signo, tamaño de un puntero
usize // sin signo, tamaño de un puntero
```

> **Nota:** A diferencia de C y Go, `int` en V siempre es de 32 bits independientemente de la plataforma.

## Tipos de Punto Flotante

```v
f32   // precisión simple (32 bits)
f64   // doble precisión (64 bits)
```

## Booleano

```v
is_ready := true
is_done  := false
```

## Runa

Una `rune` representa un punto de código Unicode:

```v
letter := `A`        // literal de runa usa comillas invertidas
emoji  := `🌎`
println(letter)      // A
println(int(letter)) // 65
```

## Promociones de Tipo

Los tipos pequeños se promueven automáticamente cuando se combinan con tipos más grandes en el mismo lado de un operador:

```v
u := u16(12)
v := 13 + u    // v es u16 — sin promoción
x := f32(45.6)
y := x + 3.14  // y es f32 — sin promoción
a := 75        // int (por defecto para literales enteros)
b := 14.7      // f64 (por defecto para literales flotantes)
```

## Literales Numéricos

```v
n1 := 1_000_000      // guiones bajos para legibilidad
n2 := 0xff           // hexadecimal
n3 := 0o77           // octal
n4 := 0b1111_0000    // binario
f1 := 3.14_159_265   // flotante con guiones bajos
```

## `voidptr`

Un tipo de puntero crudo usado principalmente para la interoperabilidad con C. Evitar en código V puro.

```v
// principalmente para interoperabilidad con C
p := voidptr(0)
```
