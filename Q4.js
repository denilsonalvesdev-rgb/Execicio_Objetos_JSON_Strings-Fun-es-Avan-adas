const alunos = [
 {nome:"Ana",media:8.5},
 {nome:"Bruno",media:6},
 {nome:"Carla",media:9},
 {nome:"Davi",media:5.5}
]
const primeiroAluno = alunos.find( a => a.media < 7);
const existeAluno9mais = alunos.some(a => a.media >= 9);
const todosNota7mais = alunos.every(nota => nota >= 7)

console.log(primeiroAluno.nome, existeAluno9mais, todosNota7mais);