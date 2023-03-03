document.getElementById('logout').style.display = 'none';
const registerForm = document.querySelector('form');
const data = new FormData(registerForm)
const email = data.get('email');
const pass = data.get('password');
const repeat = data.get('rePass');
const nofitication = registerForm.querySelector('.notification');
const regBtn = registerForm.children[4];
regBtn.addEventListener('click', register);


async function register(e){
    e.preventDefault();
    try {
        if(!email || !pass || !repeat) throw Error('All fields are requared!')
    } catch (error) {
        alert(error.message)
    }
}
console.log(registerForm.children[0].value);
