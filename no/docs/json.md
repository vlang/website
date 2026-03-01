# JSON

V har innebygd JSON-koding og -dekoding i `json`-modulen — ingen ekstern pakke nødvendig.

## Dekode JSON

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
        eprintln('Klarte ikke å analysere json')
        return
    }

    for user in users {
        println('${user.name}: ${user.age}')
    }
}
```

## Kode JSON

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

## Egendefinerte feltnavn

Bruk attributtet `@[json: 'field_name']` for å tilordne strukturfelt til andre JSON-nøkler:

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

## Hoppe over felt

Bruk `@[json: '-']` for å utelate et felt fra JSON-serialisering:

```v
struct User {
    name     string
    email    string
    password string @[json: '-']  // aldri inkludert i JSON-utdata
}
```

## Valgfrie / nullbare felt

Bruk option-typer for felt som kanskje ikke er til stede i JSON:

```v
import json

struct Profile {
    name   string
    bio    ?string   // valgfri — kan være null eller fraværende
    age    ?int
}

fn main() {
    raw := '{"name":"Alice"}'
    p := json.decode(Profile, raw) or { panic(err) }
    println(p.name) // Alice
    println(p.bio)  // Option(none)
}
```

## Nestede strukturer

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
