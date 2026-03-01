# Instalacija

## Instalacija iz izvornog koda

Preporučeni način instalacije V-a je iz izvornog koda. Traje samo nekoliko sekundi:

```bash
git clone --depth=1 https://github.com/vlang/v && cd v && make
```

Na Windowsu koristite `make.bat` umjesto `make`.

## Simbolička veza V

Nakon izgradnje, možete kreirati simboličku vezu za V kako bi bio dostupan svugdje:

```bash
sudo ./v symlink
```

Na Windowsu pokrenite `v.exe symlink` iz povišene komandne linije.

## Provjera instalacije

```bash
v version
```

Trebali biste vidjeti izlaz poput `V 0.5.0 ...`.

## Preuzimanje gotovih binarnih datoteka

Gotove binarne datoteke dostupne su za sve veće platforme na stranici
[GitHub Releases](https://github.com/vlang/v/releases/latest):

| Platforma | Datoteka |
| --- | --- |
| Linux (x86_64) | `v_linux.zip` |
| macOS (Apple Silicon) | `v_macos_arm64.zip` |
| macOS (Intel) | `v_macos_x86_64.zip` |
| Windows | `v_windows.zip` |

## Ažuriranje V

Za ažuriranje V na najnoviju verziju pokrenite:

```bash
v up
```

## Pokretanje programa

```bash
v run hello.v
```

Ili ga kompajlirajte:

```bash
v hello.v
./hello
```

Za pokretanje svih `.v` datoteka u direktoriju:

```bash
v run .
```
