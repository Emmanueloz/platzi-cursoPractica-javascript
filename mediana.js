function calculaMediaArithmetic(lista) {
  const sumaLista = lista.reduce(
    (valorAcumulado = 0, nuevoElemento) => {
      return valorAcumulado + nuevoElemento;
    }
  )

  const promedio = sumaLista / lista.length;

  return promedio;
}

const lista1 = [
  100,
  200,
  500,
  400000000,
];

const mitadLista1 = parseInt(lista1.length / 2);

function esPar(number) {
  if (number % 2 === 0) {
    return true
  }
  else {
    return false
  }
}

let mediana;

if (esPar(lista1.length)) {
  const elemento1 = lista1[mitadLista1 - 1];
  const elemento2 = lista1[mitadLista1]

  const promedioElemento1y2 = calculaMediaArithmetic([elemento1, elemento2]);
  mediana = promedioElemento1y2;
}
else {
  //mediana = lista1[parseInt(mitadLista1)];
  mediana = lista1[mitadLista1]
}

// mejoras en la rama Test