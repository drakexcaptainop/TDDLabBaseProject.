import sumar from "./sumador.js";

describe("Calculadora de cadenas", () => {
  it("debería retornar 0 para una cadena vacía", () => {
    expect(sumar("")).toEqual(0);
  });
});




