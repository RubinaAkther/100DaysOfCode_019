const passwordInput = document.getElementById('password');
const length = 12;

const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const specialCharacters = '!@#$%^&*()_+~|}{[]?></-=';

function generatePassword() {
  let password = '';
  const allCharacters = upperCase + lowerCase + numbers + specialCharacters;

  for (let i = 0; i < length; i++) {
    const character = allCharacters.charAt(
      Math.floor(Math.random() * allCharacters.length)
    );
    password += character;
  }

  passwordInput.value = password;
}

function copyPassword() {
  const passwordInput = document.getElementById('password');
  const copiedMessage = document.getElementById('copiedMessage');

  passwordInput.select();
  document.execCommand('copy');

  copiedMessage.style.display = 'inline';

  setTimeout(() => {
    copiedMessage.style.display = 'none';
  }, 2000);
}
