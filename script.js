// Aqui a Classe abstrata
class Veiculo {
  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
  }
}

// Aqui fazer a subclasse CARRO herdando de Veiculo
class Carro extends Veiculo {
  constructor(marca, modelo, portas) {
    super(marca, modelo);
    this.portas = portas;
  }

  descrever() {
    return `Este é um carro da marca ${this.marca}, modelo ${this.modelo}, com ${this.portas} portas.`;
  }
}

// Subclasse MOTO herdando de Veiculo
class Moto extends Veiculo {
  constructor(marca, modelo, cilindradas) {
    super(marca, modelo);
    this.cilindradas = cilindradas;
  }

  descrever() {
    return `Esta é uma moto da marca ${this.marca}, modelo ${this.modelo}, com ${this.cilindradas} cilindradas.`;
  }
}

// Criando instâncias das classes
const carro1 = new Carro("Toyota", "Corolla", 4);
const carro2 = new Carro("Honda", "Civic", 4);
const moto1 = new Moto("Yamaha", "MT-07", 689);


console.log(carro1.descrever()); // A RESPOSTA DEVE SER : "Este é um carro da marca Toyota, modelo Corolla, com 4 portas."
console.log(carro2.descrever()); // A RESPOSTA DEVE SER : "Este é um carro da marca Honda, modelo Civic, com 4 portas."
console.log(moto1.descrever());  // A RESPOSTA DEVE SER : "Esta é uma moto da marca Yamaha, modelo MT-07, com 689 cilindradas."
