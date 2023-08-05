// Напиши скрипт, который при потере фокуса на инпуте (событие blur),
// проверяет его содержимое на правильное количество введённых символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Сколько символов должно быть в инпуте,
// указывается в его атрибуте data-length.
// Если введено подходящее количество символов,
// то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid,
// которые мы уже добавили в исходные файлы задания.

const validationInputEl = document.querySelector("#validation-input");
const dataLengthEl = Number(validationInputEl.dataset.length);

validationInputEl.addEventListener("blur", onInputBlur);

function onInputBlur(evt) {
  if (evt.currentTarget.value.trim().length === dataLengthEl) {
    validationInputEl.classList.add("valid");
    validationInputEl.classList.remove("invalid");
  } else {
    validationInputEl.classList.add("invalid");
    validationInputEl.classList.remove("valid");
  }
}

//   @@@@@@@@@@@@@@ способ 2 @@@@@@@@@@@@@@

// function onInputBlur(evt) {
//   validationInputEl.classList.add("valid", "invalid");

//   evt.currentTarget.value.trim().length !== dataLengthEl
//     ? validationInputEl.classList.remove("valid")
//     : validationInputEl.classList.remove("invalid");
// }
