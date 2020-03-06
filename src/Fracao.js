class Fracao {
  constructor(numerador, denominador) {
    this.numerador = numerador;
    this.denominador = denominador;
  }

  multiplicar(fracao) {
    let numerador = this.numerador * fracao.numerador;
    let denominador = this.denominador * fracao.denominador;
    let newFracao = new Fracao(numerador, denominador);
    return newFracao;
  }

  dividir(fracao) {
    let numerador = this.numerador * fracao.denominador;
    let denominador = this.denominador * fracao.numerador;
    let newFracao = new Fracao(numerador, denominador);
    return newFracao;
  }
}

export default Fracao;
