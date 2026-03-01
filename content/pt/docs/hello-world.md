# Hello World

## Seu Primeiro Programa em V

Crie um arquivo chamado `hello.v`:

```v
fn main() {
    println('Hello, World!')
}
```

Execute-o:

```bash
v run hello.v
```

Ou compile e execute separadamente:

```bash
v hello.v
./hello
```

## Omitindo `fn main()`

Em scripts de arquivo único, `fn main()` é opcional:

```v
println('Hello, World!')
```

Isso é útil para pequenos programas e para aprender a linguagem.

## Executando Múltiplos Arquivos

Se o seu projeto tiver múltiplos arquivos `.v` em uma pasta, execute todos de uma vez:

```bash
v run .
```

## Comentários

```v
// Este é um comentário de linha única.
/*
  Este é um comentário de múltiplas linhas.
  /* Ele pode ser aninhado. */
*/
```

## Um Exemplo Um Pouco Maior

```v
// fibonacci.v — calcula números de Fibonacci até um dado rank
const args = arguments()

fn main() {
    if args.len != 2 {
        println('uso: fibonacci [rank]')
        return
    }
    stop := args[1].int()
    if stop > 92 {
        println('o rank deve ser 92 ou menos')
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
