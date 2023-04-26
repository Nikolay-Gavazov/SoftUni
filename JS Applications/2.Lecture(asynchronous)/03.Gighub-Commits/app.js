async function loadCommits() {

    const username = document.getElementById('username').value;
	const repos = document.getElementById('repo').value;
    const result = document.getElementById('commits');

	const url = `https://api.github.com/repos/${username}/${repos}/commits`;
   
	try{
		const response = await fetch(url);
		if(response.ok == false){
		throw `Error: ${response.status} (Not Found)`;
		
		}
		const data = await response.json();
		result.replaceChildren();
		for(let el of data){
            console.log(el);
			const li = document.createElement('li');
			li.innerHTML = `${el.commit.author.name}: ${el.commit.message}`;
			result.appendChild(li);
		}
	}catch(error){
		result.innerHTML = `<li>${error}</li>`;
}

}