async function loadRepos() {
	const username = document.getElementById('username').value;
	const repos = document.getElementById('repos');
	const url = `https://api.github.com/users/${username}/repos`;

	try {
		const response = await fetch(url);
		if (response.ok == false) {
			throw `${response.status}: ${response.statusText}`;

		}
		const data = await response.json();
		repos.replaceChildren();
		for (let el of data) {
			const li = document.createElement('li');
			li.innerHTML = `<a href='${el.html_url}'>${el.full_name}</a>`;
			repos.appendChild(li);
		}
	} catch (error) {
		repos.innerHTML = `<p>${error}</p>`;
	}
}