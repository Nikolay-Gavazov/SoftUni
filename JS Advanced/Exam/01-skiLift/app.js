window.addEventListener("load", solve);

function solve() {
  const firstName = document.getElementById("first-name");
  const lastName = document.getElementById("last-name");
  const people = document.getElementById("people-count");
  const date = document.getElementById("from-date");
  const days = document.getElementById("days-count");
  const nextBtn = document.getElementById("next-btn");
  nextBtn.addEventListener("click", next);

  const ticketPreview = document.querySelector(".ticket-info-list");
  const ticketConfirm = document.querySelector(".confirm-ticket");
  const div = document.getElementById("main");
  const body = document.getElementById("body");

  function next(e) {
    e.preventDefault();
    const fName = firstName.value;
    const lName = lastName.value;
    const numOfPeople = people.value;
    const fromDate = date.value;
    const daysValue = days.value;

    if (!fName || !lName || !numOfPeople || !fromDate || !daysValue) {
      return;
    }

    const li = document.createElement("li");
    li.className = "ticket";
    li.innerHTML = `
        <article>
        <h3>Name: ${fName} ${lName}</h3>
        <p>From date: ${fromDate}</p>
        <p>For ${daysValue} days</p>
        <p>For ${numOfPeople} people</p>
        </article>
        <button class = 'edit-btn'>Edit</button>
        <button class = 'continue-btn'>Continue</button>
        `;
    li.querySelector(".edit-btn").addEventListener("click", edit);
    li.querySelector(".continue-btn").addEventListener("click", conti);

    ticketPreview.appendChild(li);

    firstName.value = "";
    lastName.value = "";
    people.value = "";
    date.value = "";
    days.value = "";
    nextBtn.disabled = true;

    function edit() {
      nextBtn.disabled = false;
      firstName.value = fName;
      lastName.value = lName;
      people.value = numOfPeople;
      date.value = fromDate;
      days.value = daysValue;
      li.remove();
    }
    function conti() {
      li.remove();
      li.innerHTML = `
            <article>
            <h3>Name: ${fName} ${lName}</h3>
            <p>From date: ${fromDate}</p>
            <p>For ${daysValue} days</p>
            <p>For ${numOfPeople} people</p>
            </article>
            <button class = 'confirm-btn'>Confirm</button>
            <button class = 'cancel-btn'>Cancel</button>
            `;
      li.className = "ticket-content";
      li.querySelector(".confirm-btn").addEventListener("click", confirm);
      li.querySelector(".cancel-btn").addEventListener("click", cancel);
      ticketConfirm.appendChild(li);
    }

    function confirm() {
      div.remove();
      const h1 = document.createElement("h1");
      h1.id = "thank-you";
      h1.textContent = "Thank you, have a nice day!";
      const btn = document.createElement("button");
      btn.id = "back-btn";
      btn.textContent = "Back";
      btn.addEventListener("click", () => {
        window.location.reload();
      });
      body.appendChild(h1);
      body.appendChild(btn);
    }

    function cancel() {
      li.remove();
      nextBtn.disabled = false;
    }
  }
}
