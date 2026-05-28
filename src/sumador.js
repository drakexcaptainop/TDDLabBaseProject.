function sumar(cadena) {
  if (cadena === '') return 0;
  return cadena.split(/,|-/).reduce((acc, n) => acc + parseInt(n, 10), 0);
}

export default sumar;
