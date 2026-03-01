# JSON

V, `json` modülünde yerleşik JSON kodlama ve kod çözme desteğine sahiptir — harici kütüphane gerekmez.

## JSON'u Çözme

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
        eprintln('Failed to parse json')
        return
    }

    for user in users {
        println('${user.name}: ${user.age}')
    }
}
```

## JSON Kodlama

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

## Özel Alan Adları

Yapı alanlarını farklı JSON anahtarlarına eşlemek için `@[json: 'field_name']` özelliğini kullanın:

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

## Alanları Atlamak

Bir alanı JSON seri hale getirmeden dışlamak için `@[json: '-']` kullanın:

```v
struct User {
    name     string
    email    string
    password string @[json: '-']  // JSON çıktısına hiçbir zaman dahil edilmez
}
```

## İsteğe Bağlı / Null Olabilir Alanlar

JSON'da bulunmayabilecek alanlar için option türlerini kullanın:

```v
import json

struct Profile {
    name   string
    bio    ?string   // isteğe bağlı — null veya yoksa
    age    ?int
}

fn main() {
    raw := '{"name":"Alice"}'
    p := json.decode(Profile, raw) or { panic(err) }
    println(p.name) // Alice
    println(p.bio)  // Option(none)
}
```

## İç İçe Yapılar

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
