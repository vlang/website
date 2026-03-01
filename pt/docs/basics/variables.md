# Variáveis

## Declaração e Inicialização

Variáveis são declaradas e inicializadas com `:=`. Esta é a única forma de declarar variáveis em V — elas sempre têm um valor inicial e seu tipo é inferido a partir do lado direito.

```v
name := 'Bob'
age := 20
large_number := i64(9999999999)
println(name)
println(age)
println(large_number)
```

## Variáveis Mutáveis

Variáveis são **imutáveis por padrão**. Use `mut` para tornar uma variável mutável:

```v
mut age := 20
println(age)
age = 21
println(age)
```

> Se você tentar reatribuir sem `mut`, o compilador se recusará a compilar.

## Conversão de Tipos

Use `T(valor)` para converter entre tipos:

```v
x := 42
y := f64(x)  // x converted to f64
z := u8(x)   // x converted to u8
```

## Atribuição Múltipla

Múltiplas variáveis podem ser alteradas ou trocadas em uma linha:

```v
mut a := 0
mut b := 1
println('${a}, ${b}') // 0, 1
a, b = b, a
println('${a}, ${b}') // 1, 0
```

## Ignorando Valores

Use `_` para descartar um valor de retorno:

```v
fn foo() (int, int) {
    return 2, 3
}

fn main() {
    c, _ := foo()
    println(c)
}
```

## Convenção de Nomenclatura

Todos os nomes de variáveis e funções devem usar `snake_case`. Nomes de tipos devem usar `PascalCase`. O compilador impõe isso.

## Sem Variáveis Globais

V não permite variáveis globais por padrão. Todas as variáveis devem ser declaradas dentro de funções. Isso leva a um código mais previsível e testável.

## Sem Sombreamento

O sombreamento de variáveis não é permitido. Declarar uma variável com um nome já utilizado em um escopo pai é um erro de compilação:

```v
fn main() {
    a := 10
    // a := 20  // ← compile error: redefinition of `a`
}
```
