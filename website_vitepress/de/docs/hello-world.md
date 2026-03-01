# Hello World

## Dein erstes V-Programm

Erstelle eine Datei namens `hello.v`:

```v
fn main() {
    println('Hello, World!')
}
```

Führe es aus:

```bash
v run hello.v
```

Oder kompiliere und führe es separat aus:

```bash
v hello.v
./hello
```

## `fn main()` weglassen

Bei einzel-Datei-Skripten ist `fn main()` optional:

```v
println('Hello, World!')
```

Dies ist nützlich für kleine Programme und zum Lernen der Sprache.

## Mehrere Dateien ausführen

Wenn dein Projekt mehrere `.v`-Dateien in einem Ordner hat, führe sie alle auf einmal aus:

```bash
v run .
```

## Kommentare

```v
// Dies ist ein einzeiliger Kommentar.
/*
  Dies ist ein mehrzeiliger Kommentar.
  /* Er kann verschachtelt werden. */
*/
```

## Ein etwas größeres Beispiel

```v
// fibonacci.v — Fibonacci-Zahlen bis zu einem bestimmten Rang berechnen
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
