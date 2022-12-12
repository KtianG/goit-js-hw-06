const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const elements = [];

for (const ingredient of ingredients) {
  // 1. Utworzy oddzielny element <li>. Koniecznie użyj metody document.createElement().
  const ingredientElement = document.createElement("li");

  //2. Doda nazwę elementu jako jego zawartość tekstową.
  ingredientElement.textContent = ingredient;

  // 3. Doda do elementu klasę item.
  ingredientElement.classList.add("item");

  elements.push(ingredientElement);
}

// 4. Po czym umieści wszystkie <li> na liście podczas jednej operacji ul#ingredients.
document.querySelector("ul#ingredients").append(...elements);
