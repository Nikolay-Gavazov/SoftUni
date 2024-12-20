function solve() {
  const nameInput = document.getElementById("recipientName");
  const titleInput = document.getElementById("title");
  const messageInput = document.getElementById("message");
  const submitBtn = document.getElementById("add");
  submitBtn.addEventListener("click", add);
  const resetBtn = document.getElementById("reset");
  resetBtn.addEventListener("click", reset);
  const mailList = document.getElementById("list");
  const sentMails = document.querySelector(".sent-list");
  const deletedMails = document.querySelector(".delete-list");

  function add(e) {
    e.preventDefault();
    const name = nameInput.value;
    const title = titleInput.value;
    const message = messageInput.value;
    if (
      nameInput.value == "" ||
      titleInput.value == "" ||
      messageInput.value == ""
    ) {
      return;
    }
    const list = document.createElement("li");
    list.innerHTML = `
        <h4>Title: ${title}</h4>
        <h4>Recipient Name: ${name}</h4>
        <span>${message}</span>
        <div id="list-action">
        <button type="submit" id="send">Send</button>
        <button type="submit" id="delete">Delete</button>
        </div>`;
    list.querySelector("#send").addEventListener("click", send);
    list.querySelector("#delete").addEventListener("click", _delete);
    mailList.appendChild(list);

    function send() {
      list.remove();
      const sentItem = document.createElement("li");
      sentItem.innerHTML = `
                        <span>To: ${name}</span>
                        <span>Title: ${title}</span>
                        <div class="btn">
                        <button type="submit" class="delete">Delete</button>
                        </div>`;
      sentItem.querySelector(".delete").addEventListener(
        "click",
        (del = () => {
          sentItem.remove(), _delete();
        })
      );
      sentMails.appendChild(sentItem);
    }
    function _delete() {
      list.remove();
      const deletedItem = document.createElement("li");
      deletedItem.innerHTML = `
            <span>To: ${name}</span>
            <span>Title: ${title}</span>`;
      deletedMails.appendChild(deletedItem);
    }

    clear();
  }
  function clear() {
    nameInput.value = "";
    titleInput.value = "";
    messageInput.value = "";
  }
  function reset(e) {
    e.preventDefault();
    clear();
  }
}
solve();
