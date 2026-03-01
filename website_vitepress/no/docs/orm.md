# ORM

V inkluderer et innebygd ORM som støtter SQLite, PostgreSQL, MySQL og MSSQL. Ingen ekstern pakke nødvendig.

## Definere en modell

Bruk attributtet `@[table: 'table_name']` for å tilordne en struktur til en databasetabell:

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

## SQL-syntaks (innebygd DSL)

V gir en ren SQL-lignende DSL for spørringer:

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

    // Opprett tabell
    sql db { create table User }!

    // Sett inn
    sql db { insert user1 into User }!
    sql db { insert user2 into User }!

    // Velg alle
    all_users := sql db { select from User }!
    dump(all_users)

    // Velg med betingelse
    alice := sql db { select from User where id == '001' }!
    dump(alice)

    // Oppdater
    sql db { update User set name = 'Alice Smith' where id == '001' }!

    // Slett
    sql db { delete from User where id == '002' }!

    // Dropp tabell
    sql db { drop table User }!
}
```

## Spørrebyggersyntaks

Et alternativt flytende spørrebygger-API er også tilgjengelig:

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

    // Hent alle
    all := qb.query()!
    dump(all)

    // Filtrer
    cheap := qb.where('price < ?', 15.0)!.query()!
    dump(cheap)

    // Oppdater
    qb.set('price = ?', 12.99)!.where('id = ?', 'p1')!.update()!

    // Slett
    qb.where('id = ?', 'p2')!.delete()!
}
```

## PostgreSQL-eksempel

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

    // samme SQL DSL fungerer med PostgreSQL
    users := sql db { select from User }!
    println(users)
}
```
