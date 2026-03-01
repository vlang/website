# Variables

## Declaración e Inicialización

Las variables se declaran e inicializan con `:=`. Esta es la única forma de declarar variables en V — siempre tienen un valor inicial y su tipo se infiere del lado derecho.

```v
name := 'Bob'
age := 20
large_number := i64(9999999999)
println(name)
println(age)
println(large_number)
```

## Variables Mutables

Las variables son **inmutables por defecto**. Usa `mut` para hacer una variable mutable:

```v
mut age := 20
println(age)
age = 21
println(age)
```

> Si intentas reasignar sin `mut`, el compilador se negará a compilar.

## Conversión de Tipos

Usa `T(value)` para convertir entre tipos:

```v
x := 42
y := f64(x)  // x convertido a f64
z := u8(x)   // x convertido a u8
```

## Asignación Múltiple

Múltiples variables pueden cambiarse o intercambiarse en una sola línea:

```v
mut a := 0
mut b := 1
println('${a}, ${b}') // 0, 1
a, b = b, a
println('${a}, ${b}') // 1, 0
```

## Ignorar Valores

Usa `_` para descartar un valor de retorno:

```v
fn foo() (int, int) {
    return 2, 3
}

fn main() {
    c, _ := foo()
    println(c)
}
```

## Convención de Nombres

Todos los nombres de variables y funciones deben usar `snake_case`. Los nombres de tipos deben usar `PascalCase`. El compilador lo hace cumplir.

## Sin Variables Globales

V no permite variables globales por defecto. Todas las variables deben declararse dentro de funciones. Esto lleva a un código más predecible y testeable.

## Sin Shadowing (Enmascaramiento)

El enmascaramiento de variables no está permitido. Declarar una variable con un nombre ya usado en un ámbito padre es un error de compilación:

```v
fn main() {
    a := 10
    // a := 20  // ← error de compilación: redefinición de `a`
}
```
