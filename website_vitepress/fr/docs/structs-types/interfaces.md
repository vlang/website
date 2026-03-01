# Interfaces

Les interfaces définissent un contrat — un ensemble de méthodes qu'un type doit implémenter. Il n'y a pas de mot-clé `implements` explicite ; les types satisfont les interfaces automatiquement (typage structurel/duck typing).

## Définir une interface

```v
interface Shape {
    area() f64
    perimeter() f64
}
```

## Implémenter une interface

Tout struct qui possède les méthodes requises implémente automatiquement l'interface :

```v
struct Circle {
    radius f64
}

fn (c Circle) area() f64 {
    return 3.14159 * c.radius * c.radius
}

fn (c Circle) perimeter() f64 {
    return 2 * 3.14159 * c.radius
}

struct Rectangle {
    width  f64
    height f64
}

fn (r Rectangle) area() f64 {
    return r.width * r.height
}

fn (r Rectangle) perimeter() f64 {
    return 2 * (r.width + r.height)
}
```

## Utiliser des interfaces

```v
fn print_shape_info(s Shape) {
    println('Aire :      ${s.area():.2f}')
    println('Périmètre : ${s.perimeter():.2f}')
}

fn main() {
    shapes := [
        Shape(Circle{radius: 5.0}),
        Rectangle{width: 4.0, height: 3.0},
    ]

    for s in shapes {
        print_shape_info(s)
        println('---')
    }
}
```

## Interface avec champs

Les interfaces peuvent aussi exiger des champs (pas seulement des méthodes) :

```v
interface Named {
    name string
}

struct Person {
    name string
}

fn greet(n Named) {
    println('Bonjour, ${n.name} !')
}

fn main() {
    p := Person{name: 'Alice'}
    greet(p)
}
```

## Vérification de type avec les interfaces

```v
fn describe(s Shape) {
    if s is Circle {
        println('Cercle de rayon ${s.radius}')
    } else if s is Rectangle {
        println('Rectangle ${s.width} x ${s.height}')
    }
}
```

## Types somme vs Interfaces

- Utilisez les **interfaces** lorsque différents types sans lien partagent un comportement commun.
- Utilisez les **types somme** (`type Foo = A | B`) lorsque vous avez un ensemble fermé et fini de variantes et souhaitez une correspondance exhaustive avec `match`.
