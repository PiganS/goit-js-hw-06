// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль
// при клике на button.change-color и выводит значение цвета в span.color.
// Для генерации случайного цвета используй функцию getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const refs = {
  bodyEl: document.querySelector("body"),
  buttonEl: document.querySelector(".change-color"),
  colorValueEl: document.querySelector(".color"),
};

refs.buttonEl.addEventListener("click", changesColors);

function changesColors() {
  const randomHexColor = getRandomHexColor();
  refs.bodyEl.style.backgroundColor = randomHexColor;
  refs.colorValueEl.textContent = randomHexColor;
}
