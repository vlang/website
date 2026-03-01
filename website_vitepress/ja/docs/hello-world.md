# Hello World

## 最初のVプログラム

`hello.v`というファイルを作成します：

```v
fn main() {
    println('Hello, World!')
}
```

実行します：

```bash
v run hello.v
```

またはコンパイルして別々に実行：

```bash
v hello.v
./hello
```

## `fn main()` の省略

単一ファイルのスクリプトでは、`fn main()`は省略可能です：

```v
println('Hello, World!')
```

これは小さなプログラムや言語学習に便利です。

## 複数ファイルの実行

プロジェクトにフォルダ内に複数の`.v`ファイルがある場合、一度にすべて実行できます：

```bash
v run .
```

## コメント

```v
// これは一行コメントです。
/*
  これは複数行コメントです。
  /* ネスト可能です。 */
*/
```

## もう少し大きな例

```v
// fibonacci.v — 指定されたランクまでフィボナッチ数を計算する
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
