# Funkcije

## Osnovna sintaksa

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

Povratni tip se navodi **nakon** liste parametara. Ako funkcija ne vraća ništa, povratni tip se izostavlja.

## Podizanje (Hoisting)

Funkcije se mogu koristiti prije nego što su deklarirane. V podiže sve deklaracije, tako da nisu potrebne header datoteke niti prethodne deklaracije.

## Višestruke povratne vrijednosti

```v
fn foo() (int, int) {
    return 2, 3
}

a, b := foo()
println(a) // 2
println(b) // 3
c, _ := foo() // ignoriraj drugu vrijednost s `_`
```

## Vidljivost

Funkcije su **privatne** po zadanom. Koristite `pub` za izvoz:

```v
pub fn public_function() {
}

fn private_function() {
}
```

## Bez preopterećenja

Funkcije ne mogu biti preopterećene. Ovo čini kod jednoznačnim i lakim za čitanje.

## Metode

Funkcije se mogu pridružiti tipovima:

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

## Funkcije višeg reda

Funkcije su vrijednosti prve klase i mogu se proslijediti drugim funkcijama:

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

## Anonimne funkcije

```v
fn main() {
    double := fn (x int) int {
        return x * 2
    }
    println(double(5)) // 10
}
```
