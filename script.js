const _ = require("lodash.throttle");

const ref = {
  form: document.querySelector(".js-feedback-form"),
  textarea: document.querySelector(".js-feedback-form textarea"),
};
console.log(TypeError);
ref.form.addEventListener("submit", handleFormSubmit);
ref.textarea.addEventListener("input", handleLocalMsgInput);

populateTextare();

function handleFormSubmit(e) {
  e.preventDefault();
  console.log("Отправка формі");
  e.currentTarget.reset();
  localStorage.removeItem("msg");
}

function populateTextare() {
  const textareaMsg = localStorage.getItem("msg");
  if (textareaMsg) {
    ref.textarea.value = textareaMsg;
  }
}

function handleLocalMsgInput(e) {
  console.log(e.target.value);
  const myMsg = e.target.value;
  localStorage.setItem("msg", myMsg);
}
