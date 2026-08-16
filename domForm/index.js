const API = "https://jsonplaceholder.typicode.com/users";

const form = document.querySelector("#userForm");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const roleSelector = document.querySelector("#role");
const agreeBox = document.querySelector("#agree");
const userlist = document.querySelector("#userList");
const message = document.querySelector("#msg");

async function loadUsers() {
  const result = await fetch(API);
  const users = await result.json();
  users.forEach((user) => addUserRow(user));
}

function addUserRow(user) {
  const li = document.createElement("li");
  li.textContent = `${user.name} -- ${user.email}`;
  userlist.prepend(li);
}

function showMessage(text, className) {
  message.textContent = text;
  message.classList.add(className);
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const role = roleSelector.value;
  const agree = agreeBox.checked;

  if (name.length <= 2) {
    showMessage("your name is too short", "bad");
    return;
  }

  if (!email.includes("@")) {
    showMessage("you must have @", "bad");
    return;
  }

  if (!agree) {
    showMessage("you must agree", "bad");
    return;
  }


  const result = await fetch(API, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ name, email, role }),
  });

  if(result.ok) {
    const created = await result.json();
    addUserRow({
        name: created.name,
        email: created.email
    })
    form.reset()
    showMessage("created succesfully", "ok")
  } else {
    showMessage("your content isnt delivered" + result.status, "bad")
  }
});

document.addEventListener("DOMContentLoaded", loadUsers);
