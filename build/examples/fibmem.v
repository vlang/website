const (
  MAX = 15 
)

struct Fib {
  nums []int
}

fn (fib mut Fib) calc(n int) int {
  if n <= 1 {
    return n
  }
  if fib.nums[n] != 0 {
    return fib.nums[n]
  }
  fib.nums[n] = fib.calc(n - 1) + fib.calc(n - 2)
  return fib.nums[n]
}

fn main() {
  mut fib := Fib {
    nums: [0].repeat(MAX)
  }
  for i := 0; i < MAX; i++ {
    println(fib.calc(i))
  }
}
