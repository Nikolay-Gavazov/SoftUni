document.getElementById('logout').style.display = 'none';
const registerForm = document.querySelector('form');
const nofitication = registerForm.querySelector('.notification');
const regBtn = registerForm.children[4];
regBtn.addEventListener('click', register);


async function register(e){
    const data = new FormData(registerForm)
    const email = data.get('email');
    const pass = data.get('password');
    const repeat = data.get('rePass');
    e.preventDefault();
    try {
        if(!email || !pass || !repeat) throw Error('All fields are requared!')
        if(pass != repeat) throw Error('The password dont match!');
        
        const res = await fetch('http://localhost:3030/users/register',{
            method: 'POST',
            headers: {'Content-Type': 'aplication/json'},
            body: JSON.stringify({
                email: email,
                password: pass
            })
        });

        if(!res.ok){
            const error = await res.json();
            nofitication.textContent = error.message;
            throw error;
            
        }
        const data = await res.json();
        const authToken = data.accessToken;
        localStorage.setItem('accessToken', authToken);
        document.location.href = 'index.html';
    } catch (error) {
        alert(error.message)
    }
    registerForm.reset();
    document.querySelector('.email > span').textContent = email;
}
