import Stack from "../src/Stack";

class QueueUsingStack {
  stack1 = new Stack(5);
  stack2 = new Stack(5);

  enQueue(data) {
    this.stack1.push(data);
  }

  deQueue() {
    if (this.stack1.isEmpty() && this.stack2.isEmpty()) {
      throw new Error("Underflow");
    }
    if (this.stack2.isEmpty()) {
      while (!this.stack1.isEmpty()) {
        this.stack2.push(this.stack1.top(), this.stack1.pop());
      }
    }

    return this.stack2.pop();
    // console.log(top);
  }
}
export default QueueUsingStack;
