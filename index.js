class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  }
  
  const mago = new Heroi('Harry', 22, 'mago');
  console.log(`${mago.nome}, ${mago.idade} anos, é um ${mago.tipo}.`);
  