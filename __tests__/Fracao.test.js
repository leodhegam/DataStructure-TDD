import Fracao from "../src/Fracao";

let f, frac;

beforeEach(() => {
  f = new Fracao(16, 8);
  frac = new Fracao(20, 16);
});

test("Multiplicando", () => {
  let test = f.multiplicar(frac);
  expect(test.numerador).toBe(320);
  expect(test.denominador).toBe(128);
});
test("Dividindo", () => {
  let test = f.dividir(frac);
  expect(test.numerador).toBe(256);
  expect(test.denominador).toBe(160);
});
