const animes = ["./img/94745", "./img/96303", "./img/99013"];

for (let i = 0; i < animes.length; i++) {
  document.write(`
    <img src="${animes[i]}.webp" />
  `);
}
