# Keselarasan

V menggunakan benang ringan (goroutine) untuk menjalankan kerja secara selari. Kata kunci `spawn` memulakan fungsi dalam benang baru.

## Penjanaan Asas

```v
import time

fn expensive_computing(id int, duration int) {
    println('Memulakan tugas ${id}...')
    time.sleep(duration * time.millisecond)
    println('Selesai tugas ${id} dalam ${duration} ms')
}

fn main() {
    mut threads := []thread{}
    threads << spawn expensive_computing(1, 100)
    threads << spawn expensive_computing(2, 500)
    threads << spawn expensive_computing(3, 1000)

    // Tunggu semua benang selesai
    threads.wait()
    println('Semua kerja selesai!')
}
```

## Mendapatkan Nilai Pulangan

Benang boleh mengembalikan nilai. Memanggil `.wait()` pada `[]thread T` mengembalikan `[]T`:

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
    println('Semua kerja selesai: ${results}')
    // [1, 4, 9, 16, 25, 36, 49, 64, 81]
}
```

## Permintaan HTTP Serentak

```v
import net.http
import sync
import time

fn fetch_time(mut wg sync.WaitGroup) {
    start := time.ticks()
    data := http.get('https://vlang.io/utc_now') or { return }
    println('Permintaan masa: ${time.ticks() - start} ms — ${data.body}')
    wg.done()
}

fn fetch_ip(mut wg sync.WaitGroup) {
    start := time.ticks()
    data := http.get('https://api.ipify.org') or { return }
    println('Permintaan IP: ${time.ticks() - start} ms — ${data.body}')
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

## Saluran

Saluran membolehkan komunikasi selamat antara benang:

```v
fn producer(ch chan int) {
    for i in 1 .. 6 {
        ch <- i  // hantar ke saluran
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

Gunakan `sync.Mutex` untuk melindungi keadaan dikongsi:

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

`defer` melaksanakan pernyataan apabila fungsi sekitarnya pulang — berguna untuk pembersihan:

```v
import os

fn process_file(path string) {
    f := os.open(path) or { return }
    defer { f.close() }

    // gunakan f — ia akan ditutup secara automatik
    println(f.read_to_string() or { '' })
}
```
