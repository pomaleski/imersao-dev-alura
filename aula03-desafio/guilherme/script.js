const animes = [
  {
    nome: "Fullmetal Alchemist: Brotherhood",
    image: "./img/94745.webp",
  },
  {
    nome: "Mob Psycho 100 II",
    image: "./img/96303.webp",
  },
  {
    nome: "Hunter x Hunter (2011)",
    image: "./img/99013.webp",
  },
];

//["./img/94745.webp", "./img/96303.webp", "./img/99013.webp"];

for (let i = 0; i < animes.length; i++) {
  document.querySelector("#animes").innerHTML += `
    <div class="poster">
      <img src="${animes[i].image}" />
      <span>${animes[i].nome}</span>
    </div>
  `;
}
