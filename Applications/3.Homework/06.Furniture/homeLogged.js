document.getElementById('logoutBtn').addEventListener('click', logout);
window.addEventListener('load', loadProducts);
const createForm = document.querySelector('form');
createForm.action = 'none';
createForm.addEventListener('submit', create);

const productTbody = document.querySelector('.table > tbody');
const buyBtn = document.querySelector('.col-md-12 > button');

buyBtn.addEventListener('click', buy)

const userData = JSON.parse(localStorage.getItem('userData'));

async function logout(e) {
    e.preventDefault()
    const res = await fetch('http://localhost:3030/users/logout', {
        headers: {
            'X-Authorization': userData.token
        }
    });
    localStorage.clear();
    window.location = ('./home.html');
}

async function create(e) {
    e.preventDefault()
    const createData = new FormData(e.target);
    const name = createData.get('name');
    let price = createData.get('price');
    let factor = createData.get('factor');
    const img = createData.get('img');
    try {
        if (!name || !price || !factor || !img) throw new Error('All fields are requared!');
        if (price != Number(price)) throw new Error('Price must be a Number!')
        if (factor != Number(factor)) throw new Error('Factor must be a Number!')
        const res = await fetch('http://localhost:3030/data/furniture', {
            method: 'post',
            headers: {
                'Content-type': 'application/json',
                'X-Authorization': userData.token
            },
            body: JSON.stringify({
                name,
                price: Number(price),
                factor: Number(factor),
                img
            })
        })
        if (!res.ok) {
            const error = await res.json()
            throw new Error(error.message)
        }
        createForm.reset();
    } catch (error) {
        alert(error.message);
    }
}

async function loadProducts(e) {
    productTbody.replaceChildren();
    try {
        const res = await fetch('http://localhost:3030/data/furniture');
        if (!res.ok) {
            const error = await res.json();
            throw new Error(error.message);
        }

        const data = await res.json();
        data.forEach(el => {
            console.log(el);
            const tr = document.createElement('tr');
            tr.innerHTML = `
            <td>
            <img
            src="${el.img}">
            </td>
            <td>
            <p>${el.name}</p>
            </td>
            <td>
            <p>${el.price}</p>
            </td>
            <td>
            <p>${el.factor}</p>
            </td>
            <td>
            <input type="checkbox"/>
            </td>
            `;
            
        });
    } catch (error) {
        alert(error.message);
    }

}

async function buy(e) {
    e.preventDefault();
    console.log(e.target);
}