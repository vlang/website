# Concurrencia

V usa hilos ligeros (goroutines) para ejecutar trabajo de forma concurrente. La palabra clave `spawn` inicia una función en un nuevo hilo.

## Lanzamiento Básico

```v
import time

fn expensive_computing(id int, duration int) {
    println('Iniciando tarea ${id}...')
    time.sleep(duration * time.millisecond)
    println('Tarea ${id} finalizada en ${duration} ms')
}

fn main() {
    mut threads := []thread{}
    threads << spawn expensive_computing(1, 100)
    threads << spawn expensive_computing(2, 500)
    threads << spawn expensive_computing(3, 1000)

    // Esperar a que todos los hilos terminen
    threads.wait()
    println('¡Todos los trabajos han finalizado!')
}
```

## Obtener Valores de Retorno

Los hilos pueden devolver valores. Llamar `.wait()` en un `[]thread T` devuelve `[]T`:

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
    println('Todos los trabajos terminados: ${results}')
    // [1, 4, 9, 16, 25, 36, 49, 64, 81]
}
```

## Peticiones HTTP Concurrentes

```v
import net.http
import sync
import time

fn fetch_time(mut wg sync.WaitGroup) {
    start := time.ticks()
    data := http.get('https://vlang.io/utc_now') or { return }
    println('Petición de tiempo: ${time.ticks() - start} ms — ${data.body}')
    wg.done()
}

fn fetch_ip(mut wg sync.WaitGroup) {
    start := time.ticks()
    data := http.get('https://api.ipify.org') or { return }
    println('Petición de IP: ${time.ticks() - start} ms — ${data.body}')
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

## Canales

Los canales permiten la comunicación segura entre hilos:

```v
fn producer(ch chan int) {
    for i in 1 .. 6 {
        ch <- i  // enviar al canal
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

Usa `sync.Mutex` para proteger el estado compartido:

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

`defer` ejecuta una sentencia cuando la función que la contiene retorna — útil para limpieza:

```v
import os

fn process_file(path string) {
    f := os.open(path) or { return }
    defer { f.close() }

    // usar f — se cerrará automáticamente
    println(f.read_to_string() or { '' })
}
```
