# Installation

## Aus dem Quellcode installieren

Der empfohlene Weg, V zu installieren, ist aus dem Quellcode. Es dauert nur wenige Sekunden:

```bash
git clone --depth=1 https://github.com/vlang/v && cd v && make
```

Unter Windows verwende `make.bat` anstelle von `make`.

## V verknüpfen (Symlink)

Nach dem Bauen kannst du V verknüpfen, damit es überall verfügbar ist:

```bash
sudo ./v symlink
```

Unter Windows führe `v.exe symlink` in einer Eingabeaufforderung mit erhöhten Rechten aus.

## Installation überprüfen

```bash
v version
```

Du solltest eine Ausgabe wie `V 0.5.0 ...` sehen.

## Vorgefertigte Binärdateien herunterladen

Vorgefertigte Binärdateien sind für alle gängigen Plattformen auf der
[GitHub Releases](https://github.com/vlang/v/releases/latest)-Seite verfügbar:

| Plattform | Datei |
| --- | --- |
| Linux (x86_64) | `v_linux.zip` |
| macOS (Apple Silicon) | `v_macos_arm64.zip` |
| macOS (Intel) | `v_macos_x86_64.zip` |
| Windows | `v_windows.zip` |

## V aktualisieren

Um V auf die neueste Version zu aktualisieren, führe aus:

```bash
v up
```

## Ein Programm ausführen

```bash
v run hello.v
```

Oder kompiliere es:

```bash
v hello.v
./hello
```

Um alle `.v`-Dateien in einem Verzeichnis auszuführen:

```bash
v run .
```
