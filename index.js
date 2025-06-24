let votos = JSON.parse(localStorage.getItem('votos')) || { sim: 0, nao: 0 };

atualizarTela();

function votar(opcao) {
    votos[opcao]++;
    localStorage.setItem('votos', JSON.stringify(votos));
    atualizarTela();
}

function atualizarTela() {
    document.getElementById('sim').innerText = votos.sim;
    document.getElementById('nao').innerText = votos.nao;
}

function exportarVotos() {
    const texto = `Votos Sim: ${votos.sim}\nVotos Não: ${votos.nao}`;
    const blob = new Blob([texto], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'resultado_votacao.txt';
    a.click();
    URL.revokeObjectURL(url);
}

function resetarVotos() {
    if (confirm("Tem certeza que deseja resetar todos os votos?")) {
        votos = { sim: 0, nao: 0 };
        localStorage.setItem('votos', JSON.stringify(votos));
        atualizarTela();
        alert("Os votos foram resetados!");
    }
}
