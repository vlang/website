# Parallellitet

V bruker lette tråder (goroutiner) for å kjøre arbeid parallelt. Nøkkelordet `spawn` starter en funksjon i en ny tråd.

## Grunnleggende oppretting

```v
import time

fn expensive_computing(id int, duration int) {
    println('Starter oppgave ${id}...')
    time.sleep(duration * time.millisecond)
    println('Fullførte oppgave ${id} på ${duration} ms')
}

fn main() {
    mut threads := []thread{}
    threads << spawn expensive_computing(1, 100)
    threads << spawn expensive_computing(2, 500)
    threads << spawn expensive_computing(3, 1000)

    // Vent på at alle tråder er ferdig
    threads.wait()
    println('Alle jobber er fullført!')
}
```

## Hente returverdier

Tråder kan returnere verdier. Å kalle `.wait()` på en `[]thread T` returnerer `[]T`:

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
    println('Alle jobber er fullført: ${results}')
    // [1, 4, 9, 16, 25, 36, 49, 64, 81]
}
```

## Parallelle HTTP-forespørsler

```v
import net.http
import sync
import time

fn fetch_time(mut wg sync.WaitGroup) {
    start := time.ticks()
    data := http.get('https://vlang.io/utc_now') or { return }
    println('Tidsforespørsel: ${time.ticks() - start} ms — ${data.body}')
    wg.done()
}

fn fetch_ip(mut wg sync.WaitGroup) {
    start := time.ticks()
    data := http.get('https://api.ipify.org') or { return }
    println('IP-forespørsel: ${time.ticks() - start} ms — ${data.body}')
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

## Kanaler

Kanaler muliggjør sikker kommunikasjon mellom tråder:

```v
fn producer(ch chan int) {
    for i in 1 .. 6 {
        ch <- i  // send til kanal
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

## Mutexter

Bruk `sync.Mutex` for å beskytte delt tilstand:

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

`defer` utfører en setning når den omsluttende funksjonen returnerer — nyttig for opprydding:

```v
import os

fn process_file(path string) {
    f := os.open(path) or { return }
    defer { f.close() }

    // bruk f — den vil bli lukket automatisk
    println(f.read_to_string() or { '' })
}
```
