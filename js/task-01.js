const categories = document.querySelectorAll(".item");

//1. Policzy i wprowadzi do wiersza poleceń liczbę kategorii w ul#categories, czyli elementy li.item.
console.log("Number of categories: " + categories.length);

//2. Dla każdego elementu li.item na liście ul#categories, znajdzie i wprowadzi do wiersza poleceń tekst nagłówka elementu (tag <h2>) i liczbę elementów w kategorii (wszystkich <li>).
for (const category of categories) {
  console.log("");
  console.log("Category: " + category.querySelector("h2").textContent);
  console.log("Elements: " + category.querySelectorAll("li").length);
}
