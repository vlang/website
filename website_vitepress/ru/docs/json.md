# JSON

V имеет встроенную поддержку кодирования и декодирования JSON в модуле `json` — внешние библиотеки не нужны.

## Декодирование JSON

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

## Кодирование JSON

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

## Пользовательские имена полей

Используйте атрибут `@[json: 'field_name']` для отображения полей структуры на другие ключи JSON:

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

## Пропуск полей

Используйте `@[json: '-']` для исключения поля из сериализации JSON:

```v
struct User {
    name     string
    email    string
    password string @[json: '-']  // никогда не включается в JSON-вывод
}
```

## Опциональные / допускающие null поля

Используйте опциональные типы для полей, которые могут отсутствовать в JSON:

```v
import json

struct Profile {
    name   string
    bio    ?string   // опциональное — может быть null или отсутствовать
    age    ?int
}

fn main() {
    raw := '{"name":"Alice"}'
    p := json.decode(Profile, raw) or { panic(err) }
    println(p.name) // Alice
    println(p.bio)  // Option(none)
}
```

## Вложенные структуры

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
