# インストール

## ソースからインストール

Vをインストールする推奨方法はソースからです。数秒で完了します：

```bash
git clone --depth=1 https://github.com/vlang/v && cd v && make
```

Windowsでは、`make`の代わりに`make.bat`を使用してください。

## Vのシンボリックリンク

ビルド後、どこからでも使えるようにVをシンボリックリンクできます：

```bash
sudo ./v symlink
```

Windowsでは、管理者権限のコマンドプロンプトから`v.exe symlink`を実行してください。

## インストールの確認

```bash
v version
```

`V 0.5.0 ...`のような出力が表示されるはずです。

## ビルド済みバイナリのダウンロード

すべての主要プラットフォーム向けのビルド済みバイナリが
[GitHub Releases](https://github.com/vlang/v/releases/latest) ページで入手できます：

| プラットフォーム | ファイル |
| --- | --- |
| Linux (x86_64) | `v_linux.zip` |
| macOS (Apple Silicon) | `v_macos_arm64.zip` |
| macOS (Intel) | `v_macos_x86_64.zip` |
| Windows | `v_windows.zip` |

## Vのアップグレード

Vを最新バージョンにアップグレードするには：

```bash
v up
```

## プログラムの実行

```bash
v run hello.v
```

またはコンパイルして実行：

```bash
v hello.v
./hello
```

ディレクトリ内のすべての`.v`ファイルを実行するには：

```bash
v run .
```
