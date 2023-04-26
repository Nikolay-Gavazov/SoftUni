function solve() {
    const firstName = document.getElementById('fname');
    const lastName = document.getElementById('lname');
    const email = document.getElementById('email');
    const birthDate = document.getElementById('birth');
    const position = document.getElementById('position');
    const salary = document.getElementById('salary');
    const hireBtn = document.getElementById('add-worker');
    hireBtn.addEventListener('click', hire)

    const tbody = document.getElementById('tbody');
    const sumSalary = document.getElementById('sum');


    function hire(e) {
        e.preventDefault();
        if (!firstName.value || !lastName.value || !email.value || !birthDate.value || !position.value || !salary.value) {
            return
        }
        const fName = firstName.value;
        const lName = lastName.value;
        const emailInput = email.value;
        const birthDateInput = birthDate.value;
        const positionInput = position.value;
        const salaryInput = salary.value;
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td>${fName}</td>
        <td>${lName}</td>
        <td>${emailInput}</td>
        <td>${birthDateInput}</td>
        <td>${positionInput}</td>
        <td>${salaryInput}</td>
        <td><button class ='fired'>Fired</button> <button class ='edit'>Edit</button></td>
        `
        tr.querySelector('.fired').addEventListener('click', fired)
        tr.querySelector('.edit').addEventListener('click', edit)
        tbody.appendChild(tr);
        sumSalary.textContent = (Number(sumSalary.textContent) + Number(salaryInput)).toFixed(2);
        firstName.value = '';
        lastName.value = '';
        email.value = '';
        birthDate.value = '';
        position.value = '';
        salary.value = '';

        function fired() {
            sumSalary.textContent = (Number(sumSalary.textContent) - Number(salaryInput)).toFixed(2);

            tr.remove();
        }
        function edit() {
            sumSalary.textContent = (Number(sumSalary.textContent) - Number(salaryInput)).toFixed(2);
            firstName.value = fName;
            lastName.value = lName;
            email.value = emailInput;
            birthDate.value = birthDateInput;
            position.value = positionInput;
            salary.value = salaryInput;
            tr.remove();
        }
    }
}
solve()