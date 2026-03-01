# ORM

V включает встроенный ORM с поддержкой SQLite, PostgreSQL, MySQL и MSSQL. Внешние библиотеки не нужны.

## Определение модели

Используйте атрибут `@[table: 'table_name']` для привязки структуры к таблице базы данных:

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

## SQL-синтаксис (встроенный DSL)

V предоставляет чистый SQL-подобный DSL для выполнения запросов:

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

    // Создать таблицу
    sql db { create table User }!

    // Вставить
    sql db { insert user1 into User }!
    sql db { insert user2 into User }!

    // Выбрать все записи
    all_users := sql db { select from User }!
    dump(all_users)

    // Выбрать с условием
    alice := sql db { select from User where id == '001' }!
    dump(alice)

    // Обновить
    sql db { update User set name = 'Alice Smith' where id == '001' }!

    // Удалить
    sql db { delete from User where id == '002' }!

    // Удалить таблицу
    sql db { drop table User }!
}
```

## Синтаксис построителя запросов

Также доступен альтернативный текучий API-построитель запросов:

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

    // Получить все
    all := qb.query()!
    dump(all)

    // Фильтрация
    cheap := qb.where('price < ?', 15.0)!.query()!
    dump(cheap)

    // Обновление
    qb.set('price = ?', 12.99)!.where('id = ?', 'p1')!.update()!

    // Удаление
    qb.where('id = ?', 'p2')!.delete()!
}
```

## Пример с PostgreSQL

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

    // тот же SQL DSL работает и с PostgreSQL
    users := sql db { select from User }!
    println(users)
}
```
