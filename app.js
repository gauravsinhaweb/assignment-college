const dropdown = document.querySelector("#dropdown");
const btn = document.querySelector("#btn");
const input = document.querySelector("#input");
const nav = document.querySelector("#nav");

function outputValue() {
  const selectedValue = dropdown.value;
  const inputValue = input.value;

  if (selectedValue == "null") {
    alert("Please select a person");
  } else if (inputValue.length === 0) {
    alert("Please enter a task");
  } else {
    localStorage.setItem("person", selectedValue);

    location.href = "./PageTwo.html";
  }
}
nav.addEventListener("click", function () {
  location.href = "./index.html";
});
btn.addEventListener("click", outputValue);
