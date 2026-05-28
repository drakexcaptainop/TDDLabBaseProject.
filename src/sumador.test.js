import sumar from "./sumador.js";

describe("Calculadora de cadenas", () => {
  it("debería retornar 0 para una cadena vacía", () => {
    expect(sumar("")).toEqual(0);
  });

  it("debería retornar el número para una cadena con un solo número", () => {
    expect(sumar("2")).toEqual(2);
  });

  it("debería retornar la suma para una cadena con dos números separados por coma", () => {
    expect(sumar("1,2")).toEqual(3);
  });
  it("debería retornar la suma para una cadena con varios números separados por coma", () => {
    expect(sumar("1,2,3")).toEqual(6);
  });

  it("debería retornar la suma usando guion como separador", () => {
    expect(sumar("1-2,3")).toEqual(6);
  });
  it("debería retornar la suma usando guion como separador", () => {
    expect(sumar("1-2-3,5")).toEqual(11);
  });

  it("debería retornar la suma usando un delimitador personalizado especificado", () => {
    expect(sumar("//[;] 6;7;4")).toEqual(17);
  });

  it("debería retornar la suma usando un delimitador personalizado especificado", () => {
    expect(sumar("//[:] 6:7:4")).toEqual(17);
  });
});




