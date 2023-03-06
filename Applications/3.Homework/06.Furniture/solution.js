window.addEventListener('load', solve);
function solve() {
  const forms = document.querySelectorAll('form');
  const registerForm = forms[0];
  registerForm.action = 'none';
  registerForm.addEventListener('submit', register);
  const loginForm = forms[1];
  loginForm.action = 'none';
  loginForm.addEventListener('submit', login);
}

async function  register(e){
  e.preventDefault()
  const registerData = new FormData(e.target);
  const email = registerData.get('email');
  const password = registerData.get('password');
  const rePass = registerData.get('rePass');

  try {
    if(!email || !password || !rePass) throw new Error('All fields are requared!')
    if(password != rePass) throw new Error('Password doesnt match!')
    
    const res = await fetch('http://localhost:3030/users/register', {
      method: 'post',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({
        email,
        password
      })
    });

    if(!res.ok){
      const error = await res.json();
      throw new Error(error.message);
      
  }
  const data = await res.json();
  const userData = {
      email: data.email,
      id: data._id,
      token: data.accessToken
  };
  localStorage.setItem('userData', JSON.stringify(userData));
  window.location = ('./homeLogged.html');
  document.getElementById('logoutBtn').addEventListener('click', logout);
  registerForm.reset();
  } catch (error) {
    alert(error.message);
  }
}

async function login(e){
  e.preventDefault()
  const loginData = new FormData(e.target);
  const email = loginData.get('email');
  const password = loginData.get('password');

  try {
    if(!email || !password) throw new Error('All fields are requared!');

    const res = await fetch('http://localhost:3030/users/login',{
      method: 'post',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({
        email,
        password
      })
    });

    if(!res.ok){
      const error = await res.json();
      throw new Error(error.message)
    }

    const data = await res.json();
    const userData = {
      email: data.email,
      id: data._id,
      token: data.accessToken
    }
    localStorage.setItem('userData', JSON.stringify(userData));
    window.location = ('./homeLogged.html');
    document.getElementById('logoutBtn').addEventListener('click', logout);
    loginForm.reset();
  } catch (error) {
    alert(error.message);
  }

}

