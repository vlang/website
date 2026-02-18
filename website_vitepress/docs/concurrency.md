# Concurrency

V uses lightweight threads (goroutines) to run work concurrently. The `spawn` keyword starts a function in a new thread.

## Basic Spawning

```go
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

    // Wait for all threads to finish
    threads.wait()
    println('All jobs finished!')
}
```

## Getting Return Values

Threads can return values. Calling `.wait()` on a `[]thread T` returns `[]T`:

```go
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

## Concurrent HTTP Requests

```go
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

## Channels

Channels allow safe communication between threads:

```go
fn producer(ch chan int) {
    for i in 1 .. 6 {
        ch <- i  // send to channel
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

Use `sync.Mutex` to protect shared state:

```go
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

`defer` executes a statement when the surrounding function returns — useful for cleanup:

```go
import os

fn process_file(path string) {
    f := os.open(path) or { return }
    defer { f.close() }

    // use f — it will be closed automatically
    println(f.read_to_string() or { '' })
}
```
