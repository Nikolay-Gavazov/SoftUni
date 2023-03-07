document.getElementById('user').style.display = 'none';
const loginForm = document.querySelector('form');
const nofitication = loginForm.querySelector('.notification');
const loginBtn = loginForm.querySelector('button')
loginBtn.addEventListener('click', login);


async function login(e){
    e.preventDefault();

    const data = new FormData(loginForm)
    const email = data.get('email');
    const pass = data.get('password');

    try {
        if(!email || !pass) throw Error('All fields are requared!')
    
        const res = await fetch('http://localhost:3030/users/login',{
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
            throw Error(error.message);
            
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
}