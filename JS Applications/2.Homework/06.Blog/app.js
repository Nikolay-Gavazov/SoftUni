function attachEvents() {
  document.getElementById("btnLoadPosts").addEventListener("click", load);
  document.getElementById("btnViewPost").addEventListener("click", view);
  const options = document.getElementById("posts");
  const h1 = document.getElementById("post-title");
  const p = document.getElementById("post-body");
  const ul = document.getElementById("post-comments");

  const details = {};
  const title = {};

  async function load() {
    try {
      const responce = await fetch(
        " http://localhost:3030/jsonstore/blog/posts"
      );
      if (responce.ok == false) throw Error;

      const data = await responce.json();
      options.innerHTML = "";
      for (const el in data) {
        details[el] = data[el].body;
        title[el] = data[el].title;
        const option = document.createElement("option");
        option.value = el;
        option.textContent = data[el].title;
        options.appendChild(option);
      }
    } catch (error) {
      alert(error.massege);
    }
  }

  async function view() {
    try {
      const responce = await fetch(
        `http://localhost:3030/jsonstore/blog/comments/`
      );
      if (responce.ok == false) throw Error;

      const data = await responce.json();
      h1.textContent = title[options.value];
      p.innerHTML = `${details[options.value]}`;
      ul.innerHTML = "";
      for (const el in data) {
        if (data[el].postId == options.value) {
          const li = document.createElement("li");
          li.textContent = data[el].text;
          ul.appendChild(li);
        }
      }
    } catch (error) {
      alert(error.massege);
    }
  }
}

attachEvents();
