const senhaCorreta = "1234";

// Variável para armazenar a senha digitada
let senhaDigitada;

// Estrutura que garante pelo menos uma execução
do {
    senhaDigitada = prompt("Digite a senha:");

    if (senhaDigitada !== senhaCorreta) {
        alert("Senha incorreta. Tente novamente.");
    }

} while (senhaDigitada !== senhaCorreta);

alert("Acesso Permitido");