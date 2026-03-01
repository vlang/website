# JSON

V hat eingebaute JSON-Kodierung und -Dekodierung im `json`-Modul — keine externe Bibliothek erforderlich.

## JSON dekodieren

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

## JSON kodieren

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

## Benutzerdefinierte Feldnamen

Verwende das `@[json: 'field_name']`-Attribut, um Struct-Felder auf verschiedene JSON-Schlüssel abzubilden:

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

## Felder überspringen

Verwende `@[json: '-']`, um ein Feld von der JSON-Serialisierung auszuschließen:

```v
struct User {
    name     string
    email    string
    password string @[json: '-']  // niemals in der JSON-Ausgabe enthalten
}
```

## Optionale / Nullable Felder

Verwende Option-Typen für Felder, die im JSON möglicherweise fehlen:

```v
import json

struct Profile {
    name   string
    bio    ?string   // optional — kann null oder nicht vorhanden sein
    age    ?int
}

fn main() {
    raw := '{"name":"Alice"}'
    p := json.decode(Profile, raw) or { panic(err) }
    println(p.name) // Alice
    println(p.bio)  // Option(none)
}
```

## Verschachtelte Structs

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
