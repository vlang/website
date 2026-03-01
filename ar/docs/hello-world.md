# مرحبًا بالعالم

## برنامجك الأول بلغة V

أنشئ ملفًا باسم `hello.v`:

```v
fn main() {
    println('Hello, World!')
}
```

شغِّله:

```bash
v run hello.v
```

أو صرِّفه وشغِّله بشكل منفصل:

```bash
v hello.v
./hello
```

## حذف `fn main()`

بالنسبة للنصوص البرمجية أحادية الملف، تُعدّ `fn main()` اختياريةً:

```v
println('Hello, World!')
```

هذا مفيد للبرامج الصغيرة وتعلم اللغة.

## تشغيل ملفات متعددة

إذا كان مشروعك يحتوي على ملفات `.v` متعددة في مجلد، شغِّلها جميعًا دفعةً واحدة:

```bash
v run .
```

## التعليقات

```v
// هذا تعليق من سطر واحد.
/*
  هذا تعليق متعدد الأسطر.
  /* يمكن أن يكون متداخلاً. */
*/
```

## مثال أكبر قليلاً

```v
// fibonacci.v — compute Fibonacci numbers up to a given rank
const args = arguments()

fn main() {
    if args.len != 2 {
        println('usage: fibonacci [rank]')
        return
    }
    stop := args[1].int()
    if stop > 92 {
        println('rank must be 92 or less')
        return
    }
    mut a := i64(0)
    mut b := i64(0)
    mut c := i64(1)
    println(a + b + c)
    for _ in 0 .. stop {
        a = b
        b = c
        c = a + b
        println(c)
    }
}
```
