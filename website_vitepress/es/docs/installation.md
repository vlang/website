# Instalación

## Instalar desde el Código Fuente

La forma recomendada de instalar V es desde el código fuente. Solo toma unos segundos:

```bash
git clone --depth=1 https://github.com/vlang/v && cd v && make
```

En Windows, usa `make.bat` en lugar de `make`.

## Crear un Enlace Simbólico para V

Después de compilar, puedes crear un enlace simbólico para que V esté disponible en cualquier lugar:

```bash
sudo ./v symlink
```

En Windows, ejecuta `v.exe symlink` desde un símbolo del sistema con privilegios elevados.

## Verificar la Instalación

```bash
v version
```

Deberías ver una salida como `V 0.5.0 ...`.

## Descargar Binarios Precompilados

Los binarios precompilados están disponibles para todas las plataformas principales en la página de
[Versiones de GitHub](https://github.com/vlang/v/releases/latest):

| Plataforma | Archivo |
| --- | --- |
| Linux (x86_64) | `v_linux.zip` |
| macOS (Apple Silicon) | `v_macos_arm64.zip` |
| macOS (Intel) | `v_macos_x86_64.zip` |
| Windows | `v_windows.zip` |

## Actualizar V

Para actualizar V a la última versión, ejecuta:

```bash
v up
```

## Ejecutar un Programa

```bash
v run hello.v
```

O compílalo:

```bash
v hello.v
./hello
```

Para ejecutar todos los archivos `.v` en un directorio:

```bash
v run .
```
