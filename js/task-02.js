// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = ingredients.map((ingredient) => {
  const ingredientLi = document.createElement("li");
  ingredientLi.textContent = ingredient;
  ingredientLi.classList.add("item");
  return ingredientLi;
});

const ingredientsEl = document.querySelector("#ingredients");
ingredientsEl.append(...ingredientsList);
