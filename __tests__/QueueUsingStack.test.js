import QueueToStack from "../src/QueueUsingStack";

let queue;

beforeEach(() => {
  queue = new QueueToStack(4);
});

test("Underflow", () => {
  expect(() => {
    queue.deQueue();
  }).toThrowError("Underflow");
});
test("Overflow", () => {
  queue.enQueue(1);
  queue.enQueue(2);
  queue.enQueue(3);
  queue.enQueue(4);
  queue.enQueue(5);
  expect(() => {
    queue.enQueue(6);
  }).toThrowError("Overflow");
});

test("Queue Using Stack", () => {
  queue.enQueue(4);
  queue.enQueue(2);
  queue.enQueue(4);
  expect(queue.deQueue()).toBe(4);
});
