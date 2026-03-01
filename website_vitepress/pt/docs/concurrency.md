# Concorrência

V utiliza threads leves (goroutines) para executar trabalho de forma concorrente. A palavra-chave `spawn` inicia uma função em uma nova thread.

## Spawn Básico

```v
import time

fn expensive_computing(id int, duration int) {
    println('Iniciando tarefa ${id}...')
    time.sleep(duration * time.millisecond)
    println('Tarefa ${id} concluída em ${duration} ms')
}

fn main() {
    mut threads := []thread{}
    threads << spawn expensive_computing(1, 100)
    threads << spawn expensive_computing(2, 500)
    threads << spawn expensive_computing(3, 1000)

    // Aguarda todas as threads finalizarem
    threads.wait()
    println('Todos os trabalhos finalizados!')
}
```

## Obtendo Valores de Retorno

Threads podem retornar valores. Chamar `.wait()` em um `[]thread T` retorna `[]T`:

```v
fn expensive_computing(i int) int {
    return i * i
}

fn main() {
    mut threads := []thread int{}
    for i in 1 .. 10 {
        threads << spawn expensive_computing(i)
    }
    results := threads.wait()
    println('Todos os trabalhos finalizados: ${results}')
    // [1, 4, 9, 16, 25, 36, 49, 64, 81]
}
```

## Requisições HTTP Concorrentes

```v
import net.http
import sync
import time

fn fetch_time(mut wg sync.WaitGroup) {
    start := time.ticks()
    data := http.get('https://vlang.io/utc_now') or { return }
    println('Requisição de tempo: ${time.ticks() - start} ms — ${data.body}')
    wg.done()
}

fn fetch_ip(mut wg sync.WaitGroup) {
    start := time.ticks()
    data := http.get('https://api.ipify.org') or { return }
    println('Requisição de IP: ${time.ticks() - start} ms — ${data.body}')
    wg.done()
}

fn main() {
    mut wg := sync.new_waitgroup()
    wg.add(2)
    spawn fetch_time(mut wg)
    spawn fetch_ip(mut wg)
    wg.wait()
}
```

## Canais

Canais permitem comunicação segura entre threads:

```v
fn producer(ch chan int) {
    for i in 1 .. 6 {
        ch <- i  // envia para o canal
    }
    ch.close()
}

fn main() {
    ch := chan int{cap: 5}
    spawn producer(ch)

    for val in ch {
        println(val)
    }
}
```

## Mutexes

Use `sync.Mutex` para proteger estado compartilhado:

```v
import sync

struct Counter {
mut:
    mu    sync.Mutex
    value int
}

fn (mut c Counter) increment() {
    c.mu.lock()
    c.value++
    c.mu.unlock()
}
```

## `defer`

`defer` executa uma instrução quando a função ao redor retorna — útil para limpeza:

```v
import os

fn process_file(path string) {
    f := os.open(path) or { return }
    defer { f.close() }

    // usa f — será fechado automaticamente
    println(f.read_to_string() or { '' })
}
```
