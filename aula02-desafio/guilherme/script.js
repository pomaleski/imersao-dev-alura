function getRandomInt(max) { return 1 + Math.trunc(Math.random() * max); }

const numeroSecreto = getRandomInt(1000);
let chute = -1;

while (true) {
  chute = parseInt(prompt("Digite um número entre 0 e 1000!"));
  if (chute === numeroSecreto) break;
  
  let msg;
  if (chute > numeroSecreto) {
    msg = `Seu chute foi muito alto, o número é menor do que ${chute}!`;
  } else {
    msg = `Seu chute foi muito baixo, o número é maior do que ${chute}!`;
  }
  alert(msg);
}

alert("Parabéns, você acertou o número!");