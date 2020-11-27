// get DOM
const button = document.getElementById("addBtn");
const lists = document.getElementById("lists");

// function
function addList(user) {
  const list = document.createElement("li");
  list.innerText = user.name;
  //   console.log(list);
  lists.appendChild(list);
}

// async function
async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return users;
}

async function listUsers() {
  // データのやり取り
  const users = await getUsers();
  users.forEach((user) => addList(user));
}

// event
window.addEventListener("load", listUsers);
button.addEventListener("click", listUsers);
