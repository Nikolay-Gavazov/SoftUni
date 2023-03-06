document.getElementById('logoutBtn').addEventListener('click', logout);
window.addEventListener('load', loadProducts);

const userData = JSON.parse(localStorage.getItem('userData'));

const createForm = document.querySelector('form');
createForm.action = 'none';
createForm.addEventListener('submit', create);

const productTbody = document.querySelector('.table > tbody');
const buyBtn = document.querySelector('.col-md-12 > button');
buyBtn.addEventListener('click', buy);

const orderDiv = document.querySelector('.orders');
const boughtFurnitureP = orderDiv.querySelectorAll('p')[0];
boughtFurnitureP.innerHTML = '';
const totalPriceP = orderDiv.querySelectorAll('p')[1];
totalPriceP.innerHTML = '';
const orderBtn = orderDiv.querySelector('button');
orderBtn.addEventListener('click', order);

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
        loadProducts()
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
            productTbody.appendChild(tr);
        });

    } catch (error) {
        alert(error.message);
    }

}

async function buy(e) {
    e.preventDefault();
    const orders = {
        boughtFurniture: [],
        totalPrice: 0
    }

    const checkBoxes = Array.from(productTbody.querySelectorAll('input'));
    
    const checked = checkBoxes.filter(e => e.checked == true).forEach(el => {
        const tr = el.parentElement.parentElement;
        const [img, name, price, factor] = Array.from(tr.children);
        orders.boughtFurniture.push(name.textContent.trim());
        orders.totalPrice += Number(price.textContent);
    });
    try {
        if(orders.boughtFurniture.length == 0) throw Error('You didnt check anithing!');
        alert('Do you send the order?')
        const res = await fetch('http://localhost:3030/data/orders', {
            method: 'post',
            headers: {
                'Content-type': 'application/json',
                'X-Authorization': userData.token
            },
            body: JSON.stringify({
                _ownerId: userData.id,
                boughtFurniture: orders.boughtFurniture,
                totalPrice: orders.totalPrice                
            })
        });
        if(!res.ok){
            const error = await res.json();
            throw Error(error.message)
        }

    } catch (error) {
        alert(error.message)
    }

}

async function order(e){
    e.preventDefault()
    try {
        const res = await fetch(`http://localhost:3030/data/orders?where=_ownerId%3D{${userData.id}}`)
        if(!res.ok){
            const error = await res.json();
            throw Error(error.message)
        }
        
        const data = await res.json()
        console.log(data);
    } catch (error) {
        alert(error.message)
    }
    boughtFurnitureP.innerHTML = `
    <p>Bought furniture: <span></span></p>
    `;
    totalPriceP.innerHTML = `
    <p>Total price: <span>$</span></p>
    `;
    
}