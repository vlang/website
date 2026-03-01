# ORM

V, SQLite, PostgreSQL, MySQL ve MSSQL destekleyen yerleşik bir ORM içerir. Harici kütüphane gerekmez.

## Model Tanımlama

Bir yapıyı veritabanı tablosuna eşlemek için `@[table: 'table_name']` özelliğini kullanın:

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

## SQL Sözdizimi (Yerleşik DSL)

V, sorgular için temiz bir SQL benzeri DSL sunar:

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

    // Tablo oluştur
    sql db { create table User }!

    // Ekle
    sql db { insert user1 into User }!
    sql db { insert user2 into User }!

    // Tümünü seç
    all_users := sql db { select from User }!
    dump(all_users)

    // Koşullu seç
    alice := sql db { select from User where id == '001' }!
    dump(alice)

    // Güncelle
    sql db { update User set name = 'Alice Smith' where id == '001' }!

    // Sil
    sql db { delete from User where id == '002' }!

    // Tabloyu düşür
    sql db { drop table User }!
}
```

## Sorgu Oluşturucu Sözdizimi

Alternatif bir akıcı sorgu oluşturucu API'si de mevcuttur:

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

    // Tümünü getir
    all := qb.query()!
    dump(all)

    // Filtrele
    cheap := qb.where('price < ?', 15.0)!.query()!
    dump(cheap)

    // Güncelle
    qb.set('price = ?', 12.99)!.where('id = ?', 'p1')!.update()!

    // Sil
    qb.where('id = ?', 'p2')!.delete()!
}
```

## PostgreSQL Örneği

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

    // aynı SQL DSL PostgreSQL ile de çalışır
    users := sql db { select from User }!
    println(users)
}
```
