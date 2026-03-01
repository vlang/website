# Kurulum

## Kaynaktan Kurulum

V'yi kurmanın önerilen yolu kaynaktan derlemektir. Yalnızca birkaç saniye sürer:

```bash
git clone --depth=1 https://github.com/vlang/v && cd v && make
```

Windows'ta `make` yerine `make.bat` kullanın.

## V'ye Sembolik Bağ Oluşturma

Derleme sonrasında V'yi her yerden erişilebilir kılmak için sembolik bağ oluşturabilirsiniz:

```bash
sudo ./v symlink
```

Windows'ta, yönetici komut isteminden `v.exe symlink` komutunu çalıştırın.

## Kurulumu Doğrulama

```bash
v version
```

`V 0.5.0 ...` gibi bir çıktı görmelisiniz.

## Önceden Derlenmiş İkilileri İndirme

Tüm büyük platformlar için önceden derlenmiş ikililere
[GitHub Releases](https://github.com/vlang/v/releases/latest) sayfasından ulaşabilirsiniz:

| Platform | Dosya |
| --- | --- |
| Linux (x86_64) | `v_linux.zip` |
| macOS (Apple Silicon) | `v_macos_arm64.zip` |
| macOS (Intel) | `v_macos_x86_64.zip` |
| Windows | `v_windows.zip` |

## V'yi Güncelleme

V'yi en son sürüme güncellemek için:

```bash
v up
```

## Bir Program Çalıştırma

```bash
v run hello.v
```

Ya da derleyin:

```bash
v hello.v
./hello
```

Bir dizindeki tüm `.v` dosyalarını çalıştırmak için:

```bash
v run .
```
