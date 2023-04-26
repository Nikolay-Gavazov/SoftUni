loadStudents()
const table = document.getElementById('results');
const inputForm = document.getElementById('form')
inputForm.addEventListener('submit', submit)

async function loadStudents(){
    try {
        const res = await fetch('http://localhost:3030/jsonstore/collections/students');
        if(!res.ok){
            const error = res.json();
            throw Error(error.messege)
        }

        const data = await res.json();
        for(const el in data){
            const tr = document.createElement('tr');
            tr.innerHTML = `<td>${data[el].firstName.trim()}</td><td>${data[el].lastName.trim()}</td><td>${data[el].facultyNumber.trim()}</td><td>${data[el].grade.toFixed(2)}</td>`
            table.children[1].appendChild(tr);
        }
    } catch (error) {
        alert(error.messege)
    }
}

async function submit(e){
    e.preventDefault();
    const data = new FormData(inputForm);
    const firstName = data.get('firstName')
    const lastName = data.get('lastName')
    const facultyNumber = data.get('facultyNumber')
    let grade = data.get('grade')
    try {
        if(!firstName || !lastName || !facultyNumber || !grade){ 
            throw new Error('All fields must be filled!');
        }
        const res = await fetch('http://localhost:3030/jsonstore/collections/students', {
            method: 'POST',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify({
                    firstName, 
                    lastName, 
                    facultyNumber, 
                    grade
                })
        })
        if(!res.ok) throw Error('responce error');
        inputForm.reset()
        loadStudents()
       

    } catch (error) {
        alert(error.message)
    }
}


