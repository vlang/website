# Installation

## Install from Source

The recommended way to install V is from source. It only takes a few seconds:

```bash
git clone --depth=1 https://github.com/vlang/v && cd v && make
```

On Windows, use `make.bat` instead of `make`.

## Symlink V

After building, you can symlink V so it's available everywhere:

```bash
sudo ./v symlink
```

On Windows, run `v.exe symlink` from an elevated command prompt.

## Verify Installation

```bash
v version
```

You should see output like `V 0.5.0 ...`.

## Download Pre-built Binaries

Pre-built binaries are available for all major platforms on the
[GitHub Releases](https://github.com/vlang/v/releases/latest) page:

| Platform | File |
| --- | --- |
| Linux (x86_64) | `v_linux.zip` |
| macOS (Apple Silicon) | `v_macos_arm64.zip` |
| macOS (Intel) | `v_macos_x86_64.zip` |
| Windows | `v_windows.zip` |

## Upgrading V

To upgrade V to the latest version, run:

```bash
v up
```

## Running a Program

```bash
v run hello.v
```

Or compile it:

```bash
v hello.v
./hello
```

To run all `.v` files in a directory:

```bash
v run .
```
