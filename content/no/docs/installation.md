# Installasjon

## Installer fra kilde

Den anbefalte måten å installere V på er fra kilde. Det tar bare noen sekunder:

```bash
git clone --depth=1 https://github.com/vlang/v && cd v && make
```

På Windows, bruk `make.bat` i stedet for `make`.

## Symlink V

Etter bygging kan du opprette en symlink til V slik at det er tilgjengelig overalt:

```bash
sudo ./v symlink
```

På Windows, kjør `v.exe symlink` fra en forhøyet ledetekst.

## Bekreft installasjon

```bash
v version
```

Du bør se utdata som `V 0.5.0 ...`.

## Last ned forhåndsbygde binærfiler

Forhåndsbygde binærfiler er tilgjengelige for alle større plattformer på
[GitHub Releases](https://github.com/vlang/v/releases/latest)-siden:

| Plattform | Fil |
| --- | --- |
| Linux (x86_64) | `v_linux.zip` |
| macOS (Apple Silicon) | `v_macos_arm64.zip` |
| macOS (Intel) | `v_macos_x86_64.zip` |
| Windows | `v_windows.zip` |

## Oppgradere V

For å oppgradere V til nyeste versjon, kjør:

```bash
v up
```

## Kjøre et program

```bash
v run hello.v
```

Eller kompiler det:

```bash
v hello.v
./hello
```

For å kjøre alle `.v`-filer i en mappe:

```bash
v run .
```
