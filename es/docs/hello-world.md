# Hola Mundo

## Tu Primer Programa en V

Crea un archivo llamado `hello.v`:

```v
fn main() {
    println('Hello, World!')
}
```

Ejecútalo:

```bash
v run hello.v
```

O compila y ejecuta por separado:

```bash
v hello.v
./hello
```

## Omitir `fn main()`

Para scripts de un solo archivo, `fn main()` es opcional:

```v
println('Hello, World!')
```

Esto es útil para programas pequeños y para aprender el lenguaje.

## Ejecutar Múltiples Archivos

Si tu proyecto tiene múltiples archivos `.v` en una carpeta, ejecútalos todos a la vez:

```bash
v run .
```

## Comentarios

```v
// Este es un comentario de una sola línea.
/*
  Este es un comentario multilínea.
  /* Puede estar anidado. */
*/
```

## Un Ejemplo un Poco Más Grande

```v
// fibonacci.v — calcula números de Fibonacci hasta un rango dado
const args = arguments()

fn main() {
    if args.len != 2 {
        println('uso: fibonacci [rango]')
        return
    }
    stop := args[1].int()
    if stop > 92 {
        println('el rango debe ser 92 o menos')
        return
    }
    mut a := i64(0)
    mut b := i64(0)
    mut c := i64(1)
    println(a + b + c)
    for _ in 0 .. stop {
        a = b
        b = c
        c = a + b
        println(c)
    }
}
```
