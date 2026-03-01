# الواجهات (Interfaces)

تُحدِّد الواجهات عقدًا — مجموعةً من الأساليب التي يجب أن يُنفِّذها النوع. لا توجد كلمة مفتاحية صريحة `implements`؛ تستوفي الأنواع الواجهات تلقائيًا (الكتابة الهيكلية/البطية).

## تعريف واجهة

```v
interface Shape {
    area() f64
    perimeter() f64
}
```

## تنفيذ واجهة

تُنفِّذ أي بنية تمتلك الأساليب المطلوبة الواجهة تلقائيًا:

```v
struct Circle {
    radius f64
}

fn (c Circle) area() f64 {
    return 3.14159 * c.radius * c.radius
}

fn (c Circle) perimeter() f64 {
    return 2 * 3.14159 * c.radius
}

struct Rectangle {
    width  f64
    height f64
}

fn (r Rectangle) area() f64 {
    return r.width * r.height
}

fn (r Rectangle) perimeter() f64 {
    return 2 * (r.width + r.height)
}
```

## استخدام الواجهات

```v
fn print_shape_info(s Shape) {
    println('Area:      ${s.area():.2f}')
    println('Perimeter: ${s.perimeter():.2f}')
}

fn main() {
    shapes := [
        Shape(Circle{radius: 5.0}),
        Rectangle{width: 4.0, height: 3.0},
    ]

    for s in shapes {
        print_shape_info(s)
        println('---')
    }
}
```

## الواجهة مع الحقول

يمكن للواجهات أيضًا أن تطلب حقولاً (ليس فقط أساليب):

```v
interface Named {
    name string
}

struct Person {
    name string
}

fn greet(n Named) {
    println('Hello, ${n.name}!')
}

fn main() {
    p := Person{name: 'Alice'}
    greet(p)
}
```

## التحقق من الأنواع مع الواجهات

```v
fn describe(s Shape) {
    if s is Circle {
        println('Circle with radius ${s.radius}')
    } else if s is Rectangle {
        println('Rectangle ${s.width} x ${s.height}')
    }
}
```

## أنواع المجموع مقابل الواجهات

- استخدم **الواجهات** عندما تشترك أنواع غير مترابطة مختلفة في سلوك مشترك.
- استخدم **أنواع المجموع** (`type Foo = A | B`) عندما يكون لديك مجموعة مغلقة ومحدودة من المتغيرات وتريد مطابقة أنماط شاملة باستخدام `match`.
