function attachEvents() {
    document.getElementById('btnLoad').addEventListener('click', load);
    document.getElementById('btnCreate').addEventListener('click', create);

    const phoneBook = document.getElementById('phonebook');
    const person = document.getElementById('person');
    const phone = document.getElementById('phone');

    async function load(e){
        phoneBook.innerHTML = '';
        try {
            const res = await fetch('http://localhost:3030/jsonstore/phonebook');
            if(!res.ok) throw Error;

            const data = await res.json();
            const dataArr = Object.entries(data);
            if(dataArr.length == 0) throw new Error('There is nothing in the phonebook');
            dataArr.forEach(([key, value]) => {
                const li = document.createElement('li');
                li.textContent = `${value.person}: ${value.phone}`;
                const btn = document.createElement('button');
                btn.textContent = 'Delete';
                btn.id = value._id;
                btn.addEventListener('click', del);
                li.appendChild(btn);
                phoneBook.appendChild(li);

            });
        } catch (error) {
            alert(error.message);
        }
    }

    async function create(){
        try {
            if(!person.value || !phone.value) throw Error('All fields must be filled!')
        
            const data = {person: person.value, phone: phone.value};
            const res = await fetch('http://localhost:3030/jsonstore/phonebook', {
                method: 'POST',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(data)
            })
            if(!res.ok) throw Error;
            person.value = '';
            phone.value = '';
        } catch (error) {
            alert(error.message)
        }
    }
    async function del(e){
       try {
        console.log(e.target.id);
        const res = await fetch(`http://localhost:3030/jsonstore/phonebook/${e.target.id}` , {
            method: 'Delete'
        });
        if(!res.ok) throw Error
        phoneBook.innerHTML = '';
        load()

       } catch (error) {
        alert(error.message)
       }
    }
}

attachEvents();