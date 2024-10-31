function calcularNivel(vitorias, derrotas) {
    // Variável para calcular o saldo de vitórias
    let saldoVitorias = vitorias - derrotas;
    let nivel = "";

    // Estruturas de decisão para definir o nível do jogador
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    }

    // Mensagem final com saldo e nível do jogador
    console.log(`O Herói tem de saldo de ${saldoVitorias} e está no nível de ${nivel}`);
    return { saldoVitorias, nivel }; // Retornando os valores para possível uso
}

let resultado = calcularNivel(82, 32); 