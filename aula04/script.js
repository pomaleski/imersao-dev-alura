function adicionarFilme() {
  const filme = document.querySelector("#filme");
  const listaFilmes = document.querySelector("#listaFilmes");
  listaFilmes.innerHTML += `<img src="${filme.value}">`;
  filme.value = "";
}
