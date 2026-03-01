# Instal·lació

## Instal·lar des del Codi Font

La manera recomanada d'instal·lar V és des del codi font. Tan sols triga uns quants segons:

```bash
git clone --depth=1 https://github.com/vlang/v && cd v && make
```

A Windows, usa `make.bat` en comptes de `make`.

## Crear un Enllaç Simbòlic de V

Després de compilar, pots crear un enllaç simbòlic de V perquè estigui disponible a tot arreu:

```bash
sudo ./v symlink
```

A Windows, executa `v.exe symlink` des d'un símbol del sistema elevat.

## Verificar la Instal·lació

```bash
v version
```

Hauries de veure una sortida com `V 0.5.0 ...`.

## Descarregar Binaris Precompilats

Hi ha binaris precompilats disponibles per a totes les plataformes principals a la pàgina de
[GitHub Releases](https://github.com/vlang/v/releases/latest):

| Plataforma | Fitxer |
| --- | --- |
| Linux (x86_64) | `v_linux.zip` |
| macOS (Apple Silicon) | `v_macos_arm64.zip` |
| macOS (Intel) | `v_macos_x86_64.zip` |
| Windows | `v_windows.zip` |

## Actualitzar V

Per actualitzar V a l'última versió, executa:

```bash
v up
```

## Executar un Programa

```bash
v run hello.v
```

O compila'l:

```bash
v hello.v
./hello
```

Per executar tots els fitxers `.v` d'un directori:

```bash
v run .
```
