# 並行処理

Vは軽量スレッド（ゴルーチン）を使って作業を並行して実行します。`spawn`キーワードで新しいスレッドで関数を開始します。

## 基本的なスポーン

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

    // すべてのスレッドの終了を待つ
    threads.wait()
    println('All jobs finished!')
}
```

## 戻り値の取得

スレッドは値を返すことができます。`[]thread T`に対して`.wait()`を呼び出すと`[]T`が返されます：

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

## 並行HTTPリクエスト

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

## チャネル

チャネルはスレッド間の安全な通信を可能にします：

```v
fn producer(ch chan int) {
    for i in 1 .. 6 {
        ch <- i  // チャネルに送信
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

## ミューテックス

共有状態を保護するために`sync.Mutex`を使用します：

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

`defer`は囲む関数が返るときにステートメントを実行します — クリーンアップに便利：

```v
import os

fn process_file(path string) {
    f := os.open(path) or { return }
    defer { f.close() }

    // f を使用 — 自動的にクローズされる
    println(f.read_to_string() or { '' })
}
```
