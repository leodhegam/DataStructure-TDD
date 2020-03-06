import Pilha from "../src/ChangeBaseToTop";

let teste;

beforeEach(() => {
  teste = new Pilha(5);
});

test("questao 2", () => {
  teste.push(1);
  teste.push(2);
  teste.push(3);
  teste.push(4);
  teste.push(5);
  expect(teste.changeBaseToTop()).toBe("[52341]");
});
