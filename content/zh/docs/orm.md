# ORM

V 内置了支持 SQLite、PostgreSQL、MySQL 和 MSSQL 的 ORM。无需外部库。

## 定义模型

使用 `@[table: 'table_name']` 属性将结构体映射到数据库表：

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

## SQL 语法（内置 DSL）

V 提供了简洁的类 SQL DSL 用于查询：

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

    // 创建表
    sql db { create table User }!

    // 插入
    sql db { insert user1 into User }!
    sql db { insert user2 into User }!

    // 查询所有
    all_users := sql db { select from User }!
    dump(all_users)

    // 条件查询
    alice := sql db { select from User where id == '001' }!
    dump(alice)

    // 更新
    sql db { update User set name = 'Alice Smith' where id == '001' }!

    // 删除
    sql db { delete from User where id == '002' }!

    // 删除表
    sql db { drop table User }!
}
```

## 查询构造器语法

还提供了另一种流式查询构造器 API：

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

    // 查询所有
    all := qb.query()!
    dump(all)

    // 过滤
    cheap := qb.where('price < ?', 15.0)!.query()!
    dump(cheap)

    // 更新
    qb.set('price = ?', 12.99)!.where('id = ?', 'p1')!.update()!

    // 删除
    qb.where('id = ?', 'p2')!.delete()!
}
```

## PostgreSQL 示例

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

    // 同样的 SQL DSL 也适用于 PostgreSQL
    users := sql db { select from User }!
    println(users)
}
```
