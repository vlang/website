# Hello World

## 你的第一个 V 程序

创建一个名为 `hello.v` 的文件：

```v
fn main() {
    println('Hello, World!')
}
```

运行它：

```bash
v run hello.v
```

或者分别编译和运行：

```bash
v hello.v
./hello
```

## 省略 `fn main()`

对于单文件脚本，`fn main()` 是可选的：

```v
println('Hello, World!')
```

这对于小程序和学习语言非常有用。

## 运行多个文件

如果你的项目在一个文件夹中有多个 `.v` 文件，可以一次性运行所有文件：

```bash
v run .
```

## 注释

```v
// 这是单行注释。
/*
  这是多行注释。
  /* 它可以嵌套。 */
*/
```

## 稍大一点的示例

```v
// fibonacci.v — 计算给定阶数的斐波那契数列
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
