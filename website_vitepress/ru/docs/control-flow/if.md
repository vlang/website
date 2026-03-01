# If / Else

## Basic Syntax

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

## If as an Expression

In V, `if` is an expression and can be used on the right side of an assignment:

```v
num := 7
result := if num % 2 == 0 { 'even' } else { 'odd' }
println(result) // odd
```

## Inline Short Form

```v
x := 42
if x > 0 { println('positive') }
```

## Condition with Initialization

You can initialize a variable inside an `if` condition:

```v
if val := some_function_returning_option() {
    println('got value: ${val}')
} else {
    println('no value')
}
```

## The `in` Operator

Use `in` to check membership in arrays or maps:

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

Use `!in` for the inverse:

```v
if 5 !in nums {
    println('5 is not in the array')
}
```

## FizzBuzz Example

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
