# Tratamento de Erros

V usa os tipos **Option** e **Result** em vez de exceções. Isso torna o tratamento de erros explícito e visível nas assinaturas das funções.

## Tipos Option

Um `?T` (option) contém um valor do tipo `T` ou `none`:

```v
fn find_user(id int) ?string {
    users := {1: 'Alice', 2: 'Bob'}
    return users[id] or { return none }
}

fn main() {
    if name := find_user(1) {
        println('Encontrado: ${name}') // Encontrado: Alice
    } else {
        println('Não encontrado')
    }
}
```

## Tipos Result

Um `!T` (result) contém um valor do tipo `T` ou um erro:

```v
fn divide(a f64, b f64) !f64 {
    if b == 0.0 {
        return error('divisão por zero')
    }
    return a / b
}

fn main() {
    result := divide(10.0, 2.0) or {
        eprintln('Erro: ${err}')
        return
    }
    println(result) // 5.0
}
```

## O Bloco `or`

O bloco `or` é executado quando o resultado é `none` ou um erro. Dentro de `or`, `err` contém o valor do erro:

```v
import net.http

fn main() {
    resp := http.get('https://vlang.io/utc_now') or {
        eprintln('Falha na requisição. Erro: ${err}')
        return
    }
    println(resp.body)
}
```

## Propagando Erros com `!`

Adicionar `!` após uma chamada propaga o erro para o chamador (semelhante a `?` em Rust):

```v
fn read_config(path string) !string {
    content := os.read_file(path)!  // propaga se houver erro
    return content
}
```

## Erros Personalizados

Implemente a interface `IError` para criar tipos de erro personalizados:

```v
struct DivisionError {
    msg  string
    code int
}

fn (e DivisionError) msg() string {
    return e.msg
}

fn (e DivisionError) code() int {
    return e.code
}

fn safe_divide(a f64, b f64) !f64 {
    if b == 0 {
        return DivisionError{msg: 'não é possível dividir por zero', code: 1}
    }
    return a / b
}
```

## Correspondência em Tipos de Erro

```v
import semver

fn main() {
    semver.from('invalid') or { check_error(err) }
    semver.from('') or { check_error(err) }
}

fn check_error(err IError) {
    match err {
        semver.InvalidVersionFormatError {
            println('formato incorreto')
        }
        semver.EmptyInputError {
            println('entrada vazia')
        }
        else {
            println('erro desconhecido: ${err}')
        }
    }
}
```

## O Operador de Desempacotamento `?`

Use `val?` dentro de um contexto option para desempacotar ou propagar `none`:

```v
fn get_name(users map[int]string, id int) ?string {
    return users[id]?
}
```
