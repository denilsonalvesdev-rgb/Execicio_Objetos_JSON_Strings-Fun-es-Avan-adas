const recebido = '{"produto":"Monitor", "preco":900, "estoque":4}'

const produto = JSON.parse(recebido);

produto.preco = produto.preco * 0.90;
produto.estoque--;

console.log(typeof produto);

const produtoJSON = JSON.stringify(produto)
console.log(produtoJSON)

console.log(typeof produtoJSON);
