document.getElementById('user').style.display = 'none';
const registerForm = document.querySelector('form');
const nofitication = registerForm.querySelector('.notification');
const regBtn = registerForm.children[4];
regBtn.addEventListener('click', register);


async function register(e){
    e.preventDefault();
    const data = new FormData(registerForm)
    const email = data.get('email');
    const password = data.get('password');
    const repeat = data.get('rePass');
    
    try {
        if(!email || !password || !repeat) throw Error('All fields are requared!')
        if(password != repeat) throw Error('The password dont match!');
        
        const res = await fetch('http://localhost:3030/users/register',{
            method: 'POST',
            headers: {'Content-Type': 'aplication/json'},
            body: JSON.stringify({
                email,
                password
            })
        });

        if(!res.ok){
            const error = await res.json();
            nofitication.textContent = error.message;
            throw new Error(error.message);
            
        }
        const data = await res.json();
        const userData = {
            email: data.email,
            id: data._id,
            token: data.accessToken
        };
        localStorage.setItem('userData', JSON.stringify(userData));
        window.location = ('./index.html');
    } catch (error) {
        alert(error.message)
    }
    registerForm.reset();
    
}
