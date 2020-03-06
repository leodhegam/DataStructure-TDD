import Fila from "./Fila";
class PilhaComFila {
  fila1 = new Fila();
  fila2 = new Fila();
  constructor(size = 10) {
    this.fim = -1;
    this.maxSize = size;
  }
  pop() {
    if (this.fila1.isEmpty()) {
      throw new Error("Underflow");
    }
    this.fila1.dequeue();
    this.fim--;
  }

  peek() {
    if (this.fila1.isEmpty()) {
      throw new Error("Stack is empty");
    } else {
      return this.fila1.front();
    }
  }
  push(data) {
    if (this.fila1.isFull()) {
      throw new Error("Overflow");
    } else {
      this.fila2.enqueue(data);
      while (!this.fila1.isEmpty()) {
        this.fila2.enqueue(this.fila1.front(), this.fila1.dequeue());
      }
      let aux = this.fila1;
      this.fila1 = this.fila2;
      this.fila2 = aux;
      // console.log(this.fila1, this.fila2, aux);
    }
  }
}
export default PilhaComFila;
