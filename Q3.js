const carrinho = [
 {item:"Teclado",
 preco:150,quantidade:1},
 {item:"Mouse",
 preco:80,quantidade:2},
 {item:"Cabo USB",
 preco:25,quantidade:3}
]

const totalCompra = carrinho.reduce((valorFinal, c) => valorFinal + c.preco * c.quantidade, 0);

console.log("Total da compra: R$ " + totalCompra);