const tabela = document.querySelector("#tabelaJogadores");

const jogador = {
  nome: "pomaleski",
  abates: 0,
  assistencias: 0,
  mortes: 0,
  ama: 0,
};

function adicionarAbate(jogador) {
  jogador.abates++;
  calcularAMA(jogador);
  render();
}

function adicionarAssistencia(jogador) {
  jogador.assistencias++;
  calcularAMA(jogador);
  render();
}
function adicionarMortes(jogador) {
  jogador.mortes++;
  calcularAMA(jogador);
  render();
}

function calcularAMA(jogador) {
  if (jogador.mortes <= 1) {
    jogador.ama = jogador.abates + jogador.assistencias;
  } else {
    jogador.ama = (
      (jogador.abates + jogador.assistencias) /
      jogador.mortes
    ).toFixed(2);
  }
  render();
}

function render() {
  tabela.innerHTML = "";

  tabela.innerHTML = `
    <tr>
      <td>${jogador.nome}</td>
      <td>${jogador.abates}</td>
      <td>${jogador.assistencias}</td>
      <td>${jogador.mortes}</td>
      <td>${jogador.ama}</td>
      <td><button onClick="adicionarAbate(jogador)">Abate</button></td>
      <td><button onClick="adicionarAssistencia(jogador)">Assistência</button></td>
      <td><button onClick="adicionarMortes(jogador)">Morte</button></td>
    </tr>
  `;
}

render();
