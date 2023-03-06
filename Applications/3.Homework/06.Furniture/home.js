window.addEventListener('load', loadProducts);
const productTbody = document.querySelector('.table > tbody');


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