window.addEventListener("load", solution);
async function solution() {
  const section = document.getElementById("main");

  try {
    const responce = await fetch(
      `http://localhost:3030/jsonstore/advanced/articles/list`
    );
    if (responce.ok == false) throw Error;

    const data = await responce.json();
    data.forEach((el) => {
      const div = document.createElement("div");
      div.className = "accordion";
      div.innerHTML = `
            <div class="head">
            <span>${el.title}</span>
            <button class="button" id="${el._id}">More</button>
            </div>
            <div class="extra">
            <p></p>
            </div>
            `;

      section.appendChild(div);
      document.getElementById(`${el._id}`).addEventListener("click", more);
    });

    async function more(e) {
      const parrent = e.target.parentElement;
      const button = document.getElementById(`${e.target.id}`);
      const div = parrent.parentElement.children[1];
      let text = "";
      try {
        const responce = await fetch(
          `http://localhost:3030/jsonstore/advanced/articles/details/${e.target.id}`
        );

        if (responce.ok == false) throw Error;

        const data = await responce.json();
        text = data.content;
      } catch (error) {
        console.log(error);
      }
      if (button.textContent == "More") {
        div.children[0].textContent = text;
        button.textContent = "Less";
        div.style.display = "block";
      } else {
        button.textContent = "More";
        div.style.display = "none";
      }
    }
  } catch (error) {
    console.log(error);
  }
}
