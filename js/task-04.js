//Utwórz zmienną counterValue w której będzie przechowywana aktualna wartość licznika i inicjalizuj wartość 0.
let counterValue = 0;

//funkcja obsługująca kliknięcia
function handleClick(addend) {
  counterValue += addend;
  console.log("click");

  //Aktualizuj interfejs nową wartością zmiennej counterValue.
  document.querySelector("#value").innerHTML = counterValue;
}

//Dodaj click listeners do przycisków, wewnątrz których zwiększaj i zmniejszaj wartość licznika.
const subtractButton = document.querySelector('[data-action="decrement"]');
const addButton = document.querySelector('[data-action="increment"]');

subtractButton.addEventListener("click", handleClick.bind(null, -1));
addButton.addEventListener("click", handleClick.bind(null, 1));
