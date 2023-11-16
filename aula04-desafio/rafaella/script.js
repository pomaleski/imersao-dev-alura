function adicionarFilme() {
  const filme = document.querySelector("#filme");
  const trailer = document.querySelector("#trailer");
  const listaFilmes = document.querySelector("#listaFilmes");

  listaFilmes.innerHTML += `
    <a href="${trailer.value}" target="_blank">
      <img src="${filme.value}">
    </a>  
  `;

  filme.value = "";
  trailer.value = "";
}
