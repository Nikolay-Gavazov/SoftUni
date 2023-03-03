
const table = document.getElementById('results');
const inputForm = document.querySelector('form')
inputForm.addEventListener('submit', submit)
let firstName = inputForm[0].value;
let lastName = inputForm[1].value;
let facultyNum = inputForm[2].value;
let grade = Number(inputForm[3].value);

async function submit(e){
    e.preventDefault();

    try {
        if(!firstName || !lastName || !facultyNum || !grade){ 
            throw new Error('All fields must be filled!');
        }
        if(typeof(grade) != 'number'){
            throw Error('Grade must be a Number!');
        }
        
        const data = {firstName: firstName, lastName: lastName, facultyNumber: facultyNum, grade: grade}
        const res = await fetch('http://localhost:3030/jsonstore/collections/students', {
            method: 'POST',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(data)
        })
        if(!res.ok) throw Error('responce error');
        inputForm[0].value = '';
        inputForm[1].value = '';
        inputForm[2].value = '';
        inputForm[3].value = '';
        
        table.children[1].innerHTML = '';

        try {
            const res = await fetch('http://localhost:3030/jsonstore/collections/students');
            if(!res.ok) throw Error;

            const data = await res.json();
            for(const el in data){
                console.log(data[el]);
                const tr = document.createElement('tr');
                tr.innerHTML = `
                <th>${data[el].firstName}</th>
                    <th>${data[el].lastName}</th>
                    <th>${data[el].facultyNumber}</th>
                    <th>${data[el].grade}</th>
                `
                table.children[1].appendChild(tr);
            }
        } catch (error) {
            alert(error.messege)
        }

    } catch (error) {
        alert(error.messege)
    }
}


