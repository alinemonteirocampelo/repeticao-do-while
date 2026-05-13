let nomeProduto;

do {
    nomeProduto = prompt("Digite o nome do produto (mínimo 3 letras):");
    
    if (nomeProduto.length < 3) {
        alert("Nome inválido. O produto deve ter no mínimo 3 caracteres");
    }

} while (nomeProduto.length < 3);

alert("Produto cadastrado: " + nomeProduto);