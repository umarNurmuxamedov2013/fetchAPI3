let btnCreator = document.getElementById("btnCreater");
btnCreator.addEventListener("click", refresh);

function refresh() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => createUser(users));
}

function createUser(users) {
  let randomIndex = Math.floor(Math.random() * users.length);
  let user = users[randomIndex];
  
  let name = document.getElementById("name");
  let lastN = document.getElementById("lastN");
  let email = document.getElementById("email");
  let company = document.getElementById("company");

  name.innerHTML = user.id;
  lastN.innerHTML = user.username;
  email.innerHTML = user.email;
  company.innerHTML = user.company.name;
}
