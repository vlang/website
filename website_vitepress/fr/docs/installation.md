# Installation

## Installer depuis les sources

La méthode recommandée pour installer V est depuis les sources. Cela ne prend que quelques secondes :

```bash
git clone --depth=1 https://github.com/vlang/v && cd v && make
```

Sous Windows, utilisez `make.bat` à la place de `make`.

## Créer un lien symbolique pour V

Après la compilation, vous pouvez créer un lien symbolique pour V afin qu'il soit disponible partout :

```bash
sudo ./v symlink
```

Sous Windows, exécutez `v.exe symlink` depuis une invite de commandes avec élévation de privilèges.

## Vérifier l'installation

```bash
v version
```

Vous devriez voir une sortie comme `V 0.5.0 ...`.

## Télécharger des binaires préconstruits

Des binaires préconstruits sont disponibles pour toutes les plateformes principales sur la page
[GitHub Releases](https://github.com/vlang/v/releases/latest) :

| Plateforme | Fichier |
| --- | --- |
| Linux (x86_64) | `v_linux.zip` |
| macOS (Apple Silicon) | `v_macos_arm64.zip` |
| macOS (Intel) | `v_macos_x86_64.zip` |
| Windows | `v_windows.zip` |

## Mettre à jour V

Pour mettre à jour V vers la dernière version, exécutez :

```bash
v up
```

## Exécuter un programme

```bash
v run hello.v
```

Ou compilez-le :

```bash
v hello.v
./hello
```

Pour exécuter tous les fichiers `.v` d'un répertoire :

```bash
v run .
```
