class Pilha {
  /**
   * Construtor padrão da classe Pilha.
   * @param {number} [size = 10] - Tamanho da Pilha. Caso não informado a Pilha terá tamanho 10.
   */
  constructor(size = 10) {
    this.maxSize = size;
    this.dados = [];
    this.topo = -1;
  }

  twoQueue() {
    // if (this.q1.isEmpty && this.q2.isEmpty) {
    //   throw new Error("Queue is full");
    // }
    if (this.q1.size === 1) {
      this.q1.pop();
    }
    while (!this.q1.isEmpty()) {
      q2.dequeue(this.q1.front());
      q1.pop();
    }

    // Push item into the first queue
    this.q1.enqueue();

    // Move all elements back to the first queue from the second queue
    while (!this.q1.isEmpty()) {
      this.q1.enqueue(this.q2.front());
      this.q2.dequeue();
    }
  }

  /**
   * Adiciona um elemento na Pilha.
   * @param {any} newData - Elemento a ser adicionado à Pilha.
   * @throws {Error} - Lança um erro de Overflow caso a pilha esteja cheia.
   */
  push(newData) {
    if (this.isFull()) {
      throw new Error("Overflow");
    } else {
      this.dados[++this.topo] = newData;
    }
  }

  /**
   * Remove um elemento da Pilha.
   * @returns {any} - Retorna o elemento removido da Pilha.
   * @throws {Error} - Lança um erro de Underflow caso a pilha esteja vazia.
   */
  pop() {
    if (this.isEmpty()) {
      throw new Error("Underflow");
    } else {
      return this.dados[this.topo--];
    }
  }

  /**
   * Retorna o elemento no topo da Pilha sem remover.
   * @returns {any} - Elemento do topo da Pilha.
   * @throws {Error} - Lança um erro de Underflow caso a pilha esteja vazia.
   */
  top() {
    if (this.isEmpty()) {
      throw new Error("Empty");
    } else {
      return this.dados[this.topo];
    }
  }

  /**
   * Remove todos os elementos da Pilha.
   */
  clear() {
    this.topo = -1;
  }

  /**
   * Retorna o tamanho da Pilha.
   * @returns {number} - Tamanho da Pilha.
   */
  size() {
    return this.topo + 1;
  }

  /**
   * Verifica que uma Pilha é vazia.
   * @returns {boolean} - Retorna [true] se a Pilha estiver vazia, [false] caso contrário.
   */
  isEmpty() {
    return this.size() === 0;
  }

  /**
   * Verifica que uma Pilha é cheia.
   * @returns {boolean} - Retorna [true] se a Pilha estiver cheia, [false] caso contrário.
   */
  isFull() {
    return this.size() === this.maxSize;
  }

  /**
   * Retorna uma string contendo todos os elementos da Pilha.
   * @returns {string} - Conteúdo da Pilha formatado.
   */
  toString() {
    let result = "[";
    for (let i = 0; i <= this.topo; i++) {
      result += `${this.dados[i]}`;
    }
    result += "]";
    return result;
  }
  toStringBin() {
    let result = "[";
    for (let i = this.topo; i >= 0; i--) {
      result += `${this.dados[i]}`;
    }
    result += "]";
    return result;
  }
}

export default Pilha;
