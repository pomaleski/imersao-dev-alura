const checkURL = (url) => url.match(/^https?:\/\/.+\/.+$/);

const isValidImageURL = (url) => {
  if (!checkURL(url)) return false;
  return new Promise((resolve) => {
    const img = new Image();

    img.src = url;
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
  });
};

function adicionarFilme() {
  const filme = document.querySelector("#filme");
  const listaFilmes = document.querySelector("#listaFilmes");
  const url = filme.value;

  if (isValidImageURL(url)) {
    listaFilmes.innerHTML += `<img src="${url}">`;

    filme.value = "";
  }
}
