function abrirMenu() {
  //pegando elemento menu pelo id e alterando a largura dele
  document.getElementById("menu").style.width = "250px";
  document.getElementById("conteudo").style.marginLeft = "250px";
}

function fecharMenu() {
  document.getElementById("menu").style.width = "0";
  document.getElementById("conteudo").style.marginLeft = "0px";
}

//------------

function paginaPostagem() {
  window.location = "listaPostagem.html";
}

function paginaAlbuns() {
  window.location = "listaAlbuns.html";
}

function paginaToDos() {
  window.location = "listaToDos.html";
}

function paginaInicio() {
  window.location = "index.html";
}
