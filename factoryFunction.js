function criarProduto(nome, preco) {
    return {
        nome: nome,
        preco: preco,
        desconto: 0.9 * preco
    }
}

console.log(criarProduto("CPU", 1555))
console.log(criarProduto("Mouse", 27))