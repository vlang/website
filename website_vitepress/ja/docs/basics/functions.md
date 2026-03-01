# 関数

## 基本構文

```v
fn main() {
    println(add(77, 33))
    println(sub(100, 50))
}

fn add(x int, y int) int {
    return x + y
}

fn sub(x int, y int) int {
    return x - y
}
```

戻り値の型はパラメータリストの**後に**指定します。関数が何も返さない場合、戻り値の型は省略します。

## ホイスティング

関数は宣言前に使用できます。Vはすべての宣言をホイストするため、ヘッダーファイルや前方宣言は不要です。

## 複数の戻り値

```v
fn foo() (int, int) {
    return 2, 3
}

a, b := foo()
println(a) // 2
println(b) // 3
c, _ := foo() // `_`で二番目の値を無視
```

## 可視性

関数はデフォルトで**プライベート**です。エクスポートするには`pub`を使用します：

```v
pub fn public_function() {
}

fn private_function() {
}
```

## オーバーロードなし

関数はオーバーロードできません。これによりコードが明確で読みやすくなります。

## メソッド

関数を型に付加できます：

```v
struct User {
    name string
    age  int
}

fn (u User) can_register() bool {
    return u.age >= 16
}

fn (mut u User) register() {
    println('${u.name} is now registered')
}

fn main() {
    mut u := User{ name: 'Frodo', age: 25 }
    if u.can_register() {
        u.register()
    }
}
```

## 高階関数

関数はファーストクラスの値であり、他の関数に渡すことができます：

```v
fn apply(arr []int, f fn(int) int) []int {
    mut result := []int{}
    for x in arr {
        result << f(x)
    }
    return result
}

fn double(x int) int {
    return x * 2
}

fn main() {
    nums := [1, 2, 3, 4, 5]
    doubled := apply(nums, double)
    println(doubled) // [2, 4, 6, 8, 10]
}
```

## 無名関数

```v
fn main() {
    double := fn (x int) int {
        return x * 2
    }
    println(double(5)) // 10
}
```
