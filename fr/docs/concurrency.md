# Concurrence

V utilise des fils légers (goroutines) pour exécuter des tâches en parallèle. Le mot-clé `spawn` démarre une fonction dans un nouveau fil.

## Démarrage basique

```v
import time

fn expensive_computing(id int, duration int) {
    println('Démarrage de la tâche ${id}...')
    time.sleep(duration * time.millisecond)
    println('Tâche ${id} terminée en ${duration} ms')
}

fn main() {
    mut threads := []thread{}
    threads << spawn expensive_computing(1, 100)
    threads << spawn expensive_computing(2, 500)
    threads << spawn expensive_computing(3, 1000)

    // Attendre que tous les fils se terminent
    threads.wait()
    println('Toutes les tâches sont terminées !')
}
```

## Récupérer des valeurs de retour

Les fils peuvent retourner des valeurs. Appeler `.wait()` sur un `[]thread T` retourne `[]T` :

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
    println('Toutes les tâches terminées : ${results}')
    // [1, 4, 9, 16, 25, 36, 49, 64, 81]
}
```

## Requêtes HTTP concurrentes

```v
import net.http
import sync
import time

fn fetch_time(mut wg sync.WaitGroup) {
    start := time.ticks()
    data := http.get('https://vlang.io/utc_now') or { return }
    println('Requête heure : ${time.ticks() - start} ms — ${data.body}')
    wg.done()
}

fn fetch_ip(mut wg sync.WaitGroup) {
    start := time.ticks()
    data := http.get('https://api.ipify.org') or { return }
    println('Requête IP : ${time.ticks() - start} ms — ${data.body}')
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

## Canaux

Les canaux permettent une communication sécurisée entre fils :

```v
fn producer(ch chan int) {
    for i in 1 .. 6 {
        ch <- i  // envoyer vers le canal
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

Utilisez `sync.Mutex` pour protéger un état partagé :

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

`defer` exécute une instruction lorsque la fonction environnante retourne — utile pour le nettoyage :

```v
import os

fn process_file(path string) {
    f := os.open(path) or { return }
    defer { f.close() }

    // utiliser f — il sera fermé automatiquement
    println(f.read_to_string() or { '' })
}
```
