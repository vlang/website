# التثبيت

## التثبيت من المصدر

الطريقة الموصى بها لتثبيت V هي من المصدر. لا تستغرق سوى بضع ثوانٍ:

```bash
git clone --depth=1 https://github.com/vlang/v && cd v && make
```

على Windows، استخدم `make.bat` بدلاً من `make`.

## إنشاء رابط رمزي لـ V

بعد البناء، يمكنك إنشاء رابط رمزي لـ V حتى تكون متاحةً في كل مكان:

```bash
sudo ./v symlink
```

على Windows، شغِّل `v.exe symlink` من موجه الأوامر بصلاحيات المسؤول.

## التحقق من التثبيت

```bash
v version
```

يجب أن ترى مخرجات مثل `V 0.5.0 ...`.

## تنزيل الملفات الثنائية الجاهزة

تتوفر الملفات الثنائية الجاهزة لجميع المنصات الرئيسية على صفحة
[إصدارات GitHub](https://github.com/vlang/v/releases/latest):

| المنصة | الملف |
| --- | --- |
| Linux (x86_64) | `v_linux.zip` |
| macOS (Apple Silicon) | `v_macos_arm64.zip` |
| macOS (Intel) | `v_macos_x86_64.zip` |
| Windows | `v_windows.zip` |

## ترقية V

لترقية V إلى أحدث إصدار، شغِّل:

```bash
v up
```

## تشغيل برنامج

```bash
v run hello.v
```

أو صرِّفه:

```bash
v hello.v
./hello
```

لتشغيل جميع ملفات `.v` في مجلد:

```bash
v run .
```
