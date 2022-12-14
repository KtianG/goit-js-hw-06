const input = document.querySelector("#font-size-control");
const output = document.querySelector("#text");

let fontSize = input.value;
console.log(fontSize);

const changeFontSize = (event) => {
  fontSize = input.value;
  output.style.fontSize = `${fontSize}px`;
};

input.addEventListener("change", changeFontSize);
