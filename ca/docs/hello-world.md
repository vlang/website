# Hola Món

## El Teu Primer Programa en V

Crea un fitxer anomenat `hello.v`:

```v
fn main() {
    println('Hello, World!')
}
```

Executa'l:

```bash
v run hello.v
```

O compila i executa per separat:

```bash
v hello.v
./hello
```

## Ometre `fn main()`

Per a scripts d'un sol fitxer, `fn main()` és opcional:

```v
println('Hello, World!')
```

Això és útil per a programes petits i per aprendre el llenguatge.

## Executar Múltiples Fitxers

Si el teu projecte té múltiples fitxers `.v` en una carpeta, executa'ls tots alhora:

```bash
v run .
```

## Comentaris

```v
// Aquest és un comentari d'una sola línia.
/*
  Aquest és un comentari multilínia.
  /* Pot estar niuat. */
*/
```

## Un Exemple Una Mica Més Gran

```v
// fibonacci.v — calcula nombres de Fibonacci fins a un rang donat
const args = arguments()

fn main() {
    if args.len != 2 {
        println('usage: fibonacci [rank]')
        return
    }
    stop := args[1].int()
    if stop > 92 {
        println('rank must be 92 or less')
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
