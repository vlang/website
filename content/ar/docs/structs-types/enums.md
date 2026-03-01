# التعدادات (Enums)

تُعرِّف التعدادات نوعًا بمجموعة ثابتة من الثوابت المُسمَّاة.

## التعداد الأساسي

```v
enum Direction {
    north
    south
    east
    west
}

fn main() {
    dir := Direction.north
    println(dir) // north
}
```

## المطابقة على التعدادات

```v
enum Color {
    red
    green
    blue
}

fn describe(c Color) string {
    return match c {
        .red   { 'warm' }
        .green { 'cool' }
        .blue  { 'cool' }
    }
}
```

لاحظ صياغة الاختصار `.variant` عندما يمكن استنتاج النوع.

## التعدادات بقيم مخصصة

```v
enum StatusCode {
    ok         = 200
    not_found  = 404
    server_err = 500
}

fn main() {
    code := StatusCode.not_found
    println(int(code)) // 404
}
```

## دوال التعدادات

```v
enum Planet {
    mercury
    venus
    earth
    mars
}

fn (p Planet) is_inner() bool {
    return match p {
        .mercury, .venus, .earth, .mars { true }
        else { false }
    }
}
```

## التكرار على التعدادات

```v
enum Season {
    spring
    summer
    autumn
    winter
}

fn main() {
    for s in Season.values() {
        println(s)
    }
}
```

## تعدادات الأعلام (حقول البت)

```v
@[flag]
enum Permission {
    read
    write
    execute
}

fn main() {
    mut p := Permission.read | Permission.write
    println(p.has(.read))    // true
    println(p.has(.execute)) // false
    p.set(.execute)
    println(p.has(.execute)) // true
}
```
