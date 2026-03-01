# ORM

V inclut un ORM intégré qui prend en charge SQLite, PostgreSQL, MySQL et MSSQL. Aucune bibliothèque externe n'est nécessaire.

## Définir un modèle

Utilisez l'attribut `@[table: 'nom_table']` pour associer un struct à une table de base de données :

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

## Syntaxe SQL (DSL intégré)

V fournit un DSL de type SQL propre pour les requêtes :

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

    // Créer la table
    sql db { create table User }!

    // Insérer
    sql db { insert user1 into User }!
    sql db { insert user2 into User }!

    // Sélectionner tout
    all_users := sql db { select from User }!
    dump(all_users)

    // Sélectionner avec condition
    alice := sql db { select from User where id == '001' }!
    dump(alice)

    // Mettre à jour
    sql db { update User set name = 'Alice Smith' where id == '001' }!

    // Supprimer
    sql db { delete from User where id == '002' }!

    // Supprimer la table
    sql db { drop table User }!
}
```

## Syntaxe du constructeur de requêtes

Une API alternative de constructeur de requêtes fluide est également disponible :

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

    // Récupérer tout
    all := qb.query()!
    dump(all)

    // Filtrer
    cheap := qb.where('price < ?', 15.0)!.query()!
    dump(cheap)

    // Mettre à jour
    qb.set('price = ?', 12.99)!.where('id = ?', 'p1')!.update()!

    // Supprimer
    qb.where('id = ?', 'p2')!.delete()!
}
```

## Exemple PostgreSQL

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

    // le même DSL SQL fonctionne avec PostgreSQL
    users := sql db { select from User }!
    println(users)
}
```
