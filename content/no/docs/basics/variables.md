# Variabler

## Deklarering og initialisering

Variabler deklareres og initialiseres med `:=`. Dette er den eneste måten å deklarere variabler i V på — de har alltid en startverdi og typen utledes fra høyre side.

```v
name := 'Bob'
age := 20
large_number := i64(9999999999)
println(name)
println(age)
println(large_number)
```

## Muterbare variabler

Variabler er **uforanderlige som standard**. Bruk `mut` for å gjøre en variabel muterbar:

```v
mut age := 20
println(age)
age = 21
println(age)
```

> Hvis du prøver å tilordne på nytt uten `mut`, vil kompilatoren nekte å kompilere.

## Typekonvertering

Bruk `T(value)` for å konvertere mellom typer:

```v
x := 42
y := f64(x)  // x konvertert til f64
z := u8(x)   // x konvertert til u8
```

## Multippel tilordning

Flere variabler kan endres eller byttes på én linje:

```v
mut a := 0
mut b := 1
println('${a}, ${b}') // 0, 1
a, b = b, a
println('${a}, ${b}') // 1, 0
```

## Ignorere verdier

Bruk `_` for å forkaste en returverdi:

```v
fn foo() (int, int) {
    return 2, 3
}

fn main() {
    c, _ := foo()
    println(c)
}
```

## Navnekonvensjon

Alle variabel- og funksjonsnavn må bruke `snake_case`. Typenavn må bruke `PascalCase`. Kompilatoren håndhever dette.

## Ingen globale variabler

V tillater ikke globale variabler som standard. Alle variabler må deklareres inne i funksjoner. Dette gir mer forutsigbar og testbar kode.

## Ingen skygging

Variabelskygging er ikke tillatt. Å deklarere en variabel med et navn som allerede er brukt i et foreldreomfang er en kompileringsfeil:

```v
fn main() {
    a := 10
    // a := 20  // ← kompileringsfeil: redefinisjon av `a`
}
```
