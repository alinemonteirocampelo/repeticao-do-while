let totalConta = 0;
let opcao;

do {
    opcao = prompt(
        "--- MENU CAFETERIA ---\n" +
        "1 - Café Expresso (R$ 5,00)\n" +
        "2 - Cappuccino (R$ 7,00)\n" +
        "3 - Pão de Queijo (R$ 4,00)\n" +
        "0 - Finalizar Pedido\n" +
        "Escolha uma opção:"
    );

    if (opcao === "1") {
        totalConta = totalConta + 5;
        alert("Café Expresso adicionado!");
    } 
    else if (opcao === "2") {
        totalConta = totalConta + 7;
        alert("Cappuccino adicionado!");
    } 
    else if (opcao === "3") {
        totalConta = totalConta + 4;
        alert("Pão de Queijo adicionado!");
    } 
    else if (opcao === "0") {
        alert("Encerrando pedido...");
    } 
    else {
        alert("Opção inválida!");
    }

} while (opcao !== "0");

alert("Pedido finalizado. O total da sua conta é R$ " + totalConta);