async function getInfo() {
    const stopId = document.getElementById('stopId').value;
    const submitBtn = document.getElementById('submit');
    const buses = document.getElementById('buses');
    const stopName = document.getElementById('stopName');


    try {
        const responce = await fetch(`http://localhost:3030/jsonstore/bus/businfo/${stopId}`);
        if(!responce.ok == false) throw Error;
        const data = await responce.json();
        console.log(data);
        stopName.textContent = data.name;

    } catch (error) {
        stopName.textContent = 'Error';
    }
}