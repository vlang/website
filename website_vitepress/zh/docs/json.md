# JSON

V 在 `json` 模块中内置了 JSON 编码和解码功能——无需外部库。

## 解码 JSON

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

## 编码 JSON

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

## 自定义字段名

使用 `@[json: 'field_name']` 属性将结构体字段映射到不同的 JSON 键：

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

## 跳过字段

使用 `@[json: '-']` 从 JSON 序列化中排除某个字段：

```v
struct User {
    name     string
    email    string
    password string @[json: '-']  // 永远不包含在 JSON 输出中
}
```

## 可选/可空字段

对可能在 JSON 中缺失的字段使用 option 类型：

```v
import json

struct Profile {
    name   string
    bio    ?string   // 可选——可能为 null 或缺失
    age    ?int
}

fn main() {
    raw := '{"name":"Alice"}'
    p := json.decode(Profile, raw) or { panic(err) }
    println(p.name) // Alice
    println(p.bio)  // Option(none)
}
```

## 嵌套结构体

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
