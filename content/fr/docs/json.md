# JSON

V dispose d'un encodage et d'un décodage JSON intégrés dans le module `json` — aucune bibliothèque externe n'est nécessaire.

## Décoder du JSON

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
        eprintln('\u00c9chec de l\'analyse JSON')
        return
    }

    for user in users {
        println('${user.name}: ${user.age}')
    }
}
```

## Encoder en JSON

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

## Noms de champs personnalisés

Utilisez l'attribut `@[json: 'nom_champ']` pour associer des champs de struct à des clés JSON différentes :

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

## Ignorer des champs

Utilisez `@[json: '-']` pour exclure un champ de la sérialisation JSON :

```v
struct User {
    name     string
    email    string
    password string @[json: '-']  // jamais inclus dans la sortie JSON
}
```

## Champs optionnels / nullable

Utilisez des types option pour les champs qui peuvent être absents dans le JSON :

```v
import json

struct Profile {
    name   string
    bio    ?string   // optionnel — peut être null ou absent
    age    ?int
}

fn main() {
    raw := '{"name":"Alice"}'
    p := json.decode(Profile, raw) or { panic(err) }
    println(p.name) // Alice
    println(p.bio)  // Option(none)
}
```

## Structs imbriqués

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
