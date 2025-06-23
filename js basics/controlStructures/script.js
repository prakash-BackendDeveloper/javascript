function checkAge() {
  let age = document.getElementById("ageInput").value;
  console.log(typeof age);
  if (age >= 18) {
    alert("Adult");
  } else {
    alert("Minor");
  }
}
