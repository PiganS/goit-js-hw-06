// Напиши скрипт который:
// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories,
// найдет и выведет в консоль текст заголовка элемента (тега <h2>)
//  и количество элементов в категории (всех вложенных в него <li>).
// Для выполнения этой задачи нужно использовать метод forEach() и свойства навигации по DOM.
// В результате, в консоли будут выведены такие сообщения.

const categoriesEl = document.querySelector("#categories");

console.log(`Number of categories: ${categoriesEl.children.length}`);

[...categoriesEl.children].forEach((category) => {
  console.log(`Category: ${category.firstElementChild.textContent}`);
  console.log(`Elements: ${category.lastElementChild.children.length}`);
});
