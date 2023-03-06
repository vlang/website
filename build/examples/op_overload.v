struct Vec {
  x int
  y int
}

pub fn (a Vec) str() string {
  return '{$a.x, $a.y}'
}

fn (a Vec) + (b Vec) Vec {
  return Vec {
    a.x + b.x,
    a.y + b.y
  }
}

fn (a Vec) - (b Vec) Vec {
  return Vec {
    a.x - b.x,
    a.y - b.y
  }
}

fn main() {
  a := Vec{2, 3}
  b := Vec{4, 5}
  println(a + b) 
  println(a - b) 
}
