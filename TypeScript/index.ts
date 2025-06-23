function greet(name: string, age: number): string {
  return `Hello, ${name}! You are ${age} years old.`;
}

let userName: string = "Prakash";
const userAge: number = 30;

let message: string = greet(userName, userAge);

console.log(message);

// let fruits: string[] = ["Apple", "Banana"];
// let scores: number[] = [90, 85, 100];

// let person: { name: string; age: number } = { name: "John", age: 30 };

// let user: [string, number] = ["Alice", 25];

enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;

console.log(c);

// Drawback of JavaScript

function greet1(name) {
  console.log("Hello, " + name);
}

greet1(42); // No error, but output is "Hello, 42"

function greet2(name: string) {
  console.log(`Hello, ${name}`);
}

//  greet2(42);
