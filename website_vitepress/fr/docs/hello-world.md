# Hello World

## Votre premier programme V

Créez un fichier nommé `hello.v` :

```v
fn main() {
    println('Hello, World!')
}
```

Exécutez-le :

```bash
v run hello.v
```

Ou compilez et exécutez séparément :

```bash
v hello.v
./hello
```

## Omettre `fn main()`

Pour les scripts à fichier unique, `fn main()` est optionnel :

```v
println('Hello, World!')
```

Cela est utile pour les petits programmes et l'apprentissage du langage.

## Exécuter plusieurs fichiers

Si votre projet contient plusieurs fichiers `.v` dans un dossier, exécutez-les tous en même temps :

```bash
v run .
```

## Commentaires

```v
// Ceci est un commentaire sur une seule ligne.
/*
  Ceci est un commentaire multiligne.
  /* Il peut être imbriqué. */
*/
```

## Un exemple un peu plus grand

```v
// fibonacci.v — calcule les nombres de Fibonacci jusqu'à un rang donné
const args = arguments()

fn main() {
    if args.len != 2 {
        println('usage: fibonacci [rang]')
        return
    }
    stop := args[1].int()
    if stop > 92 {
        println('le rang doit être 92 ou moins')
        return
    }
    mut a := i64(0)
    mut b := i64(0)
    mut c := i64(1)
    println(a + b + c)
    for _ in 0 .. stop {
        a = b
        b = c
        c = a + b
        println(c)
    }
}
```
