# ORM

V menyertakan ORM bawaan yang mendukung SQLite, PostgreSQL, MySQL, dan MSSQL. Tidak perlu pustaka eksternal.

## Mendefinisikan Model

Gunakan atribut `@[table: 'table_name']` untuk memetakan struct ke tabel database:

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

## Sintaks SQL (DSL Bawaan)

V menyediakan DSL mirip SQL yang bersih untuk kueri:

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

    // Buat tabel
    sql db { create table User }!

    // Sisipkan
    sql db { insert user1 into User }!
    sql db { insert user2 into User }!

    // Pilih semua
    all_users := sql db { select from User }!
    dump(all_users)

    // Pilih dengan kondisi
    alice := sql db { select from User where id == '001' }!
    dump(alice)

    // Perbarui
    sql db { update User set name = 'Alice Smith' where id == '001' }!

    // Hapus
    sql db { delete from User where id == '002' }!

    // Hapus tabel
    sql db { drop table User }!
}
```

## Sintaks Query Builder

API query builder yang lebih fleksibel juga tersedia:

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

    // Ambil semua
    all := qb.query()!
    dump(all)

    // Filter
    cheap := qb.where('price < ?', 15.0)!.query()!
    dump(cheap)

    // Perbarui
    qb.set('price = ?', 12.99)!.where('id = ?', 'p1')!.update()!

    // Hapus
    qb.where('id = ?', 'p2')!.delete()!
}
```

## Contoh PostgreSQL

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

    // DSL SQL yang sama bekerja dengan PostgreSQL
    users := sql db { select from User }!
    println(users)
}
```
