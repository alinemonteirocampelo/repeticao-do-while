let somaTotal = 0;
let resposta = 's';

while (resposta === 's') {
    let numero = prompt("Digite um número inteiro:");
    
    // Adiciona o número convertido à soma total
    somaTotal += Number(numero);
    
    
    resposta = prompt("Deseja inserir outro número? (s/n)");
}

alert("A soma total é: " + somaTotal);