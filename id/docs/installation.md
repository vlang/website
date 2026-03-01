# Instalasi

## Instal dari Sumber

Cara yang direkomendasikan untuk menginstal V adalah dari sumber. Hanya membutuhkan beberapa detik:

```bash
git clone --depth=1 https://github.com/vlang/v && cd v && make
```

Di Windows, gunakan `make.bat` sebagai pengganti `make`.

## Symlink V

Setelah membangun, Anda dapat membuat symlink V agar tersedia di mana saja:

```bash
sudo ./v symlink
```

Di Windows, jalankan `v.exe symlink` dari command prompt dengan hak administrator.

## Verifikasi Instalasi

```bash
v version
```

Anda akan melihat output seperti `V 0.5.0 ...`.

## Unduh Binary Siap Pakai

Binary siap pakai tersedia untuk semua platform utama di halaman
[GitHub Releases](https://github.com/vlang/v/releases/latest):

| Platform | File |
| --- | --- |
| Linux (x86_64) | `v_linux.zip` |
| macOS (Apple Silicon) | `v_macos_arm64.zip` |
| macOS (Intel) | `v_macos_x86_64.zip` |
| Windows | `v_windows.zip` |

## Memperbarui V

Untuk memperbarui V ke versi terbaru, jalankan:

```bash
v up
```

## Menjalankan Program

```bash
v run hello.v
```

Atau kompilasi terlebih dahulu:

```bash
v hello.v
./hello
```

Untuk menjalankan semua file `.v` dalam suatu direktori:

```bash
v run .
```
