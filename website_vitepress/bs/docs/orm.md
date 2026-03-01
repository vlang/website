# ORM

V uključuje ugrađeni ORM koji podržava SQLite, PostgreSQL, MySQL i MSSQL. Nije potrebna vanjska biblioteka.

## Definisanje modela

Koristite atribut `@[table: 'table_name']` za mapiranje strukture na tabelu baze podataka:

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

## SQL sintaksa (ugrađeni DSL)

V pruža čist SQL-nalik DSL za upite:

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

    // Kreiranje tabele
    sql db { create table User }!

    // Umetanje
    sql db { insert user1 into User }!
    sql db { insert user2 into User }!

    // Odabir svih
    all_users := sql db { select from User }!
    dump(all_users)

    // Odabir s uvjetom
    alice := sql db { select from User where id == '001' }!
    dump(alice)

    // Ažuriranje
    sql db { update User set name = 'Alice Smith' where id == '001' }!

    // Brisanje
    sql db { delete from User where id == '002' }!

    // Brisanje tabele
    sql db { drop table User }!
}
```

## Sintaksa graditelja upita

Na raspolaganju je i alternativni fluent API graditelja upita:

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

    // Dohvatanje svega
    all := qb.query()!
    dump(all)

    // Filtriranje
    cheap := qb.where('price < ?', 15.0)!.query()!
    dump(cheap)

    // Ažuriranje
    qb.set('price = ?', 12.99)!.where('id = ?', 'p1')!.update()!

    // Brisanje
    qb.where('id = ?', 'p2')!.delete()!
}
```

## Primjer s PostgreSQL-om

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

    // isti SQL DSL radi s PostgreSQL-om
    users := sql db { select from User }!
    println(users)
}
```
