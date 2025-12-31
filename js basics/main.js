// ---- Static Methods -----
// class Pizza {
//   static pizzaCount = 0;
//   #size;
//   #crust;
//   #toppings;
//   #extraCheese;
//   constructor(
//     size = "large",
//     crust = "thin",
//     toppings = ["pepperoni", "mushrooms", "onions"],
//     extraCheese = true
//   ) {
//     this.#size = size;
//     this.#crust = crust;
//     this.#toppings = toppings;
//     this.#extraCheese = extraCheese;
//     Pizza.pizzaCount++;
//   }
//   static getPizzaCount() {
//     return Pizza.pizzaCount;
//   }
//   bake() {
//     return console.log(
//       "Baking a " +
//         this.#size +
//         " pizza with " +
//         this.#crust +
//         " crust, topped with " +
//         this.#toppings.join(", ") +
//         (this.#extraCheese ? " and extra cheese." : ".")
//     );
//   }
// }
// const myPizzaClass1 = new Pizza();
// myPizzaClass1.bake();
// console.log("Total pizzas created: " + Pizza.getPizzaCount());
// const myPizzaClass2 = new Pizza(
//   "medium",
//   "stuffed",
//   ["sausage", "green peppers", "black olives"],
//   false
// );
// myPizzaClass2.bake();
// console.log("Total pizzas created: " + Pizza.getPizzaCount());

// ---- Inheritance -----
// class Pizza {
//   #size;
//   #crust;
//   #toppings;
//   #extraCheese;
//   constructor(
//     size = "large",
//     crust = "thin",
//     toppings = ["pepperoni", "mushrooms", "onions"],
//     extraCheese = true
//   ) {
//     this.#size = size;
//     this.#crust = crust;
//     this.#toppings = toppings;
//     this.#extraCheese = extraCheese;
//   }
//   bake() {
//     return console.log(
//       "Baking a " +
//         this.#size +
//         " pizza with " +
//         this.#crust +
//         " crust, topped with " +
//         this.#toppings.join(", ") +
//         (this.#extraCheese ? " and extra cheese." : ".")
//     );
//   }
// }

// class SpecialtyPizza extends Pizza {
//   constructor(
//     size,
//     crust,
//     toppings,
//     extraCheese,
//     specialtyName = "Chef's Special"
//   ) {
//     super(size, crust, toppings, extraCheese);
//     this.specialtyName = specialtyName;
//   }
//   displaySpecialty() {
//     return console.log("This is our specialty pizza: " + this.specialtyName);
//   }
// }

// const mySpecialtyPizza = new SpecialtyPizza(
//   "medium",
//   "stuffed",
//   ["sausage", "green peppers", "black olives"],
//   false,
//   "Meat Lover's Delight"
// );
// mySpecialtyPizza.displaySpecialty();
// mySpecialtyPizza.bake();

// ---- JSON Methods -----

// const myObj = {
//   name: "Alice",
//   age: 30,
//   sub: function () {
//     return console.log(this.name + " is " + this.age + " years old.");
//   },
// };

// console.log(myObj.name);
// myObj.sub();
// const objToJson = JSON.stringify(myObj);
// console.log(objToJson);
// console.log(typeof objToJson);
// console.log(objToJson.name);
// const jsonToObj = JSON.parse(objToJson);
// console.log(jsonToObj);
// console.log(typeof jsonToObj);

// Object Methods
// const obj = { a: 1, b: 2, c: 3 };
// const entries = Object.entries(obj);
// const keys = Object.keys(obj);
// const values = Object.values(obj);
// console.log(keys);
// console.log(values);
// console.log(entries);

// variable = "This is a test.";
// console.log(variable);

// "use strict";
// variable = "This is a test.";
// console.log(variable);

// const variable = "This is a test.";
// console.log(variable);

// Object..create();

// const variable = "This is a test.";
// console.log(variable);
// variable = "Changed value.";
// console.log(variable);

// const makeError = () => {
//   try {
//     const name = "Alice";
//     name = "Bob";
//   } catch (error) {
//     console.log("Error caught: " + error.message);
//     console.table(error);
//     console.warn("This is a warning message.");
//     console.info("This is an informational message.");
//     console.error("This is a debug message.");
//   }
// };

// makeError();

// custom error
// class CustomError extends Error {
//   constructor(message) {
//     super(message);
//     this.name = "CustomError";
//   }
// }

// const throwCustomError = () => {
//   try {
//     throw new CustomError("Account Number is Incorrect");
//   } catch (error) {
//     console.log(error.name + ": " + error.message);
//   }
// };

// throwCustomError();

// finally block
// const useFinallyBlock = () => {
//   try {
//     console.log("Inside try block.");
//     //   throw new Error("An error occurred.");
//   } catch (error) {
//     console.log("Caught an error: " + error.message);
//   } finally {
//     console.log("Finally block executed.");
//   }
// };

// useFinallyBlock();

//Object.create example
// const person = {
//   greet: function () {
//     console.log("Hello, " + this.name);
//   },
// };
// const john = Object.create(person);
// john.name = "John";
// john.greet();
// person.greet();

// for...of loop

// let fruits = ["Apple", "Banana", "Mango"];

// for (let fruit of fruits) {
//   console.log(fruit);
// }

// forEach method - arrays Only

// let numbers = [10, 20, 30];
// numbers.forEach((num) => {
//   console.log(num);
// });

// map method

// let numbers = [1, 2, 3];
// let squaredNumbers = numbers.map((num) => num * num);
// console.log(squaredNumbers);

// filter method
// let numbers = [10, 15, 20, 25, 30];
// let filteredNumbers = numbers.filter((num) => num > 20);
// console.log(filteredNumbers);

// reduce method
// let numbers = [1, 2, 3, 4];
// let sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
// console.log(sum);

// find method
// let users = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
//   { id: 3, name: "Charlie" },
// ];
// let user = users.find((user) => user.id === 2);
// console.log(user);

// some method
// let numbers = [1, 2, 3, 4];
// let hasEvenNumber = numbers.some((num) => num % 2 === 0);
// console.log(hasEvenNumber);

// every method
// let numbers = [1, 2, 3, 4];
// let allPositive = numbers.every((num) => num > 0);
// console.log(allPositive);

// sort method
// let unsortedNumbers = [3, 1, 4, 2];
// let sortedNumbers = unsortedNumbers.sort();
// console.log(sortedNumbers);

// fill method
// let filledArray = new Array(5).fill(0);
// console.log(filledArray);

// findIndex method
// let index = users.findIndex((user) => user.name === "Charlie");
// console.log(index);

// // includes method
// let includesTwenty = numbers.includes(20);
// console.log(includesTwenty);








// Normal function and Hoisted function
// function add(a, b) {
//   return a + b;
// }

// console.log(add(3, 3));

// function add(a, b) {
//   return a + b;
// }

// can access 'this' keyword

// const person = {
//   name: "Harsh",
//   sayHi: function () {
//     console.log(this.name);
//   },
// };

// person.sayHi();


//Function Expression not Hoisted

// const add = function (a, b) {
//   return a + b;
// };

// console.log(add(2, 3));

//  const add = function (a, b) {
//   return a + b;
// };


// Arrow Function and not Hoisted

// const add = (a, b) => {
//   return a + b;
// };
// console.log(add(2, 3));

// const person = {
//   name: "Harsh",
//   sayHi: () => {
//     console.log(this.name);
//   },
// };

// person.sayHi();

//Closure and Higher Order Function(Function return another function) Example 1

// function outer() {
//   let count = 0;

//   function inner() {
//     count++;
//     console.log(count);
//   }

//   return inner;
// }

// const myFunc = outer();
// myFunc();
// myFunc();
// myFunc();






//Closure Example 2

// function greet(name) {
//   function sayHello() {
//     console.log("Hello " + name);
//   }

//   return sayHello;
// }

// const helloPrakash = greet("Prakash");
// helloPrakash();

// function bankAccount() {
//   let balance = 1000;

//   return {
//     deposit(amount) {
//       balance += amount;
//       console.log(balance);
//     },
//     withdraw(amount) {
//       balance -= amount;
//       console.log(balance);
//     },
//   };
// }

// const account = bankAccount();
// account.deposit(500);
// account.withdraw(300);

// Higher Order Function Example

//Function Taking Another Function

// function greet(name) {
//   return "Hello " + name;
// }

// function processUser(callback) {
//   console.log(callback("Prakash"));
// }

// processUser(greet);

// Function Returning Another Function

// function multiplier(x) {
//   return function (y) {
//     return x * y;
//   };
// }

// const double = multiplier(2);
// console.log(double(5));

// Using Arrow Functions
// const multiplier = (x) => (y) => x * y;

// const triple = multiplier(3);
// console.log(triple(4));

// Object Literals & Accessing Properties

// let user = {
//   name: "Prakash",
//   age: 30,
//   isDeveloper: true,
// };
// console.log(user.name);
// console.log(user.age);
// console.log(user["name"]);

//Dynamic Property Access
// let key = "age";
// console.log(user[key]);
// console.log(user.key);

// Property with Spaces or Special Characters

// let employee = {
//   "full name": "Prakash M",
//   "job-role": "Backend Developer",
// };

// console.log(employee["full name"]);
// console.log(employee["job-role"]);
// console.log(employee.full name);
// console.log(employee.job-role);

// Adding, Updating, Deleting Properties

// let user = {
//   name: "Prakash",
//   age: 30,
//   isDeveloper: true,
// };
// user.city = "Chennai";
// console.log(user);

// user.age = 27;
// console.log(user);

// delete user.isDeveloper;
// console.log(user);

// Object with Methods

// let person = {
//   name: "Prakash",
//   greet() {
//     console.log("Hello " + this.name);
//   },
// };

// person.greet();

// Nested Objects

// let student = {
//   name: "Arun",
//   marks: {
//     math: 90,
//     science: 85,
//   },
// };

// console.log(student.marks.math);

// Check Property Exists
// let user = {
//   name: "Prakash",
//   age: 30,
//   isDeveloper: true,
// };

// console.log("age" in user);
// console.log(user.hasOwnProperty("age"));

// Destructure

// Without Destructuring
// let arr = [10, 20, 30];

// let a = arr[0];
// let b = arr[1];
// console.log(a);
// console.log(b);

// With Destructuring
// let [a, b] = [10, 20, 30];

// console.log(a);
// console.log(b);

// Skip values
// let [first, , third] = [10, 20, 30];
// console.log(third);

// Default values
// let [x, y = 5] = [2];
// console.log(y);

// Object Destructuring
// Without destructuring

// let user = {
//   name: "Prakash",
//   age: 30,
// };

// let name = user.name;
// let age = user.age;

// let user = {
//   name: "Prakash",
//   age: 30,
// };

// let { name, age } = user;

// console.log(name);
// console.log(age);

// Rename variables

// let user = {
//   name: "Prakash",
//   age: 30,
// };

// let { name: userName, age: userAge } = user;
// console.log(userName, userAge);

// Default values
// let user = {
//   name: "Prakash",
//   age: 30,
// };
// let { city = "Chennai" } = user;
// console.log(city);

// Nested Object Destructuring

// let student = {
//   name: "Arun",
//   marks: {
//     math: 90,
//     science: 85,
//   },
// };

// let {
//   marks: { math },
// } = student;
// console.log(math);

// Destructuring in Function Parameters

// function printUser({ name, age }) {
//   console.log(name, age);
// }

// printUser({ name: "Prakash", age: 30 });

// Prototype
// let person = {
//   greet() {
//     console.log("Hello");
//   },
// };

// let user = {
//   name: "Prakash",
// };

// user.__proto__ = person;

// user.greet();

// Function Prototype

// function Student(name) {
//   this.name = name;
// }

// Student.prototype.sayHi = function () {
//   console.log("Hi " + this.name);
// };

// let s1 = new Student("Prakash");
// s1.sayHi();

// Es6+ Features
// Let / Const
// let count = 1;
// count = 2;
// console.log(count);
// const pi = 3.14;
// pi = 3.15;

// Template Strings(Template Literals)

// Old way
// let name = "Prakash";
// let age = 30;

// console.log("My name is " + name + " and I am " + age);
// // New way
// console.log(`My name is ${name} and I am ${age}`);

// Spread Operator
// let arr1 = [1, 2, 3];
// let arr2 = [...arr1, 4, 5];

// console.log(arr2);

// Copy Arrays
// let nums = [1, 2];
// let copy = [...nums];

// copy.push(3);
// console.log(nums);
// console.log(copy);

// Spread in Objects

// let user = { name: "Prakash", age: 30 };

// let updatedUser = { ...user, city: "Chennai" };

// console.log(updatedUser);

// Merge Objects
// let a = { x: 1 };
// let b = { y: 2 };

// let merged = { ...a, ...b };
// console.log(merged);

// Rest Operator
// function add(...numbers) {
//   console.log(numbers);
// }

// add(1, 2, 3);

// Rest with Normal Parameters
// function show(first, ...others) {
//   console.log(first);
//   console.log(others);
// }

// show(10, 20, 30);

// Default Parameters

// Without default parameter
// function greet(name) {
//   console.log("Hello " + name);
// }

// greet();

// With default parameter
// function greet(name = "Guest") {
//   console.log("Hello " + name);
// }

// greet();
// greet("Prakash");

// Multiple Default Parameters
// function calculate(price, tax = 5) {
//   console.log(price + tax);
// }

// calculate(100);
// calculate(100, 10);

// Optional Chaining
// let user = {};

// console.log(user.address.city);
// console.log(user?.address?.city);

// let users = [];
// console.log(users[0]?.names);

// Nullish Coalescing (null / undefined)
// let count = 0;
// console.log(count ?? 10);

// let name = null;
// console.log(name ?? "Guest"); // Guest

// let age = undefined;
// console.log(age ?? 18); // 18

// console.log("" ?? "Default");
// console.log(0 ?? 100);
// console.log(false ?? true);

// optional chaining with nullish coalescing

// let user = {};

// let city = user.address?.city ?? "Chennai";
// console.log(city);

// Asynchronous JavaScript
// callback - A callback is a function passed as an argument to another function, and executed later.

// Normal callback (function keyword)
// function greet(name, callback) {
//   console.log("Hello " + name);
//   callback();
// }

// greet("Prakash", function () {
//   console.log("Welcome!");
// });

// Arrow function callback
// function greet(name, callback) {
//   console.log("Hello " + name);
//   callback();
// }

// greet("Prakash", () => {
//   console.log("Welcome!");
// });

// Issue with Callbacks (Callback Hell)

// function download() {
//   console.log("Downloading...");
// }

// function show() {
//   console.log("Show file");
// }

// download();
// show();

// function download() {
//   setTimeout(() => {
//     console.log("Downloading completed");
//   }, 3000);
// }

// function show() {
//   console.log("Show file");
// }

// download();
// show();

// Using Callback to ensure show() runs after download() completes

// function download(callback) {
//   setTimeout(() => {
//     console.log("Downloading completed");
//     callback();
//   }, 3000);
// }

// function show() {
//   console.log("Show file");
// }

// download(show);

// callback hell example

// function login(user, callback) {
//   setTimeout(() => {
//     console.log("User logged in:", user);
//     callback();
//   }, 1000);
// }

// function fetchData(callback) {
//   setTimeout(() => {
//     console.log("Data fetched");
//     callback();
//   }, 1000);
// }

// function processData(callback) {
//   setTimeout(() => {
//     console.log("Data processed");
//     callback();
//   }, 1000);
// }

// function saveData() {
//   setTimeout(() => {
//     console.log("Data saved");
//   }, 1000);
// }

// // Callback Hell (Pyramid of Doom)
// login("Prakash", () => {
//   fetchData(() => {
//     processData(() => {
//       saveData();
//     });
//   });
// });

// using Promises - A Promise represents a value that will be available in the future — either resolved (success) or rejected (failure).
// function login(user) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("User logged in:", user);
//       resolve();
//     }, 1000);
//   });
// }

// function fetchData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Data fetched");
//       resolve();
//     }, 1000);
//   });
// }

// function processData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Data processed");
//       resolve();
//     }, 1000);
//   });
// }

// function saveData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Data saved");
//       resolve();
//     }, 1000);
//   });
// }

// login("Prakash")
//   .then(fetchData)
//   .then(processData)
//   .then(saveData)
//   .catch(console.error);

// Creating a Promise

// Problem Without Promise

// console.log("Start");

// setTimeout(() => {
//   console.log("Data received");
// }, 2000);

// console.log("End");

// Callback Solution (Old way)

// function fetchData(callback) {
//   setTimeout(() => {
//     callback("Data received");
//   }, 2000);
// }

// fetchData((data) => {
//   console.log(data);
// });

// Create Your FIRST Promise

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise data received");
//   }, 2000);
// });

// promise.then((data) => {
//   console.log(data);
// });

// Promise with Error Handling

// const promise = new Promise((resolve, reject) => {
//   let success = true;
//   setTimeout(() => {
//     if (success) {
//       resolve("Success");
//     } else {
//       reject("Something went wrong");
//     }
//   }, 2000);
// });

// promise.then((data) => console.log(data)).catch((error) => console.log(error));

// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Fetched data");
//     }, 2000);
//   });
// }

// fetchData().then((data) => {
//   console.log(data);
// });

// Promise Chaining

// function step1() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Step 1 done");
//     }, 1000);
//   });
// }

// function step2(msg) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(msg + " → Step 2 done");
//     }, 1000);
//   });
// }

// step1()
//   .then((result1) => {
//     console.log(result1);
//     return step2(result1);
//   })
//   .then((result2) => {
//     console.log(result2);
//   });

// Error Handling in Promises
// function step1() {
//   return new Promise((resolve, reject) => {
//     resolve("step 1 done");
//   });
// }

// function step2() {
//   return new Promise((resolve, reject) => {
//     reject("step 2 failed");
//   });
// }

// step1()
//   .then((data) => {
//     console.log(data);
//     step2();
//   })
//   .then(console.log(""))
//   .catch((error) => console.log(error));

// Finally Block in Promises
// function fetchData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Data loaded");
//     }, 1000);
//   });
// }

// fetchData()
//   .then((data) => console.log(data))
//   .catch(console.log)
//   .finally(() => console.log("Done"));

// real world example - Fetch API
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// Finally with success case
// const myPromise = new Promise((resolve, reject) => {
//   resolve("Done");
// });

// myPromise
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error))
//   .finally(() => {
//     console.log("Promise finished");
//   });

// Finally with error case
// const myPromise = new Promise((resolve, reject) => {
//   reject("Error happened");
// });

// myPromise
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error))
//   .finally(() => {
//     console.log("Cleanup done");
//   });

// async / await - async makes a function always return a Promise

// async
// async function test() {
//   return "Hello";
// }

// test().then((data) => console.log(data));

// async & await (instead of .then())
// function fetchData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Fetched data");
//     }, 2000);
//   });
// }

// async function getData() {
//   const result = await fetchData();
//   console.log(result);
// }

// getData();

// multiple await
// function step1() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("Step 1 done"), 1000);
//   });
// }

// function step2() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("Step 2 done"), 1000);
//   });
// }

// async function process() {
//   const r1 = await step1();
//   console.log(r1);

//   const r2 = await step2();
//   console.log(r2);
// }

// process();

// Error Handling with try / catch

// function fetchData(success) {
//   return new Promise((resolve, reject) => {
//     if (success) {
//       resolve("Data loaded");
//     } else {
//       reject("Error loading data");
//     }
//   });
// }

// async function loadData() {
//   try {
//     const data = await fetchData(false);
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// loadData();

// Real World Example with Fetch API and async/await
// async function getUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const users = await response.json();
//     console.log(users);
//   } catch (error) {
//     console.log("Error:", error);
//   }
// }

// getUsers();
