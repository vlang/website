import strings

struct Color {
  r int
  g int
  b int
}

pub fn (c Color) str() string {
	return '{$c.r, $c.g, $c.b}' 
} 

fn rgb(r, g, b int) Color { 
	return Color{r: r, g: g, b: b}
} 

const (
  NUMBERS = [1, 2, 3]

  RED  = Color{r: 255, g: 0, b: 0}
  BLUE = rgb(0, 0, 255)
)

fn main() {
  println(NUMBERS)
  println(RED)
  println(BLUE)
}  
