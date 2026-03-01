# Pemasangan

## Pasang dari Sumber

Cara yang disyorkan untuk memasang V adalah dari sumber. Ia hanya mengambil masa beberapa saat:

```bash
git clone --depth=1 https://github.com/vlang/v && cd v && make
```

Di Windows, gunakan `make.bat` sebagai ganti `make`.

## Simpautan V

Selepas membina, anda boleh mensimpautan V supaya ia tersedia di mana-mana:

```bash
sudo ./v symlink
```

Di Windows, jalankan `v.exe symlink` dari command prompt yang ditinggikan.

## Sahkan Pemasangan

```bash
v version
```

Anda sepatutnya melihat output seperti `V 0.5.0 ...`.

## Muat Turun Binari Pra-bina

Binari pra-bina tersedia untuk semua platform utama di halaman
[GitHub Releases](https://github.com/vlang/v/releases/latest):

| Platform | Fail |
| --- | --- |
| Linux (x86_64) | `v_linux.zip` |
| macOS (Apple Silicon) | `v_macos_arm64.zip` |
| macOS (Intel) | `v_macos_x86_64.zip` |
| Windows | `v_windows.zip` |

## Naik Taraf V

Untuk menaik taraf V ke versi terkini, jalankan:

```bash
v up
```

## Menjalankan Program

```bash
v run hello.v
```

Atau kompil dahulu:

```bash
v hello.v
./hello
```

Untuk menjalankan semua fail `.v` dalam direktori:

```bash
v run .
```
