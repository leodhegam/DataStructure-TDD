import Pilha from "../src/Stack";

class ChangeBaseToTop {
  constructor() {
    this.main = new Pilha(5);
    this.final = new Pilha(5);
    this.aux = new Pilha(5);
  }
  push(data) {
    this.main.push(data);
  }
  changeBaseToTop() {
    this.final.push(this.main.pop());

    if (this.main.size() !== 1) {
      for (let i = 0; i < this.main.size() + 1; i++) {
        this.aux.push(this.main.pop());
      }
    }
    if (this.aux.size() >= 1) {
      for (let i = 0; i < this.aux.size() + 2; i++) {
        this.final.push(this.aux.pop());
      }
    }
    this.final.push(this.main.pop());

    return this.final.toString();
  }
}
export default ChangeBaseToTop;
