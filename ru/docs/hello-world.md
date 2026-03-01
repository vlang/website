# Hello World

## Ваша первая программа на V

Создайте файл с именем `hello.v`:

```v
fn main() {
    println('Hello, World!')
}
```

Запустите его:

```bash
v run hello.v
```

Или скомпилируйте и запустите отдельно:

```bash
v hello.v
./hello
```

## Пропуск `fn main()`

Для однофайловых скриптов `fn main()` не обязателен:

```v
println('Hello, World!')
```

Это удобно для небольших программ и изучения языка.

## Запуск нескольких файлов

Если ваш проект содержит несколько файлов `.v` в одной папке, запустите их все сразу:

```bash
v run .
```

## Комментарии

```v
// Это однострочный комментарий.
/*
  Это многострочный комментарий.
  /* Он может быть вложенным. */
*/
```

## Немного более сложный пример

```v
// fibonacci.v — вычисляем числа Фибоначчи до заданного ранга
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
