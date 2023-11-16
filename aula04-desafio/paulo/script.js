const filmes = new Array();

function render() {
  const listaFilmes = document.querySelector("#listaFilmes");

  listaFilmes.innerHTML = "";
  filmes.forEach((filme) => {
    listaFilmes.innerHTML += `<img src="${filme}">`;
  });
}

function adicionarFilme() {
  console.log(filmes);
  const filme = document.querySelector("#filme");

  filmes.push(filme.value);
  render();

  filme.value = "";
}
