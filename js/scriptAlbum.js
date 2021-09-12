//-------------------------------
//ALBUNS ------------------------

function getAlbum(url) {
  let request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send();
  return request.responseText;
}

function criaLinhaAlbum(album) {
  console.log(album);
  linha = document.createElement("tr");
  tdIdUsuario = document.createElement("td");
  tdId = document.createElement("td");
  tdTitulo = document.createElement("td");

  tdIdUsuario.innerHTML = album.userId;
  tdId.innerHTML = album.id;
  tdTitulo.innerHTML = album.title;

  linha.appendChild(tdIdUsuario);
  linha.appendChild(tdId);
  linha.appendChild(tdTitulo);

  return linha;
}

function mainAlbum() {
  let data = getAlbum("https://jsonplaceholder.typicode.com/albums");
  let album = JSON.parse(data);
  let tabela = document.getElementById("tabela_albuns");
  album.forEach((element) => {
    let linha = criaLinhaAlbum(element);
    tabela.appendChild(linha);
  });
}
mainAlbum();
