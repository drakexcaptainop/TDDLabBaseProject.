function sumar(cadena) {
  if (cadena === '') return 0;

  let separadores = [',', '-'];
  let numerosStr = cadena;

  if (cadena.startsWith('//')) {
    const spaceIndex = cadena.indexOf(' ');
    const delimSpec = cadena.substring(2, spaceIndex);
    numerosStr = cadena.substring(spaceIndex + 1);

    const match = /\[([^\]]+)\]/.exec(delimSpec);
    if (match) separadores.push(match[1]);
  }

  const regex = new RegExp(separadores.map(d => d.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|'));
  return numerosStr.split(regex).reduce((acc, n) => {
    const num = parseFloat(n, 10);
    return num <= 1000 ? acc + num : acc;
  }, 0);
}

export default sumar;
