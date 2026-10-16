function criarMultiplicador(fator){
    return function funcao(n){
        return n * fator;
    }
}

const dobrar = criarMultiplicador(2);
const triplicar = criarMultiplicador(3);

console.log(dobrar(5), triplicar(5), dobrar(10));