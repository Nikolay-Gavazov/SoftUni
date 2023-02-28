async function getInfo() {
    const stopId = document.getElementById('stopId').value;
    const buses = document.getElementById('buses');
    const stopName = document.getElementById('stopName');
    buses.innerHTML = ''

    try {
        const responce = await fetch(`http://localhost:3030/jsonstore/bus/businfo/${stopId}`);
        if(responce.ok == false) throw Error;
        
        const data = await responce.json();
        console.log(data.buses);
        stopName.textContent = data.name;
        Object.entries(data.buses).forEach(([busId, time]) => {
            const li = document.createElement('li');
            li.innerHTML = `Bus ${busId} arrives in ${time} minutes`;
            buses.appendChild(li);           
        });

    } catch (error) {
        stopName.textContent = 'Error';
    }
}