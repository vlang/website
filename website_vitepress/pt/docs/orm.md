# ORM

V inclui um ORM integrado que suporta SQLite, PostgreSQL, MySQL e MSSQL. Nenhuma biblioteca externa necessária.

## Definindo um Modelo

Use o atributo `@[table: 'table_name']` para mapear uma struct a uma tabela do banco de dados:

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

## Sintaxe SQL (DSL Integrado)

V fornece uma DSL limpa semelhante ao SQL para consultas:

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

    // Criar tabela
    sql db { create table User }!

    // Inserir
    sql db { insert user1 into User }!
    sql db { insert user2 into User }!

    // Selecionar tudo
    all_users := sql db { select from User }!
    dump(all_users)

    // Selecionar com condição
    alice := sql db { select from User where id == '001' }!
    dump(alice)

    // Atualizar
    sql db { update User set name = 'Alice Smith' where id == '001' }!

    // Deletar
    sql db { delete from User where id == '002' }!

    // Remover tabela
    sql db { drop table User }!
}
```

## Sintaxe do Query Builder

Uma API fluente alternativa de query builder também está disponível:

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

    // Buscar tudo
    all := qb.query()!
    dump(all)

    // Filtrar
    cheap := qb.where('price < ?', 15.0)!.query()!
    dump(cheap)

    // Atualizar
    qb.set('price = ?', 12.99)!.where('id = ?', 'p1')!.update()!

    // Deletar
    qb.where('id = ?', 'p2')!.delete()!
}
```

## Exemplo com PostgreSQL

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

    // a mesma DSL SQL funciona com PostgreSQL
    users := sql db { select from User }!
    println(users)
}
```
