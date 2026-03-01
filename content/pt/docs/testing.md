# Testes

V possui suporte a testes integrado. Nenhum framework de teste ou biblioteca externa necessária.

## Escrevendo Testes

As funções de teste devem começar com `test_` e estar em arquivos terminados com `_test.v`:

```v
// math_test.v

fn add(a int, b int) int {
    return a + b
}

fn test_add() {
    assert add(2, 3) == 5
    assert add(0, 0) == 0
    assert add(-1, 1) == 0
}

fn test_add_large_numbers() {
    assert add(1_000_000, 2_000_000) == 3_000_000
}
```

Execute os testes com:

```bash
v test math_test.v
# ou execute todos os testes em um diretório:
v test .
```

## Asserções

Use `assert` para verificar condições. Uma asserção que falha exibe os valores de ambos os lados:

```v
fn test_string_ops() {
    s := 'Hello, World!'
    assert s.contains('World')
    assert s.to_upper() == 'HELLO, WORLD!'
    assert s.len == 13
}
```

## Configuração e Desmontagem de Testes

```v
// Use testsuite_begin e testsuite_end para configuração/desmontagem no nível do módulo
fn testsuite_begin() {
    // executado uma vez antes de todos os testes no arquivo
    println('Configurando suite de testes...')
}

fn testsuite_end() {
    // executado uma vez após todos os testes no arquivo
    println('Desmontando suite de testes...')
}
```

## Testando Casos de Erro

```v
fn safe_divide(a f64, b f64) !f64 {
    if b == 0 {
        return error('divisão por zero')
    }
    return a / b
}

fn test_divide_by_zero() {
    result := safe_divide(10, 0) or { err.msg() }
    assert result == 'divisão por zero'
}

fn test_divide_normal() {
    result := safe_divide(10, 2) or { panic(err) }
    assert result == 5.0
}
```

## Executando Testes Específicos

```bash
# Executar um único arquivo de teste
v test mypackage/foo_test.v

# Executar testes correspondendo a um padrão
v test -run test_add .

# Executar com saída detalhada
v test -v .
```

## Testes Baseados em Tabela

V não possui um helper de teste baseado em tabela integrado, mas você pode fazer manualmente:

```v
fn test_add_table() {
    cases := [
        [2, 3, 5],
        [0, 0, 0],
        [-1, 1, 0],
        [100, 200, 300],
    ]
    for c in cases {
        assert add(c[0], c[1]) == c[2]
    }
}
```

## Cobertura de Código

Gere um relatório de cobertura:

```bash
v -coverage ./coverage_output test .
```
