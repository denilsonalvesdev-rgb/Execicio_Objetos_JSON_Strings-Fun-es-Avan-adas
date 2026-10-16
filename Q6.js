function gerarUsuario(nomeCompleto){
    const nome = nomeCompleto.trim().toLowerCase();
    const nomelista = nome.split(" ");
    const nomeformatado = nomelista.join(".")
    return nomeformatado;
};

console.log(gerarUsuario(" Maria Clara Souza "))
console.log(gerarUsuario("JOAO LIMA"))