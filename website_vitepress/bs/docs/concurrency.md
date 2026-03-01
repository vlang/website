# Konkurentnost

V koristi lagane niti (goroutine) za paralelno izvršavanje rada. Ključna riječ `spawn` pokreće funkciju u novoj niti.

## Osnovno pokretanje niti

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

    // Čekaj da sve niti završe
    threads.wait()
    println('All jobs finished!')
}
```

## Dobivanje povratnih vrijednosti

Niti mogu vraćati vrijednosti. Pozivanje `.wait()` na `[]thread T` vraća `[]T`:

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

## Konkurentni HTTP zahtjevi

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

## Kanali

Kanali omogućavaju sigurnu komunikaciju između niti:

```v
fn producer(ch chan int) {
    for i in 1 .. 6 {
        ch <- i  // pošalji u kanal
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

## Mutexi

Koristite `sync.Mutex` za zaštitu dijeljenog stanja:

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

`defer` izvršava naredbu kada se okolna funkcija vrati — korisno za čišćenje:

```v
import os

fn process_file(path string) {
    f := os.open(path) or { return }
    defer { f.close() }

    // koristi f — bit će automatski zatvoren
    println(f.read_to_string() or { '' })
}
```
