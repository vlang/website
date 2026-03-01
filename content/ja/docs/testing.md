# テスト

Vには組み込みのテストサポートがあります。テストフレームワークや外部ライブラリは不要です。

## テストの作成

テスト関数は`test_`で始まり、`_test.v`で終わるファイルに記述する必要があります：

```v
// math_test.v

fn add(a int, b int) int {
    return a + b
}

fn test_add() {
    assert add(2, 3) == 5
    assert add(0, 0) == 0
    assert add(-1, 1) == 0
}

fn test_add_large_numbers() {
    assert add(1_000_000, 2_000_000) == 3_000_000
}
```

テストを実行するには：

```bash
v test math_test.v
# またはディレクトリ内のすべてのテストを実行：
v test .
```

## アサーション

`assert`を使用して条件をチェックします。失敗したアサーションは両辺の値を出力します：

```v
fn test_string_ops() {
    s := 'Hello, World!'
    assert s.contains('World')
    assert s.to_upper() == 'HELLO, WORLD!'
    assert s.len == 13
}
```

## テストのセットアップとティアダウン

```v
// モジュールレベルのセットアップ/ティアダウンにはtestsuite_beginとtestsuite_endを使用
fn testsuite_begin() {
    // ファイル内のすべてのテストの前に一度実行される
    println('Setting up test suite...')
}

fn testsuite_end() {
    // ファイル内のすべてのテストの後に一度実行される
    println('Tearing down test suite...')
}
```

## エラーケースのテスト

```v
fn safe_divide(a f64, b f64) !f64 {
    if b == 0 {
        return error('division by zero')
    }
    return a / b
}

fn test_divide_by_zero() {
    result := safe_divide(10, 0) or { err.msg() }
    assert result == 'division by zero'
}

fn test_divide_normal() {
    result := safe_divide(10, 2) or { panic(err) }
    assert result == 5.0
}
```

## 特定のテストの実行

```bash
# 単一のテストファイルを実行
v test mypackage/foo_test.v

# パターンに一致するテストを実行
v test -run test_add .

# 詳細出力で実行
v test -v .
```

## テーブル駆動テスト

Vには組み込みのテーブル駆動テストヘルパーはありませんが、手動で実行できます：

```v
fn test_add_table() {
    cases := [
        [2, 3, 5],
        [0, 0, 0],
        [-1, 1, 0],
        [100, 200, 300],
    ]
    for c in cases {
        assert add(c[0], c[1]) == c[2]
    }
}
```

## コードカバレッジ

カバレッジレポートを生成します：

```bash
v -coverage ./coverage_output test .
```
