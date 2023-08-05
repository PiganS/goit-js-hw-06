// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
// подставляет его текущее значение в span#name-output.
// Если инпут пустой, в спане должна отображаться строка "Anonymous".

const refs = {
  nameInputEl: document.querySelector("#name-input"),
  nameOutputeEl: document.querySelector("#name-output"),
};

refs.nameInputEl.addEventListener("input", onInputChange);

function onInputChange(event) {
  event.currentTarget.value === ""
    ? (refs.nameOutputeEl.textContent = "Anonymous")
    : (refs.nameOutputeEl.textContent = event.currentTarget.value);
}
