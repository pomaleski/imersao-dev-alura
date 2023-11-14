function getRandomInt(max) { return Math.trunc(Math.random() * max); }

const numeroSecreto = getRandomInt(1001);
let chute = -1;

let piorDosCasos = 1;
let numeroTentativas = 1;
let teste = 500;

while (teste !== 0) {
  teste = parseInt(teste / 2);
  piorDosCasos++;
}

alert(`O pior dos casos para esse jogo são: ${piorDosCasos} tentativas!`);

while (true) {
  chute = parseInt(prompt("Digite um número entre 0 e 1000!"));
  if (chute === numeroSecreto) break;
  
  let msg;
  if (chute > numeroSecreto) {
    msg = `Seu chute foi muito alto, o número é menor que ${chute}!`;
  } else {
    msg = `Seu chute foi muito baixo, o número é maior que ${chute}!`;
  }
  alert(msg);
}

alert("Parabéns, você acertou o número!");