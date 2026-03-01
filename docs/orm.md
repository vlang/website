# ORM

V includes a built-in ORM that supports SQLite, PostgreSQL, MySQL, and MSSQL. No external library needed.

## Defining a Model

Use the `@[table: 'table_name']` attribute to map a struct to a database table:

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

## SQL Syntax (Built-in DSL)

V provides a clean SQL-like DSL for queries:

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

    // Create table
    sql db { create table User }!

    // Insert
    sql db { insert user1 into User }!
    sql db { insert user2 into User }!

    // Select all
    all_users := sql db { select from User }!
    dump(all_users)

    // Select with condition
    alice := sql db { select from User where id == '001' }!
    dump(alice)

    // Update
    sql db { update User set name = 'Alice Smith' where id == '001' }!

    // Delete
    sql db { delete from User where id == '002' }!

    // Drop table
    sql db { drop table User }!
}
```

## Query Builder Syntax

An alternative fluent query builder API is also available:

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

    // Fetch all
    all := qb.query()!
    dump(all)

    // Filter
    cheap := qb.where('price < ?', 15.0)!.query()!
    dump(cheap)

    // Update
    qb.set('price = ?', 12.99)!.where('id = ?', 'p1')!.update()!

    // Delete
    qb.where('id = ?', 'p2')!.delete()!
}
```

## PostgreSQL Example

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

    // same SQL DSL works with PostgreSQL
    users := sql db { select from User }!
    println(users)
}
```
