window.addEventListener("load", solve);

function solve() {
  const firstName = document.getElementById('first-name');
  const lastName = document.getElementById('last-name');
  const age = document.getElementById('age');
  const storyTitle = document.getElementById('story-title');
  const genre = document.getElementById('genre');
  const story = document.getElementById('story');
  const publishBtn = document.getElementById('form-btn');
  publishBtn.addEventListener('click', publish);

  const preview = document.getElementById('preview-list');
  const main = document.getElementById('main');

  const inputDiv = document.querySelector('.form-wrapper');
  const previewDiv = document.getElementById('side-wrapper');


  function publish(e) {
    e.preventDefault();
    const fName = firstName.value;
    const lName = lastName.value;
    const ageInp = age.value;
    const storyTitleInp = storyTitle.value;
    const genreInp = genre.value;
    const storyInp = story.value;

    if (!fName || !lName || !ageInp || !storyTitleInp || !genreInp || !storyInp) {
      return
    }
    const li = document.createElement('li');
    li.innerHTML = `
    <article>
    <h4>Name: ${fName} ${lName}</h4>
    <p>Age: ${ageInp}</p>
    <p>Title: ${storyTitleInp}</p>
    <p>Genre: ${genreInp}</p>
    <p>${storyInp}</p>
    </article>
    <button class = 'save-btn'>Save Story</button>
    <button class = 'edit-btn'>Edit Story</button>
    <button class = 'delete-btn'>Delete Story</button>
    `
    li.querySelector('.save-btn').addEventListener('click', save)
    li.querySelector('.edit-btn').addEventListener('click', edit)
    li.querySelector('.delete-btn').addEventListener('click', deleting)

    preview.appendChild(li);
    firstName.value = '';
    lastName.value = '';
    age.value = '';
    storyTitle.value = '';
    genre.value = '';
    story.value = '';
    publishBtn.disabled = true;



    function save() {
      inputDiv.remove();
      previewDiv.remove();
      const h1 = document.createElement('h1');
      h1.textContent = 'Yout scary story is saved!';
      main.appendChild(h1);
    }

    function edit() {
      firstName.value = fName;
      lastName.value = lName;
      age.value = ageInp;
      storyTitle.value = storyTitleInp;
      genre.value = genreInp;
      story.value = storyInp;
      li.remove();
      publishBtn.disabled = false;
    }

    function deleting() {
      li.remove();
      publishBtn.disabled = false;
    }
  }
}
