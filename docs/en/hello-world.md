# Hello World

## Your First V Program

Create a file named `hello.v`:

```v
fn main() {
    println('Hello, World!')
}
```

Run it:

```bash
v run hello.v
```

Or compile and run separately:

```bash
v hello.v
./hello
```

## Skipping `fn main()`

For single-file scripts, `fn main()` is optional:

```v
println('Hello, World!')
```

This is useful for small programs and learning the language.

## Running Multiple Files

If your project has multiple `.v` files in a folder, run all of them at once:

```bash
v run .
```

## Comments

```v
// This is a single line comment.
/*
  This is a multiline comment.
  /* It can be nested. */
*/
```

## A Slightly Bigger Example

```v
// fibonacci.v — compute Fibonacci numbers up to a given rank
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
