# Funcions

## Sintaxi Bàsica

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

El tipus de retorn s'especifica **després** de la llista de paràmetres. Si la funció no retorna res, el tipus de retorn s'omet.

## Hissament

Les funcions es poden usar abans de ser declarades. V hissa totes les declaracions, de manera que no cal fitxers de capçalera ni declaracions anticipades.

## Múltiples Valors de Retorn

```v
fn foo() (int, int) {
    return 2, 3
}

a, b := foo()
println(a) // 2
println(b) // 3
c, _ := foo() // ignora el segon valor amb `_`
```

## Visibilitat

Les funcions són **privades** per defecte. Usa `pub` per exportar-les:

```v
pub fn public_function() {
}

fn private_function() {
}
```

## Sense Sobrecàrrega

Les funcions no es poden sobrecarregar. Això manté el codi inequívoc i fàcil de llegir.

## Mètodes

Les funcions es poden adjuntar a tipus:

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

## Funcions d'Ordre Superior

Les funcions són valors de primera classe i es poden passar a altres funcions:

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

## Funcions Anònimes

```v
fn main() {
    double := fn (x int) int {
        return x * 2
    }
    println(double(5)) // 10
}
```
