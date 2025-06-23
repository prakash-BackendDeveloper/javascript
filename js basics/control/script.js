function change() {
  console.log("hi");
  let val = document.getElementsByClassName("myClass");
  for (let i = 0; i < val.length; i++) {
    val[i].textContent = "Changed";
  }
  console.log(val.length);
}
