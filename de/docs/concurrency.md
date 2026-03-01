# Nebenläufigkeit

V verwendet leichtgewichtige Threads (Goroutines), um Arbeit nebenläufig auszuführen. Das Schlüsselwort `spawn` startet eine Funktion in einem neuen Thread.

## Grundlegendes Spawning

```v
import time

fn expensive_computing(id int, duration int) {
    println('Starting task ${id}...')
    time.sleep(duration * time.millisecond)
    println('Finished task ${id} in ${duration} ms')
}

fn main() {
    mut threads := []thread{}
    threads << spawn expensive_computing(1, 100)
    threads << spawn expensive_computing(2, 500)
    threads << spawn expensive_computing(3, 1000)

    // Warten, bis alle Threads fertig sind
    threads.wait()
    println('All jobs finished!')
}
```

## Rückgabewerte erhalten

Threads können Werte zurückgeben. `.wait()` auf einem `[]thread T` gibt `[]T` zurück:

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
    println('All jobs finished: ${results}')
    // [1, 4, 9, 16, 25, 36, 49, 64, 81]
}
```

## Nebenläufige HTTP-Anfragen

```v
import net.http
import sync
import time

fn fetch_time(mut wg sync.WaitGroup) {
    start := time.ticks()
    data := http.get('https://vlang.io/utc_now') or { return }
    println('Time request: ${time.ticks() - start} ms — ${data.body}')
    wg.done()
}

fn fetch_ip(mut wg sync.WaitGroup) {
    start := time.ticks()
    data := http.get('https://api.ipify.org') or { return }
    println('IP request: ${time.ticks() - start} ms — ${data.body}')
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

## Kanäle (Channels)

Kanäle ermöglichen sichere Kommunikation zwischen Threads:

```v
fn producer(ch chan int) {
    for i in 1 .. 6 {
        ch <- i  // an Kanal senden
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

## Mutexe

Verwende `sync.Mutex`, um gemeinsam genutzten Zustand zu schützen:

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

`defer` führt eine Anweisung aus, wenn die umgebende Funktion zurückkehrt — nützlich zur Bereinigung:

```v
import os

fn process_file(path string) {
    f := os.open(path) or { return }
    defer { f.close() }

    // f verwenden — es wird automatisch geschlossen
    println(f.read_to_string() or { '' })
}
```
