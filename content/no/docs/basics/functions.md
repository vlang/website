# Funksjoner

## Grunnleggende syntaks

```v
fn main() {
    println(add(77, 33))
    println(sub(100, 50))
}

fn add(x int, y int) int {
    return x + y
}

fn sub(x int, y int) int {
    return x - y
}
```

Returtypen er angitt **etter** parameterlisten. Hvis funksjonen ikke returnerer noe, utelates returtypen.

## Heising

Funksjoner kan brukes før de er deklarert. V heiser alle deklarasjoner, så det er ikke nødvendig med header-filer eller foroverdeklarasjoner.

## Flere returverdier

```v
fn foo() (int, int) {
    return 2, 3
}

a, b := foo()
println(a) // 2
println(b) // 3
c, _ := foo() // ignorer den andre verdien med `_`
```

## Synlighet

Funksjoner er **private** som standard. Bruk `pub` for å eksportere dem:

```v
pub fn public_function() {
}

fn private_function() {
}
```

## Ingen overbelastning

Funksjoner kan ikke overbelastes. Dette holder koden entydig og lett å lese.

## Metoder

Funksjoner kan kobles til typer:

```v
struct User {
    name string
    age  int
}

fn (u User) can_register() bool {
    return u.age >= 16
}

fn (mut u User) register() {
    println('${u.name} is now registered')
}

fn main() {
    mut u := User{ name: 'Frodo', age: 25 }
    if u.can_register() {
        u.register()
    }
}
```

## Høyereordens funksjoner

Funksjoner er førsteklasses verdier og kan sendes til andre funksjoner:

```v
fn apply(arr []int, f fn(int) int) []int {
    mut result := []int{}
    for x in arr {
        result << f(x)
    }
    return result
}

fn double(x int) int {
    return x * 2
}

fn main() {
    nums := [1, 2, 3, 4, 5]
    doubled := apply(nums, double)
    println(doubled) // [2, 4, 6, 8, 10]
}
```

## Anonyme funksjoner

```v
fn main() {
    double := fn (x int) int {
        return x * 2
    }
    println(double(5)) // 10
}
```
