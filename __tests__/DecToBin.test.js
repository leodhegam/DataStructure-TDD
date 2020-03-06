import DecToBin from "../src/DecToBin";
test("questao 5", () => {
  let stack = new DecToBin();
  expect(stack.toBin(22)).toBe("[10110]");
});
