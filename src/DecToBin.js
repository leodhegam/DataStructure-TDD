import Stack from "../src/Stack";
class DecToBin {
  pilha1 = new Stack(8);

  toBin(data) {
    let i = data;
    while (i > 0) {
      this.pilha1.push(parseInt(data % 2));
      i = Math.floor((data /= 2));
    }

    return this.pilha1.toStringBin();
  }

  // Convertendo usando as funções do js
  decimalToBinary(decimal) {
    console.log(decimal);

    decimal
      .toString(2)
      .split("")
      .map(t => {
        this.push(parseInt(t));
        return t;
      });
  }
}
export default DecToBin;
