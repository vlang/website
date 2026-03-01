# Hello World

## Vaš prvi V program

Kreirajte datoteku pod nazivom `hello.v`:

```v
fn main() {
    println('Hello, World!')
}
```

Pokrenite je:

```bash
v run hello.v
```

Ili kompajlirajte i pokrenite odvojeno:

```bash
v hello.v
./hello
```

## Preskakanje `fn main()`

Za skripte s jednom datotekom, `fn main()` je opcionalan:

```v
println('Hello, World!')
```

Ovo je korisno za male programe i učenje jezika.

## Pokretanje više datoteka

Ako vaš projekt ima više `.v` datoteka u folderu, pokrenite ih sve odjednom:

```bash
v run .
```

## Komentari

```v
// Ovo je jednolinjski komentar.
/*
  Ovo je višelinjski komentar.
  /* Može biti ugniježđen. */
*/
```

## Nešto veći primjer

```v
// fibonacci.v — izračunava Fibonacci brojeve do zadanog ranga
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
