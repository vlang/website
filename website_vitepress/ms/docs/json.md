# JSON

V mempunyai pengekodan dan penyahkodan JSON terbina dalam dalam modul `json` — tiada pustaka luaran diperlukan.

## Penyahkodan JSON

```v
import json

struct User {
    name string
    age  int
mut:
    is_registered bool
}

fn main() {
    s := '[{"name":"Frodo","age":25},{"name":"Bobby","age":10}]'

    mut users := json.decode([]User, s) or {
        eprintln('Gagal menghurai json')
        return
    }

    for user in users {
        println('${user.name}: ${user.age}')
    }
}
```

## Pengekodan JSON

```v
import json

struct Point {
    x int
    y int
}

fn main() {
    p := Point{x: 10, y: 20}
    encoded := json.encode(p)
    println(encoded) // {"x":10,"y":20}
}
```

## Nama Medan Tersuai

Gunakan atribut `@[json: 'field_name']` untuk memetakan medan struct kepada kunci JSON yang berbeza:

```v
import json

struct Config {
    api_key    string @[json: 'apiKey']
    base_url   string @[json: 'baseUrl']
    timeout_ms int    @[json: 'timeoutMs']
}

fn main() {
    raw := '{"apiKey":"abc123","baseUrl":"https://api.example.com","timeoutMs":3000}'
    cfg := json.decode(Config, raw) or { panic(err) }
    println(cfg.api_key)  // abc123
    println(cfg.base_url) // https://api.example.com
}
```

## Melangkau Medan

Gunakan `@[json: '-']` untuk mengecualikan medan daripada pensirian JSON:

```v
struct User {
    name     string
    email    string
    password string @[json: '-']  // tidak pernah disertakan dalam output JSON
}
```

## Medan Pilihan / Boleh Null

Gunakan jenis pilihan untuk medan yang mungkin tidak hadir dalam JSON:

```v
import json

struct Profile {
    name   string
    bio    ?string   // pilihan — mungkin null atau tidak hadir
    age    ?int
}

fn main() {
    raw := '{"name":"Alice"}'
    p := json.decode(Profile, raw) or { panic(err) }
    println(p.name) // Alice
    println(p.bio)  // Option(none)
}
```

## Struct Bersarang

```v
import json

struct Address {
    street string
    city   string
}

struct Person {
    name    string
    age     int
    address Address
}

fn main() {
    raw := '{"name":"Bob","age":30,"address":{"street":"123 Main St","city":"Sampletown"}}'
    p := json.decode(Person, raw) or { panic(err) }
    println(p.address.city) // Sampletown

    println(json.encode(p))
}
```
