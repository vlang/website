# 并发

V 使用轻量级线程（协程）来并发执行工作。`spawn` 关键字在新线程中启动一个函数。

## 基本用法

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

    // 等待所有线程完成
    threads.wait()
    println('All jobs finished!')
}
```

## 获取返回值

线程可以返回值。对 `[]thread T` 调用 `.wait()` 会返回 `[]T`：

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

## 并发 HTTP 请求

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

## 通道

通道允许线程之间进行安全通信：

```v
fn producer(ch chan int) {
    for i in 1 .. 6 {
        ch <- i  // 发送到通道
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

## 互斥锁

使用 `sync.Mutex` 保护共享状态：

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

`defer` 在外围函数返回时执行语句——适用于清理操作：

```v
import os

fn process_file(path string) {
    f := os.open(path) or { return }
    defer { f.close() }

    // 使用 f — 它将被自动关闭
    println(f.read_to_string() or { '' })
}
```
