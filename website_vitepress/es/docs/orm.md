# ORM

V incluye un ORM integrado que soporta SQLite, PostgreSQL, MySQL y MSSQL. No se necesita ninguna biblioteca externa.

## Definir un Modelo

Usa el atributo `@[table: 'nombre_tabla']` para mapear un struct a una tabla de base de datos:

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

## Sintaxis SQL (DSL Integrado)

V proporciona un DSL limpio similar a SQL para las consultas:

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

    // Crear tabla
    sql db { create table User }!

    // Insertar
    sql db { insert user1 into User }!
    sql db { insert user2 into User }!

    // Seleccionar todo
    all_users := sql db { select from User }!
    dump(all_users)

    // Seleccionar con condición
    alice := sql db { select from User where id == '001' }!
    dump(alice)

    // Actualizar
    sql db { update User set name = 'Alice Smith' where id == '001' }!

    // Eliminar
    sql db { delete from User where id == '002' }!

    // Eliminar tabla
    sql db { drop table User }!
}
```

## Sintaxis del Constructor de Consultas

También está disponible una API alternativa de constructor de consultas fluido:

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

    // Obtener todos
    all := qb.query()!
    dump(all)

    // Filtrar
    cheap := qb.where('price < ?', 15.0)!.query()!
    dump(cheap)

    // Actualizar
    qb.set('price = ?', 12.99)!.where('id = ?', 'p1')!.update()!

    // Eliminar
    qb.where('id = ?', 'p2')!.delete()!
}
```

## Ejemplo con PostgreSQL

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

    // el mismo DSL SQL funciona con PostgreSQL
    users := sql db { select from User }!
    println(users)
}
```
