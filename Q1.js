const disciplina = {
    nome: "Web",
    cargaHorario: 60,
    professor: "john",
}

disciplina.cargaHorario = 80;

disciplina.periodo = 2;

delete disciplina.professor;

console.log(disciplina, disciplina.nome);
