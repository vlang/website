# Hello World

## Ditt første V-program

Opprett en fil kalt `hello.v`:

```v
fn main() {
    println('Hello, World!')
}
```

Kjør det:

```bash
v run hello.v
```

Eller kompiler og kjør separat:

```bash
v hello.v
./hello
```

## Utelate `fn main()`

For enkeltfil-skript er `fn main()` valgfritt:

```v
println('Hello, World!')
```

Dette er nyttig for små programmer og for å lære språket.

## Kjøre flere filer

Hvis prosjektet ditt har flere `.v`-filer i en mappe, kjør dem alle på én gang:

```bash
v run .
```

## Kommentarer

```v
// Dette er en enkeltlinjekommentar.
/*
  Dette er en flerlinjekommentar.
  /* Den kan være nestet. */
*/
```

## Et litt større eksempel

```v
// fibonacci.v — beregn Fibonacci-tall opp til en gitt rang
const args = arguments()

fn main() {
    if args.len != 2 {
        println('bruk: fibonacci [rang]')
        return
    }
    stop := args[1].int()
    if stop > 92 {
        println('rang må være 92 eller mindre')
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
