//TO-DOOOOOOOOOO----------------

function getToDo(url) {
  let request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send();
  return request.responseText;
}

function criaLinhaToDo(todo) {
  console.log(todo);
  linha = document.createElement("tr");
  tdIdUsuario = document.createElement("td");
  tdId = document.createElement("td");
  tdTitulo = document.createElement("td");
  tdCompleto = document.createElement("td");

  tdIdUsuario.innerHTML = todo.userId;
  tdId.innerHTML = todo.id;
  tdTitulo.innerHTML = todo.title;
  tdCompleto.innerHTML = todo.completed;

  linha.appendChild(tdIdUsuario);
  linha.appendChild(tdId);
  linha.appendChild(tdTitulo);
  linha.appendChild(tdCompleto);

  return linha;
}

function mainToDo() {
  let data = getToDo("https://jsonplaceholder.typicode.com/todos");
  let todo = JSON.parse(data);
  let tabela = document.getElementById("tabela_todo");
  todo.forEach((element) => {
    let linha = criaLinhaToDo(element);
    tabela.appendChild(linha);
  });
}

mainToDo();
