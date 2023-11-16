const animes = ["./img/94745.webp", "./img/96303.webp", "./img/99013.webp"];

for (let i = 0; i < animes.length; i++) {
  document.write(`
    <img src="${animes[i]}" />
  `);
}
