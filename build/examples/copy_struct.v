struct User {
  name string
  age  int   
} 

fn main() { 
  user1 := User{'Bob', 20} 
  user2 := { user1 | name: 'Peter' } 
  println(user1.name)
  println(user1.age)
  println(user2.name) 
  println(user2.age)
} 
