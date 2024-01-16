const form = document.querySelector('.my-form');
const loginInput = document.querySelector('.username');
const passwordInput = document.querySelector('.password');
const confirmPasswordInput = document.querySelector('.confirm-password');

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const login = loginInput.value;
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;
  if (!login || !password || !confirmPassword) {
    alert('Пожалуйста, заполните все поля');
    return;
  }
  if (!isValidLogin(login)) {
    alert('Логин может содержать только буквы на латинице и цифры');
    return;
  }
  if (!isValidPassword(password)) {
    alert('Пароль должен содержать как минимум одну заглавную букву, одну строчную букву и одну цифру');
    return;
  }
  if (password !== confirmPassword) {
    alert('Пароли не совпадают');
    return;
  }
  form.submit();
});
function isValidLogin(login) {
  const pattern = /^[a-zA-Z0-9]+$/;
  return pattern.test(login);
}
function isValidPassword(password) {
  const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,20}$/;
  return pattern.test(password);
}