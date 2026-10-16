function soma(a,b){
    return a + b;
}

function multiplicacao(a,b){
    return a * b;
}

const subtracao = (a,b) => a - b;

function aplicarOperacao(a, b, operacao){
    return operacao(a,b);
}
const a = 8;
const b = 2;

console.log(aplicarOperacao(a,b,soma))
console.log(aplicarOperacao(a,b,multiplicacao))
console.log(aplicarOperacao(a,b,subtracao))