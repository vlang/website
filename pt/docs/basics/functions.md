# Funções

## Sintaxe Básica

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

O tipo de retorno é especificado **após** a lista de parâmetros. Se a função não retorna nada, o tipo de retorno é omitido.

## Hoisting

Funções podem ser usadas antes de serem declaradas. V eleva todas as declarações, portanto não há necessidade de arquivos de cabeçalho ou declarações antecipadas.

## Múltiplos Valores de Retorno

```v
fn foo() (int, int) {
    return 2, 3
}

a, b := foo()
println(a) // 2
println(b) // 3
c, _ := foo() // ignore the second value with `_`
```

## Visibilidade

Funções são **privadas** por padrão. Use `pub` para exportá-las:

```v
pub fn public_function() {
}

fn private_function() {
}
```

## Sem Sobrecarga

Funções não podem ser sobrecarregadas. Isso mantém o código sem ambiguidades e fácil de ler.

## Métodos

Funções podem ser anexadas a tipos:

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

## Funções de Alta Ordem

Funções são valores de primeira classe e podem ser passadas para outras funções:

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

## Funções Anônimas

```v
fn main() {
    double := fn (x int) int {
        return x * 2
    }
    println(double(5)) // 10
}
```
