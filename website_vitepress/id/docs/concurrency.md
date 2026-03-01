# Konkurensi

V menggunakan thread ringan (goroutine) untuk menjalankan pekerjaan secara bersamaan. Kata kunci `spawn` memulai sebuah fungsi dalam thread baru.

## Pembuatan Thread Dasar

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

    // Tunggu semua thread selesai
    threads.wait()
    println('All jobs finished!')
}
```

## Mendapatkan Nilai Kembalian

Thread dapat mengembalikan nilai. Memanggil `.wait()` pada `[]thread T` mengembalikan `[]T`:

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

## Permintaan HTTP Bersamaan

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

## Channel

Channel memungkinkan komunikasi yang aman antar thread:

```v
fn producer(ch chan int) {
    for i in 1 .. 6 {
        ch <- i  // kirim ke channel
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

## Mutex

Gunakan `sync.Mutex` untuk melindungi state yang dipakai bersama:

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

`defer` mengeksekusi sebuah pernyataan ketika fungsi yang melingkupinya kembali — berguna untuk pembersihan:

```v
import os

fn process_file(path string) {
    f := os.open(path) or { return }
    defer { f.close() }

    // gunakan f — akan ditutup secara otomatis
    println(f.read_to_string() or { '' })
}
```
