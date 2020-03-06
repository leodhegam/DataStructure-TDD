import StackToQueue from "../src/StackUsingQueue";

let stack;

beforeEach(() => {
  stack = new StackToQueue(4);
});

test("Stack Using two queues", () => {
  stack.push(1);
  stack.push(2);
  stack.push(3);
  expect(stack.peek()).toBe(3);
  stack.push(4);
  expect(stack.peek()).toBe(4);
});
