# الدوال

## الصياغة الأساسية

```v
fn main() {
    println(add(77, 33))
    println(sub(100, 50))
}

fn add(x int, y int) int {
    return x + y
}

fn sub(x int, y int) int {
    return x - y
}
```

يُحدَّد نوع القيمة المُعادة **بعد** قائمة المعاملات. إذا لم تُعِد الدالة شيئًا، يُحذف نوع القيمة المُعادة.

## الرفع (Hoisting)

يمكن استخدام الدوال قبل إعلانها. تقوم V برفع جميع الإعلانات، لذا لا حاجة لملفات الترويسة أو الإعلانات المسبقة.

## قيم إعادة متعددة

```v
fn foo() (int, int) {
    return 2, 3
}

a, b := foo()
println(a) // 2
println(b) // 3
c, _ := foo() // ignore the second value with `_`
```

## مستوى الرؤية

الدوال **خاصة** بشكل افتراضي. استخدم `pub` لتصديرها:

```v
pub fn public_function() {
}

fn private_function() {
}
```

## لا تحميل زائد

لا يمكن تحميل الدوال بشكل زائد. هذا يجعل الكود واضحًا وسهل القراءة.

## الأساليب (Methods)

يمكن ربط الدوال بالأنواع:

```v
struct User {
    name string
    age  int
}

fn (u User) can_register() bool {
    return u.age >= 16
}

fn (mut u User) register() {
    println('${u.name} is now registered')
}

fn main() {
    mut u := User{ name: 'Frodo', age: 25 }
    if u.can_register() {
        u.register()
    }
}
```

## الدوال ذات الرتبة العليا

الدوال هي قيم من الدرجة الأولى ويمكن تمريرها إلى دوال أخرى:

```v
fn apply(arr []int, f fn(int) int) []int {
    mut result := []int{}
    for x in arr {
        result << f(x)
    }
    return result
}

fn double(x int) int {
    return x * 2
}

fn main() {
    nums := [1, 2, 3, 4, 5]
    doubled := apply(nums, double)
    println(doubled) // [2, 4, 6, 8, 10]
}
```

## الدوال المجهولة

```v
fn main() {
    double := fn (x int) int {
        return x * 2
    }
    println(double(5)) // 10
}
```
