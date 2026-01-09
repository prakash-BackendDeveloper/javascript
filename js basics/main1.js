// DOM (Document Object Model) is a tree-like structure of your HTML.

// JavaScript uses the DOM to:
// Read HTML elements
// Change text / styles
// Add or remove elements
// Handle events (click, input, etc.)

// ---------

//get element by ID -  Select ONE element

// const heading = document.getElementById("title");

// heading.textContent = "DOM is Easy!";
// heading.style.color = "red";

// ---------

//get elements by class name - Select MULTIPLE elements

// const boxes = document.getElementsByClassName("box");

// boxes[0].style.color = "green";
// boxes[1].style.color = "orange";

//---------

//get elements by tag name - Select MULTIPLE elements

// const paragraphs = document.getElementsByTagName("p");

// for (let i = 0; i < paragraphs.length; i++) {
//   paragraphs[i].style.backgroundColor = "lightgray";
// }

//---------
//query selector - Select FIRST matching element
// const firstPara = document.querySelector(".box");
// firstPara.style.fontSize = "30px";

//---------
//query selector all - Select ALL matching elements
// const allBoxes = document.querySelectorAll(".box");
// allBoxes.forEach((box) => {
//   box.style.border = "2px solid blue";
// });

//---------
// Changing Content - textContent  → text only
// const heading2 = document.querySelector("h2");
// heading2.textContent = "Welcome to the DOM Tutorial";

// Changing Content - innerHTML → HTML + text
// const container = document.querySelector(".container");
// container.innerHTML += "<p>This paragraph was added using innerHTML.</p>";

//---------
// Create New Element
// const newPara = document.createElement("p");
// newPara.textContent = "I am a new paragraph";

// document.body.appendChild(newPara);

// ---------

// adding p tag inside a specific div

// const div = document.getElementById("pTags");

// const newP = document.createElement("p");

// newP.className = "box";
// newP.textContent = "Paragraph 3";

// div.appendChild(newP);

//---------
// Remove Element
// const removePara = document.querySelector(".box");
// removePara.remove();

//---------// Handling Events
// 1
// const button = document.getElementById("btn");
// button.addEventListener("click", () => {
//   alert("Button was clicked!");
// });
// 2
// const btn = document.getElementById("btn");

// btn.addEventListener("click", () => {
//   document.getElementById("output").textContent = "Button Clicked!";
// });.

//--------- // Hover Effect
// btn.addEventListener("mouseover", () => {
//   btn.style.backgroundColor = "yellow";
// });

// btn.addEventListener("mouseout", () => {
//   btn.style.backgroundColor = "";
// });

// -------- Input Event Handling
// const input = document.getElementById("name");

// input.addEventListener("keyup", (event) => {
//   document.getElementById("output").textContent = event.target.value;
// });

//--------- // Form Submission Handling
// const form = document.getElementById("myForm");

// form.addEventListener(
//   "submit",
//   (e) => {
//     e.preventDefault();
//     alert("Form Submitted");
//   },
//   { once: true }
// );

// form.addEventListener(
//   "reset",
//   function () {
//     console.log("Form reset");
//   },
//   { once: true }
// );


//--------- // Removing Event Listener
// function handleReset() {
//   console.log("Form reset");
// }

// form.addEventListener("reset", handleReset);


// form.removeEventListener("reset", handleReset);

// -----------

//--------- // Different Input Events
// const input = document.getElementById("name");
// input.addEventListener(
//   "input",
//   () => {
//     console.log("Typing...");
//   },
//   { once: true }
// );

// input.addEventListener(
//   "change",
//   () => {
//     console.log("Value changed");
//   },
//   { once: true }
// );

// input.addEventListener(
//   "focus",
//   function () {
//     console.log("Input focused");
//   },
//   { once: true }
// );

// input.addEventListener(
//   "blur",
//   function () {
//     console.log("Input left:", this.value);
//   },
//   { once: true }
// );
// window.addEventListener(
//   "scroll",
//   () => {
//     console.log("Scrolling...");
//   },
//   { once: true }
// );
