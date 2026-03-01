# If / Else

## الصياغة الأساسية

```v
a := 10

if a < 10 {
    println('less than 10')
} else if a == 10 {
    println('exactly 10')
} else {
    println('greater than 10')
}
```

## If كتعبير

في V، يُعدّ `if` تعبيرًا ويمكن استخدامه على الجانب الأيمن من التعيين:

```v
num := 7
result := if num % 2 == 0 { 'even' } else { 'odd' }
println(result) // odd
```

## الصيغة المختصرة المضمَّنة

```v
x := 42
if x > 0 { println('positive') }
```

## الشرط مع التهيئة

يمكنك تهيئة متغير داخل شرط `if`:

```v
if val := some_function_returning_option() {
    println('got value: ${val}')
} else {
    println('no value')
}
```

## عامل `in`

استخدم `in` للتحقق من العضوية في المصفوفات أو الخرائط:

```v
nums := [1, 2, 3]
if 2 in nums {
    println('found 2')
}

m := {'a': 1, 'b': 2}
if 'a' in m {
    println('key exists')
}
```

استخدم `!in` للعكس:

```v
if 5 !in nums {
    println('5 is not in the array')
}
```

## مثال FizzBuzz

```v
for n in 1 .. 101 {
    println(match true {
        n % 15 == 0 { 'FizzBuzz' }
        n % 5 == 0  { 'Buzz' }
        n % 3 == 0  { 'Fizz' }
        else        { n.str() }
    })
}
```
