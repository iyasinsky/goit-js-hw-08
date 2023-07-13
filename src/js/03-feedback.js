import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

// Ref
const form = document.querySelector('form');

// Дістаю дані з localStorage
const savedData = localStorage.getItem(STORAGE_KEY);
const parsedData = JSON.parse(savedData);

// Перевіряю чи дані в localStorage існують і записую по умові
let formData = {
  email: parsedData?.email ?? '',
  message: parsedData?.message ?? '',
};

// Виводжу дані в інпути
form.elements.email.value = formData.email;
form.elements.message.value = formData.message;

// Вішаю обробники подій
form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

// При події input пишу дані в об'єкт і зберігаю його в localStorage
function onFormInput(e) {
  formData[e.target.name] = e.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

// При відправці форми скидаю з неї дані і чищу localStorage
function onFormSubmit(e) {
  e.preventDefault();

  console.log(formData);
  formData = {};

  e.target.reset();

  localStorage.removeItem(STORAGE_KEY);
}
