// Счетчик состоит из спана и кнопок, которые, при клике,
// должны увеличивать и уменьшать его значение на единицу.
// Создай переменную counterValue в которой будет храниться
// текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки,
// внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const refs = {
  decrementEl: document.querySelector('button[data-action="decrement"]'),
  incrementEl: document.querySelector('button[data-action="increment"]'),
  valueEl: document.querySelector("#value"),
};

refs.decrementEl.addEventListener("click", changesValue);
refs.incrementEl.addEventListener("click", changesValue);

let counterValue = 0;

function changesValue(evt) {
  evt.currentTarget.dataset.action === "decrement"
    ? (counterValue -= 1)
    : (counterValue += 1);

  refs.valueEl.textContent = counterValue;
}
