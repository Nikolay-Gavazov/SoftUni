async function lockedProfile() {
    const main = document.getElementById('main');
    

    try {
        const responce = await fetch('http://localhost:3030/jsonstore/advanced/profiles/');
        if(responce.ok == false) throw Error;
        const data = await responce.json();
        main.innerHTML = '';
        
        if(data._id){
            const div = document.createElement('div');
            div.className = 'profile';
            div.innerHTML = `
            <img src="./iconProfile2.png" class="userIcon" />
				<label>Lock</label>
				<input type="radio" name='user1Locked' value="lock" checked>
				<label>Unlock</label>
				<input type="radio" name='user1Locked' value="unlock"><br>
				<hr>
				<label>Username</label>
				<input type="text" name="user1Username" value="${data.username}" disabled readonly />
				<div id="user1HiddenFields">
					<hr>
					<label>Email:</label>
					<input type="email" name="user1Email" value="${data.email}" disabled readonly />
					<label>Age:</label>
					<input type="email" name="user1Age" value="${data.age}" disabled readonly />
				</div>
				
				<button>Show more</button>
            `
            
            main.appendChild(div);
            document.querySelector(`.user1Username`).style.display = 'none';

        }else{Object.entries(data).forEach((el, i )=> {
            const div = document.createElement('div');
            div.className = 'profile';
            div.innerHTML = `
            <img src="./iconProfile2.png" class="userIcon" />
				<label>Lock</label>
				<input type="radio" name='user${i + 1}Locked' value="lock" checked>
				<label>Unlock</label>
				<input type="radio" name='user${i + 1}Locked' value="unlock"><br>
				<hr>
				<label>Username</label>
				<input type="text" name="user${i+1}Username" value="${el[1].username}" disabled readonly />
				<div id ="user${i+1}HiddenFields">
					<hr>
					<label>Email:</label>
					<input type="email" name="user${i+1}Email" value="${el[1].email}" disabled readonly />
					<label>Age:</label>
					<input type="email" name="user${i+1}Age" value="${el[1].age}" disabled readonly />
				</div>
				
				<button>Show more</button>
            `
            
            main.appendChild(div);
            document.getElementById(`user${i+1}HiddenFields`).style.display = 'none';
        });}
        
    } catch (error) {
        console.log(error);
    }
    const buttons = Array.from(document.querySelectorAll('button'))

    buttons.forEach((button, i) => {

        button.addEventListener('click', func = () => {
            const lock = document.getElementsByName(`user${i+1}Locked`)[0].checked;
            const hiddenInfo = document.getElementById(`user${i+1}HiddenFields`)
            
            if (lock) {

            } else {
                if (button.textContent == 'Show more') {
                    button.textContent = 'Hide it'
                    hiddenInfo.style.display = 'block';
                } else {
                    button.textContent = 'Show more';
                    hiddenInfo.style.display = 'none';
                }
            }
        })

    });
    
}