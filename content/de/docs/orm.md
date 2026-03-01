# ORM

V enthält ein eingebautes ORM, das SQLite, PostgreSQL, MySQL und MSSQL unterstützt. Keine externe Bibliothek erforderlich.

## Ein Modell definieren

Verwende das `@[table: 'table_name']`-Attribut, um einen Struct auf eine Datenbanktabelle abzubilden:

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

## SQL-Syntax (Eingebaute DSL)

V bietet eine übersichtliche SQL-ähnliche DSL für Abfragen:

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

    // Tabelle erstellen
    sql db { create table User }!

    // Einfügen
    sql db { insert user1 into User }!
    sql db { insert user2 into User }!

    // Alle auswählen
    all_users := sql db { select from User }!
    dump(all_users)

    // Mit Bedingung auswählen
    alice := sql db { select from User where id == '001' }!
    dump(alice)

    // Aktualisieren
    sql db { update User set name = 'Alice Smith' where id == '001' }!

    // Löschen
    sql db { delete from User where id == '002' }!

    // Tabelle löschen
    sql db { drop table User }!
}
```

## Query-Builder-Syntax

Eine alternative, fließende Query-Builder-API ist ebenfalls verfügbar:

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

    // Alle abrufen
    all := qb.query()!
    dump(all)

    // Filtern
    cheap := qb.where('price < ?', 15.0)!.query()!
    dump(cheap)

    // Aktualisieren
    qb.set('price = ?', 12.99)!.where('id = ?', 'p1')!.update()!

    // Löschen
    qb.where('id = ?', 'p2')!.delete()!
}
```

## PostgreSQL-Beispiel

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

    // dieselbe SQL-DSL funktioniert auch mit PostgreSQL
    users := sql db { select from User }!
    println(users)
}
```
