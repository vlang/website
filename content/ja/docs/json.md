# JSON

Vには`json`モジュールに組み込みのJSONエンコードとデコードがあります — 外部ライブラリは不要です。

## JSONのデコード

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

## JSONのエンコード

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

## カスタムフィールド名

`@[json: 'field_name']`属性を使用して構造体フィールドを異なるJSONキーにマップします：

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

## フィールドのスキップ

`@[json: '-']`を使用してJSONシリアライゼーションからフィールドを除外します：

```v
struct User {
    name     string
    email    string
    password string @[json: '-']  // JSON出力には含まれない
}
```

## オプション/Nullableフィールド

JSONに存在しない可能性があるフィールドにはオプション型を使用します：

```v
import json

struct Profile {
    name   string
    bio    ?string   // オプション — nullまたは存在しない場合がある
    age    ?int
}

fn main() {
    raw := '{"name":"Alice"}'
    p := json.decode(Profile, raw) or { panic(err) }
    println(p.name) // Alice
    println(p.bio)  // Option(none)
}
```
