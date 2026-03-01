# Types primitifs

## Types entiers

```v
// Entiers signés
i8    // -128 à 127
i16   // -32 768 à 32 767
int   // -2 147 483 648 à 2 147 483 647  (toujours 32 bits)
i64   // -9 223 372 036 854 775 808 à 9 223 372 036 854 775 807

// Entiers non signés
u8    // 0 à 255  (également utilisé pour les octets)
u16   // 0 à 65 535
u32   // 0 à 4 294 967 295
u64   // 0 à 18 446 744 073 709 551 615

// Dépendant de la plateforme
isize // signé, taille d'un pointeur
usize // non signé, taille d'un pointeur
```

> **Note :** Contrairement à C et Go, `int` en V est toujours 32 bits quelle que soit la plateforme.

## Types flottants

```v
f32   // simple précision (32 bits)
f64   // double précision (64 bits)
```

## Booléen

```v
is_ready := true
is_done  := false
```

## Rune

Un `rune` représente un point de code Unicode :

```v
letter := `A`        // littéral rune utilise des guillemets obliques
emoji  := `🌎`
println(letter)      // A
println(int(letter)) // 65
```

## Promotions de type

Les petits types sont automatiquement promus lorsqu'ils sont combinés avec des types plus grands du même côté d'un opérateur :

```v
u := u16(12)
v := 13 + u    // v est u16 — pas de promotion
x := f32(45.6)
y := x + 3.14  // y est f32 — pas de promotion
a := 75        // int (par défaut pour les littéraux entiers)
b := 14.7      // f64 (par défaut pour les littéraux flottants)
```

## Littéraux numériques

```v
n1 := 1_000_000      // tirets bas pour la lisibilité
n2 := 0xff           // hexadécimal
n3 := 0o77           // octal
n4 := 0b1111_0000    // binaire
f1 := 3.14_159_265   // flottant avec tirets bas
```

## `voidptr`

Type pointeur brut utilisé principalement pour l'interopérabilité avec C. À éviter dans le code V pur.

```v
// principalement pour l'interop C
p := voidptr(0)
```
