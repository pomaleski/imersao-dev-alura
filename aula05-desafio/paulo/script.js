const tabela = document.querySelector("#tabelaJogadores");

const nomes = ["Gabriel", "Paulo"];
const jogadores = nomes.map((nome) => {
  const jogador = {
    nome: nome,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0,
  };

  return jogador;
});

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

  jogadores.forEach((jogador, index) => {
    tabela.innerHTML += `
      <tr>
        <td>${jogador.nome}</td>
        <td>${jogador.vitorias}</td>
        <td>${jogador.empates}</td>
        <td>${jogador.derrotas}</td>
        <td>${jogador.pontos}</td>
        <td><button onClick="adicionarVitoria(jogadores[${index}])">Vitória</button></td>
        <td><button onClick="adicionarEmpate(jogadores[${index}])">Empate</button></td>
        <td><button onClick="adicionarDerrota(jogadores[${index}])">Derrota</button></td>
      </tr>
    `;
  });
}

render();
