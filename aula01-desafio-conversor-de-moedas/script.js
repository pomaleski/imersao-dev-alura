const escolha = window.prompt(`
  Escolha o desafio:
  1. Guilherme
  2. Rafaella
  3. Paulo
`);

function guilherme() {
  const real = window.prompt(
    "Qual o valor, em reais, que será convertido para bitcoins?"
  );
  const cotacao = 0.0000056;
  const bitcoin = real * cotacao;

  return `R$${real} são ${bitcoin}BTC`;
}

function rafaella() {
  const nome = window.prompt("Qual é o seu nome?");
  const dolar = window.prompt("Qual o valor, em dolar, que será convertido para reais?");
  
  const cotacao = 4.91;
  const real = dolar * cotacao;

  return `Olá ${nome}, $${dolar} são R$${real.toFixed(2)}`;
}

function updateVisual() {
  const body = document.querySelector("body");
  body.style.backgroundImage = "url(/img/3d-hyperspace-background-with-warp-tunnel-effect.jpg)";
  body.style.backgroundPositionY = "-250px";

  const image = document.querySelector("#main-image");
  image.src = "/img/2838939_417701-PDQC57-237.svg";
  image.style.heigth = "10%";
  image.style.filter = "grayscale(90%)";

  const mainRefferLink = document.createElement("span");
  mainRefferLink.innerHTML = `
    Imagem de
    <a
      href="https://br.freepik.com/vetores-gratis/fundo-de-foguete-em-estilo-simples_2838939.htm#query=foguete&position=7&from_view=keyword&track=sph"
    >
      Freepik
    </a>
  `
  mainRefferLink.style.color = "#fff";
  image.parentNode.style.display = "flex";
  image.parentNode.style.flexDirection = "column";
  image.parentNode.appendChild(mainRefferLink);

  const backgroundRefferLink = document.createElement("span");
  backgroundRefferLink.innerHTML = `
    <a
      href="https://www.freepik.com/free-photo/3d-hyperspace-background-with-warp-tunnel-effect_8879794.htm#query=interstellar%20background&position=32&from_view=keyword&track=ais"
    >
      Image by kjpargeter
    </a>
    on Freepik
  `;
  backgroundRefferLink.style.color = "#fff";
  backgroundRefferLink.style.position = "absolute";
  backgroundRefferLink.style.right = "10px";
  backgroundRefferLink.style.bottom = "10px";
  body.appendChild(backgroundRefferLink);
}

function paulo() {
  const anosLuz = window.prompt("Quantos anos luz serão convertidos para metros?");
  
  const conversao = 9.461e+15;
  const metros = anosLuz * conversao;

  return `${anosLuz} ano-luz são ${metros.toExponential()} metros`;
}
    
let resultado;

updateVisual();
switch (parseInt(escolha)) {
  case 1:
    resultado = guilherme();
    break;
  case 2:
    resultado = rafaella();
    break;
  case 3:
    resultado = paulo();
    break;
  default:
    resultado = "Escolha inválida";
    break;
}

window.alert(resultado);
