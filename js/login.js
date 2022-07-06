const input = document.querySelector('.login__input');
const button = document.querySelector('.login__button');
const form = document.querySelector('.login-form');

/* Login Form */

/* Validar o Login */
const validateInput = ({ target }) => {
    /* Caso o campo usuário tenha 7 caracteres, salva no banco */
    if(target.value.length > 6) {
        button.removeAttribute('disabled');
    } else {
        button.setAttribute('disabled', '');
    }
}

/* Validar o usuário e redirecionar para outra página */
const handleSubmit = (event) => {
    event.preventDefault();

    localStorage.setItem('player', input.value);
    window.location = 'pages/game.html';
}

input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);