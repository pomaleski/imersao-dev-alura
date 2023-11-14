function getRandomInt(max) { return Math.trunc(Math.random() * max); }

const numeroSecreto = getRandomInt(1001);
let chute = -1;

while (true) {
  chute = parseInt(prompt("Digite um número entre 0 e 100!"));
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