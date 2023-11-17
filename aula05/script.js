const tabela = document.querySelector("#tabelaJogadores");

const jogador = {
  nome: "Gabriel",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0,
};

function adicionarVitoria(jogador) {
  jogador.vitorias++;
  jogador.pontos += 3;
  render();
}

function adicionarEmpate(jogador) {
  jogador.empates++;
  jogador.pontos++;
  render();
}
function adicionarDerrota(jogador) {
  jogador.derrotas++;
  render();
}

function render() {
  tabela.innerHTML = "";

  tabela.innerHTML = `
    <tr>
      <td>${jogador.nome}</td>
      <td>${jogador.vitorias}</td>
      <td>${jogador.empates}</td>
      <td>${jogador.derrotas}</td>
      <td>${jogador.pontos}</td>
      <td><button onClick="adicionarVitoria(jogador)">Vitória</button></td>
      <td><button onClick="adicionarEmpate(jogador)">Empate</button></td>
      <td><button onClick="adicionarDerrota(jogador)">Derrota</button></td>
    </tr>
  `;
}

render();
