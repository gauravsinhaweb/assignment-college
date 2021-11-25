const output = document.querySelector("#output");
const input = document.querySelector("#file");
const btn = document.querySelector("#upload-btn");
const nav = document.querySelector("#nav");
function uploadHandler() {
  const inputValue = input.value;
  if (inputValue.length > 0) {
    alert("SUCCESS!✅");
  } else {
    alert("Oops! Please upload a file.");
  }
}
nav.addEventListener("click", function () {
  location.href = "./index.html";
});
btn.addEventListener("click", uploadHandler);
const personName = localStorage.getItem("person");
output.innerText = `${personName}!`;
