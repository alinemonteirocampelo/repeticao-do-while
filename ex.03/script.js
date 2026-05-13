let numeroSecreto = 7; 
let palpite;
let tentativas = 0;

while (palpite != numeroSecreto) {
    palpite = prompt("Adivinhe o número secreto (entre 1 e 10):");
    tentativas++; // Adiciona 1 ao contador a cada tentativa

    if (palpite != numeroSecreto) {
        alert("Errado! Tente novamente.");
    }
}

alert("Parabéns! Você acertou em " + tentativas + " tentativas.");