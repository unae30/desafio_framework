//POSTAGEMMM
//POSTAGEM------------------------------------
function getPostagem(url) {
    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    return request.responseText;
  }
  
  function criaLinha(postagem) {
    console.log(postagem);
    linha = document.createElement("tr");
    tdIdUsuario = document.createElement("td");
    tdId = document.createElement("td");
    tdTitulo = document.createElement("td");
    tdCorpo = document.createElement("td");
  
    tdIdUsuario.innerHTML = postagem.userId;
    tdId.innerHTML = postagem.id;
    tdTitulo.innerHTML = postagem.title;
    tdCorpo.innerHTML = postagem.body;
  
    linha.appendChild(tdIdUsuario);
    linha.appendChild(tdId);
    linha.appendChild(tdTitulo);
    linha.appendChild(tdCorpo);
  
    return linha;
  }
  
  function mainPostagem() {
    let data = getPostagem("https://jsonplaceholder.typicode.com/posts");
    let postagem = JSON.parse(data);
    let tabela = document.getElementById("tabela_posts");
    postagem.forEach((element) => {
      let linha = criaLinha(element);
      tabela.appendChild(linha);
    });
  }
  
  mainPostagem();