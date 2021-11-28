const btn = document.querySelector('.submit-btn');
const form = document.querySelector('.form');
const email = document.querySelector('.email-input');
const errorMsg = document.querySelector('.error-msg');

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

btn.addEventListener('click', (e) => {
  e.preventDefault();

  if (email.value.trim() === '') {
    errorMsg.innerText = 'Whoops! It looks like you forgot to add your email';
    form.classList.add('error');
    return;
  } else if (!validateEmail(email.value)) {
    errorMsg.innerText = 'Please provide a valid email address';
    form.classList.add('error');
    return;
  }
  form.classList.remove('error');
});
