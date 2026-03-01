# Funciones

## Sintaxis Básica

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

El tipo de retorno se especifica **después** de la lista de parámetros. Si la función no devuelve nada, el tipo de retorno se omite.

## Hoisting (Elevación)

Las funciones pueden usarse antes de ser declaradas. V eleva todas las declaraciones, por lo que no se necesitan archivos de cabecera ni declaraciones anticipadas.

## Múltiples Valores de Retorno

```v
fn foo() (int, int) {
    return 2, 3
}

a, b := foo()
println(a) // 2
println(b) // 3
c, _ := foo() // ignorar el segundo valor con `_`
```

## Visibilidad

Las funciones son **privadas** por defecto. Usa `pub` para exportarlas:

```v
pub fn public_function() {
}

fn private_function() {
}
```

## Sin Sobrecarga

Las funciones no pueden sobrecargarse. Esto mantiene el código sin ambigüedades y fácil de leer.

## Métodos

Las funciones pueden asociarse a tipos:

```v
struct User {
    name string
    age  int
}

fn (u User) can_register() bool {
    return u.age >= 16
}

fn (mut u User) register() {
    println('${u.name} ahora está registrado')
}

fn main() {
    mut u := User{ name: 'Frodo', age: 25 }
    if u.can_register() {
        u.register()
    }
}
```

## Funciones de Orden Superior

Las funciones son valores de primera clase y pueden pasarse a otras funciones:

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

## Funciones Anónimas

```v
fn main() {
    double := fn (x int) int {
        return x * 2
    }
    println(double(5)) // 10
}
```
