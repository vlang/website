# ORM

VにはSQLite、PostgreSQL、MySQL、MSSQLをサポートする組み込みORMが含まれています。外部ライブラリは不要です。

## モデルの定義

`@[table: 'table_name']`属性を使用して構造体をデータベーステーブルにマップします：

```v
import db.sqlite
import time

@[table: 'users']
struct User {
pub:
    id         int       @[primary; sql: serial]
    name       string    @[sql_type: 'VARCHAR(255)']
    email      string    @[unique; sql_type: 'VARCHAR(255)']
    created_at time.Time @[sql_type: 'TIMESTAMP']
}
```

## SQL構文（組み込みDSL）

VはクエリのためのクリーンなSQL風DSLを提供します：

```v
import db.sqlite
import time

@[table: 'sys_users']
struct User {
pub:
    id    string @[primary; sql: 'id']
    name  string @[sql: 'name']
}

fn main() {
    mut db := sqlite.connect(':memory:')!
    defer { db.close() or {} }

    user1 := User{id: '001', name: 'Alice'}
    user2 := User{id: '002', name: 'Bob'}

    // テーブルを作成
    sql db { create table User }!

    // 挿入
    sql db { insert user1 into User }!
    sql db { insert user2 into User }!

    // 全件取得
    all_users := sql db { select from User }!
    dump(all_users)

    // 条件付き取得
    alice := sql db { select from User where id == '001' }!
    dump(alice)

    // 更新
    sql db { update User set name = 'Alice Smith' where id == '001' }!

    // 削除
    sql db { delete from User where id == '002' }!

    // テーブルを削除
    sql db { drop table User }!
}
```

## クエリビルダー構文

代替のフルエントクエリビルダーAPIも利用可能です：

```v
import db.sqlite
import orm

@[table: 'products']
struct Product {
pub:
    id    string @[primary]
    name  string
    price f64
}

fn main() {
    mut db := sqlite.connect(':memory:')!
    defer { db.close() or {} }

    mut qb := orm.new_query[Product](db)
    qb.create()!

    qb.insert(Product{id: 'p1', name: 'Widget', price: 9.99})!
    qb.insert(Product{id: 'p2', name: 'Gadget', price: 19.99})!

    // 全件取得
    all := qb.query()!
    dump(all)

    // フィルタリング
    cheap := qb.where('price < ?', 15.0)!.query()!
    dump(cheap)

    // 更新
    qb.set('price = ?', 12.99)!.where('id = ?', 'p1')!.update()!

    // 削除
    qb.where('id = ?', 'p2')!.delete()!
}
```

## PostgreSQLの例

```v
import db.pg

fn main() {
    mut db := pg.connect(pg.Config{
        host:     'localhost'
        user:     'myuser'
        password: 'mypass'
        dbname:   'mydb'
    })!
    defer { db.close() }

    // 同じSQL DSLがPostgreSQLでも動作します
    users := sql db { select from User }!
    println(users)
}
```
