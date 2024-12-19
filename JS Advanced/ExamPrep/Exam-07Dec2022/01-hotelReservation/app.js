window.addEventListener("load", solve);

function solve() {
  const firstName = document.getElementById("first-name");
  const lastName = document.getElementById("last-name");
  const dateIn = document.getElementById("date-in");
  const dateOut = document.getElementById("date-out");
  const numOfGuests = document.getElementById("people-count");
  const nextBtn = document.getElementById("next-btn");
  nextBtn.addEventListener("click", next);

  const infoSection = document.querySelector(".info-list");
  const confirmSection = document.querySelector(".confirm-list");
  const completeSection = document.getElementById("verification");

  function next(e) {
    e.preventDefault();
    const fName = firstName.value;
    const lName = lastName.value;
    const checkIn = dateIn.value;
    const checkOut = dateOut.value;
    const guests = numOfGuests.value;
    if (
      !fName ||
      !lName ||
      !checkIn ||
      !checkOut ||
      !guests ||
      checkIn > checkOut
    ) {
      return;
    }
    const li = document.createElement("li");
    li.className = "reservation-content";
    li.innerHTML = `
            <article>
            <h3>Name: ${fName} ${lName}</h3>
            <p>From date: ${checkIn}</p>
            <p>To date: ${checkOut}</p>
            <p>For ${guests} people</p>
            </article>
            <button class = 'edit-btn'>Edit</button>
            <button class = 'continue-btn'>Continue</button>
            `;
    li.querySelector(".edit-btn").addEventListener("click", edit);
    li.querySelector(".continue-btn").addEventListener("click", conti);
    infoSection.appendChild(li);
    nextBtn.disabled = true;
    firstName.value = "";
    lastName.value = "";
    dateIn.value = "";
    dateOut.value = "";
    numOfGuests.value = "";
    function edit() {
      nextBtn.disabled = false;
      firstName.value = fName;
      lastName.value = lName;
      dateIn.value = checkIn;
      dateOut.value = checkOut;
      numOfGuests.value = guests;
      li.remove();
    }

    function conti() {
      li.remove();
      li.innerHTML = `
            <article>
            <h3>Name: ${fName} ${lName}</h3>
            <p>From date: ${checkIn}</p>
            <p>To date: ${checkOut}</p>
            <p>For ${guests} people</p>
            </article>
            <button class = 'confirm-btn'>Confirm</button>
            <button class = 'cancel-btn'>Cancel</button>
            `;
      li.querySelector(".confirm-btn").addEventListener("click", confirm);
      li.querySelector(".cancel-btn").addEventListener("click", cancel);
      confirmSection.appendChild(li);
    }

    function confirm() {
      li.remove();
      nextBtn.disabled = false;
      completeSection.className = "reservation-confirmed";
      completeSection.textContent = "Confirmed.";
    }
    function cancel() {
      li.remove();
      nextBtn.disabled = false;
      completeSection.className = "reservation-cancelled";
      completeSection.textContent = "Cancelled.";
    }
  }
}
