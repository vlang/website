# Merhaba Dünya

## İlk V Programınız

`hello.v` adında bir dosya oluşturun:

```v
fn main() {
    println('Hello, World!')
}
```

Çalıştırın:

```bash
v run hello.v
```

Ya da ayrı ayrı derleyip çalıştırın:

```bash
v hello.v
./hello
```

## `fn main()` Kullanmadan

Tek dosyalı betiklerde `fn main()` isteğe bağlıdır:

```v
println('Hello, World!')
```

Bu, küçük programlar ve dili öğrenmek için kullanışlıdır.

## Birden Fazla Dosyayı Çalıştırma

Projenizde bir klasörde birden fazla `.v` dosyası varsa, hepsini bir anda çalıştırın:

```bash
v run .
```

## Yorumlar

```v
// Bu tek satırlık bir yorumdur.
/*
  Bu çok satırlı bir yorumdur.
  /* İç içe olabilir. */
*/
```

## Biraz Daha Büyük Bir Örnek

```v
// fibonacci.v — belirli bir sıraya kadar Fibonacci sayılarını hesaplar
const args = arguments()

fn main() {
    if args.len != 2 {
        println('usage: fibonacci [rank]')
        return
    }
    stop := args[1].int()
    if stop > 92 {
        println('rank must be 92 or less')
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
