# Varijable

## Deklaracija i inicijalizacija

Varijable se deklariraju i inicijaliziraju s `:=`. Ovo je jedini način deklaracije varijabli u V-u — uvijek imaju početnu vrijednost, a njihov tip se određuje automatski iz desne strane.

```v
name := 'Bob'
age := 20
large_number := i64(9999999999)
println(name)
println(age)
println(large_number)
```

## Promjenljive varijable

Varijable su **nepromjenjive po zadanom**. Koristite `mut` da biste varijablu učinili promjenljivom:

```v
mut age := 20
println(age)
age = 21
println(age)
```

> Ako pokušate dodijeliti vrijednost bez `mut`, kompajler će odbiti kompajliranje.

## Konverzija tipova

Koristite `T(value)` za konverziju između tipova:

```v
x := 42
y := f64(x)  // x konvertovan u f64
z := u8(x)   // x konvertovan u u8
```

## Višestruka dodjela

Više varijabli može se promijeniti ili zamijeniti u jednoj liniji:

```v
mut a := 0
mut b := 1
println('${a}, ${b}') // 0, 1
a, b = b, a
println('${a}, ${b}') // 1, 0
```

## Ignoriranje vrijednosti

Koristite `_` za odbacivanje povratne vrijednosti:

```v
fn foo() (int, int) {
    return 2, 3
}

fn main() {
    c, _ := foo()
    println(c)
}
```

## Konvencija imenovanja

Sva imena varijabli i funkcija moraju koristiti `snake_case`. Imena tipova moraju koristiti `PascalCase`. Kompajler to provodi.

## Bez globalnih varijabli

V ne dozvoljava globalne varijable po zadanom. Sve varijable moraju biti deklarirane unutar funkcija. Ovo vodi ka predvidljivijem, testabilnom kodu.

## Bez zasjenjivanja

Zasjenjivanje varijabli nije dozvoljeno. Deklariranje varijable s imenom koje se već koristi u roditeljskom opsegu je greška kompajliranja:

```v
fn main() {
    a := 10
    // a := 20  // ← greška kompajliranja: redefinicija `a`
}
```
