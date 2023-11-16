const animes = ["./img/94745.webp", "./img/96303.webp", "./img/99013.webp"];

let i = 0;
while (i < animes.length) {
  document.write(`
    <img src="${animes[i]}" />
  `);
  i++;
}
