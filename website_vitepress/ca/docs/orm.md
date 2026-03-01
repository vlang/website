# ORM

V inclou un ORM integrat que suporta SQLite, PostgreSQL, MySQL i MSSQL. No cal cap biblioteca externa.

## Definir un Model

Usa l'atribut `@[table: 'table_name']` per mapejar una estructura a una taula de base de dades:

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

## Sintaxi SQL (DSL Integrat)

V proporciona un DSL semblant a SQL net per a consultes:

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

    // Crea la taula
    sql db { create table User }!

    // Insereix
    sql db { insert user1 into User }!
    sql db { insert user2 into User }!

    // Selecciona tot
    all_users := sql db { select from User }!
    dump(all_users)

    // Selecciona amb condició
    alice := sql db { select from User where id == '001' }!
    dump(alice)

    // Actualitza
    sql db { update User set name = 'Alice Smith' where id == '001' }!

    // Elimina
    sql db { delete from User where id == '002' }!

    // Elimina la taula
    sql db { drop table User }!
}
```

## Sintaxi del Constructor de Consultes

També hi ha disponible una API fluent alternativa per a construcció de consultes:

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

    // Obté tot
    all := qb.query()!
    dump(all)

    // Filtra
    cheap := qb.where('price < ?', 15.0)!.query()!
    dump(cheap)

    // Actualitza
    qb.set('price = ?', 12.99)!.where('id = ?', 'p1')!.update()!

    // Elimina
    qb.where('id = ?', 'p2')!.delete()!
}
```

## Exemple amb PostgreSQL

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

    // el mateix DSL SQL funciona amb PostgreSQL
    users := sql db { select from User }!
    println(users)
}
```
