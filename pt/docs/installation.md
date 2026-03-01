# Instalação

## Instalar a Partir do Código-Fonte

A forma recomendada de instalar V é a partir do código-fonte. Leva apenas alguns segundos:

```bash
git clone --depth=1 https://github.com/vlang/v && cd v && make
```

No Windows, use `make.bat` em vez de `make`.

## Criar Symlink para V

Após compilar, você pode criar um symlink para que V esteja disponível em qualquer lugar:

```bash
sudo ./v symlink
```

No Windows, execute `v.exe symlink` a partir de um prompt de comando elevado.

## Verificar a Instalação

```bash
v version
```

Você deverá ver uma saída como `V 0.5.0 ...`.

## Baixar Binários Pré-compilados

Binários pré-compilados estão disponíveis para todas as principais plataformas na página de
[Releases do GitHub](https://github.com/vlang/v/releases/latest):

| Plataforma | Arquivo |
| --- | --- |
| Linux (x86_64) | `v_linux.zip` |
| macOS (Apple Silicon) | `v_macos_arm64.zip` |
| macOS (Intel) | `v_macos_x86_64.zip` |
| Windows | `v_windows.zip` |

## Atualizando V

Para atualizar V para a versão mais recente, execute:

```bash
v up
```

## Executando um Programa

```bash
v run hello.v
```

Ou compile:

```bash
v hello.v
./hello
```

Para executar todos os arquivos `.v` em um diretório:

```bash
v run .
```
