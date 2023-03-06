document.getElementById('logoutBtn').addEventListener('click', logout);

const createForm = document.querySelector('form');
createForm.action = 'none';
createForm.addEventListener('submit', create);

const productTbody = document.querySelector('.table > tbody');
const buyBtn = document.querySelector('.col-md-12 > button');

buyBtn.addEventListener('click', buy)

const userData = JSON.parse(localStorage.getItem('userData'));

async function logout(e){
    e.preventDefault()
    const res = await fetch('http://localhost:3030/users/logout',{
        headers:{
            'X-Authorization': userData.token
        }
    });
    localStorage.clear();
    window.location = ('./home.html');
}

async function create(e){
    e.preventDefault()
    const createData = new FormData(e.target);
    const name = createData.get('name');
    const price = createData.get('price');
    const factor = createData.get('factor');
    const img = createData.get('img');

    try {
        if(!name || ! price || ! factor || !img) throw new Error('All fields are requared!');
        if(Number.isNaN(price))throw new Error('Price must be a Number!')
        if(Number.isNaN(factor))throw new Error('Factor must be a Number!')
        const res = await fetch('http://localhost:3030/data/furniture', {
            method: 'post',
            headers:{'Content-type': 'application/json',
            'X-Authorization': userData.token
        },
        body: JSON.stringify({
            name,
            price: Number(price),
            factor: Number(factor),
            img
        })
        })

    } catch (error) {
       alert(error.message); 
    }
}

async function buy(e){
    e.preventDefault();
    console.log(e.target);
}