document.getElementById('logout').style.display = 'none';
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
            throw error;
            
        }
        const data = await res.json();
        const authToken = data.accessToken;
        localStorage.setItem('accessToken', authToken);
        document.location.href = 'index.html';
    
    } catch (error) {
        alert(error.message)
    }
}