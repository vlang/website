# 安装

## 从源码安装

推荐从源码安装 V，只需几秒钟：

```bash
git clone --depth=1 https://github.com/vlang/v && cd v && make
```

在 Windows 上，使用 `make.bat` 代替 `make`。

## 创建符号链接

构建完成后，可以为 V 创建符号链接，使其在任何地方都可用：

```bash
sudo ./v symlink
```

在 Windows 上，以管理员权限运行 `v.exe symlink`。

## 验证安装

```bash
v version
```

你应该会看到类似 `V 0.5.0 ...` 的输出。

## 下载预编译二进制文件

所有主流平台的预编译二进制文件可在
[GitHub Releases](https://github.com/vlang/v/releases/latest) 页面下载：

| 平台 | 文件 |
| --- | --- |
| Linux (x86_64) | `v_linux.zip` |
| macOS (Apple Silicon) | `v_macos_arm64.zip` |
| macOS (Intel) | `v_macos_x86_64.zip` |
| Windows | `v_windows.zip` |

## 升级 V

将 V 升级到最新版本，运行：

```bash
v up
```

## 运行程序

```bash
v run hello.v
```

或者先编译再运行：

```bash
v hello.v
./hello
```

运行目录下所有 `.v` 文件：

```bash
v run .
```
