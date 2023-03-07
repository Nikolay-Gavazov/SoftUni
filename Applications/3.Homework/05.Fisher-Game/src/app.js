const userData = JSON.parse(localStorage.getItem('userData'));
document.getElementById('logout').addEventListener('click', logout);
const addForm = document.getElementById('addForm');
document.querySelector('.load').addEventListener('click', load);
const addBtn = document.querySelector('.add');
addBtn.addEventListener('click', addNewCatch);
const catchesSection = document.getElementById('catches');

if(userData){
    document.querySelector('.email > span').textContent = userData.email;
    document.querySelector('#guest').style.display = 'none';
    addBtn.disabled = false;
}else{
    document.getElementById('guest').style.display = 'inline';
    document.getElementById('user').style.display = 'none';
    addBtn.disabled = true;
}
async function load(e){

    try {
        const res = await fetch('http://localhost:3030/data/catches');
    if(!res.ok){
        const error = await res.json();
        throw Error(error.message);
    }
    const data = await res.json();
    catchesSection.replaceChildren();
    data.forEach(el => {
        const div = document.createElement('div');
        div.className = 'catch';
        div.innerHTML = `
                        <label>Angler</label>
                        <input type="text" class="angler" value="${el.angler}">
                        <label>Weight</label>
                        <input type="text" class="weight" value="${el.weight}">
                        <label>Species</label>
                        <input type="text" class="species" value="${el.species}">
                        <label>Location</label>
                        <input type="text" class="location" value="${el.location}">
                        <label>Bait</label>
                        <input type="text" class="bait" value="${el.bait}">
                        <label>Capture Time</label>
                        <input type="number" class="captureTime" value="${Number(el.captureTime)}">
                        <button class="update" data-id="${el._id}">Update</button>
                        <button class="delete" data-id="${el._id}">Delete</button>
        `;
        div.querySelector('.update').addEventListener('click', updateCatch);
        div.querySelector('.delete').addEventListener('click', deleteCatch);
        if(!userData || el._ownerId != userData.id){
            div.querySelector('.update').disabled = true;
            div.querySelector('.delete').disabled = true;
        }
        catchesSection.appendChild(div);
        
        
    });
    
    } catch (error) {
        alert(error.message);
    } 
}

async function addNewCatch(e){
    e.preventDefault()
    if(!userData){
        window.location = ('./index.html');
        return;
    }
    const formData = new FormData(addForm);
    
    const angler = formData.get('angler');
    const weight = formData.get('weight');
    const species = formData.get('species');
    const location = formData.get('location');
    const bait = formData.get('bait');
    let captureTime = formData.get('captureTime');
    captureTime = Number(captureTime);
    console.log(angler, weight, species, location, bait, captureTime);
    try {
        if(!angler || !weight || !species || !location || !bait || !captureTime) throw Error('All fields are requared!')
        if(typeof(captureTime) != 'number') throw Error('captureTime must be a Number!');
        const res = await fetch('http://localhost:3030/data/catches', {
        method: 'POST',
        headers: {'Content-Type': 'application/json',
        'X-Authorization': userData.token    
    },
        body: JSON.stringify({
            _ownerId: userData.id,
            angler,
            weight,
            species,
            location ,
            bait,
            captureTime,
        })
    });
        if(!res.ok){
            const error = res.json();
            throw Error(error.message)
            
        }
    } catch (error) {
        alert(error.message)
    }
    addForm.reset()
    load()
}

async function updateCatch(e){
    const [angler, weight, species, location, bait, captureTime] = e.target.parentElement.querySelectorAll('input');
    try {
        const res = await fetch(`http://localhost:3030/data/catches/${e.target.dataset.id}`,{
        method: 'put',
        headers:{  'Content-Type': 'application/json',
            'X-Authorization': userData.token
        },
        body: JSON.stringify({
            _ownerId: userData.id,
            angler: angler.value,
            weight: weight.value,
            species: species.value,
            location: location.value,
            bait: bait.value,
            captureTime: Number(captureTime.value), 
        })
    })
    if(!res.ok)throw Error 
    } catch (error) {
        alert(error.message)
    }
    load()
}

async function deleteCatch(e){
    const res = await fetch(`http://localhost:3030/data/catches/${e.target.dataset.id}`,{
        method: 'delete',
        headers:{
            'X-Authorization': userData.token
        }
    })
    load()
}

async function logout(e){
    const res = await fetch('http://localhost:3030/users/logout',{
        headers:{
            'X-Authorization': userData.token
        }
    });
    localStorage.clear();
    document.querySelector('#guest').style.display = 'inline';
    document.getElementById('user').style.display = 'none';
    addBtn.disabled = true;
    window.location = ('./index.html');
}

