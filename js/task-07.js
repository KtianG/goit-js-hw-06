const input = document.querySelector("#font-size-control");
const output = document.querySelector("#text");

let fontSize = input.value;
output.style.fontSize = `${fontSize}px`;
console.log(fontSize);

const changeFontSize = (event) => {
  fontSize = input.value;
  output.style.fontSize = `${fontSize}px`;
};

input.addEventListener("input", changeFontSize);
