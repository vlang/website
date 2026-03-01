# JSON

V tiene codificación y decodificación JSON integrada en el módulo `json` — no se necesita ninguna biblioteca externa.

## Decodificar JSON

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
        eprintln('Error al analizar json')
        return
    }

    for user in users {
        println('${user.name}: ${user.age}')
    }
}
```

## Codificar JSON

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

## Nombres de Campo Personalizados

Usa el atributo `@[json: 'nombre_campo']` para mapear campos de struct a claves JSON diferentes:

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

## Omitir Campos

Usa `@[json: '-']` para excluir un campo de la serialización JSON:

```v
struct User {
    name     string
    email    string
    password string @[json: '-']  // nunca incluido en la salida JSON
}
```

## Campos Opcionales / Anulables

Usa tipos option para campos que pueden estar ausentes en el JSON:

```v
import json

struct Profile {
    name   string
    bio    ?string   // opcional — puede ser null o estar ausente
    age    ?int
}

fn main() {
    raw := '{"name":"Alice"}'
    p := json.decode(Profile, raw) or { panic(err) }
    println(p.name) // Alice
    println(p.bio)  // Option(none)
}
```

## Structs Anidados

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
