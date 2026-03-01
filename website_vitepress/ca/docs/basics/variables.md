# Variables

## Declaració i Inicialització

Les variables es declaren i inicialitzen amb `:=`. Aquesta és l'única manera de declarar variables en V — sempre tenen un valor inicial i el seu tipus s'infereix del costat dret.

```v
name := 'Bob'
age := 20
large_number := i64(9999999999)
println(name)
println(age)
println(large_number)
```

## Variables Mutables

Les variables són **immutables per defecte**. Usa `mut` per fer una variable mutable:

```v
mut age := 20
println(age)
age = 21
println(age)
```

> Si intentes reassignar sense `mut`, el compilador es negarà a compilar.

## Conversió de Tipus

Usa `T(value)` per convertir entre tipus:

```v
x := 42
y := f64(x)  // x converted to f64
z := u8(x)   // x converted to u8
```

## Assignació Múltiple

Múltiples variables es poden canviar o intercanviar en una sola línia:

```v
mut a := 0
mut b := 1
println('${a}, ${b}') // 0, 1
a, b = b, a
println('${a}, ${b}') // 1, 0
```

## Ignorar Valors

Usa `_` per descartar un valor de retorn:

```v
fn foo() (int, int) {
    return 2, 3
}

fn main() {
    c, _ := foo()
    println(c)
}
```

## Convenció de Nomenclatura

Tots els noms de variables i funcions han d'usar `snake_case`. Els noms de tipus han d'usar `PascalCase`. El compilador ho imposa.

## Sense Variables Globals

V no permet variables globals per defecte. Totes les variables s'han de declarar dins de funcions. Això porta a un codi més predictible i proves.

## Sense Ombreig

L'ombreig de variables no està permès. Declarar una variable amb un nom ja usat en un àmbit pare és un error de compilació:

```v
fn main() {
    a := 10
    // a := 20  // ← error de compilació: redefinició de `a`
}
```
