const lista1 = [
  1,
  2,
  3,
  1,
  2,
  3,
  4,
  2,
  2,
  2,
  1,
];
// Objeto que muestre el valor y las veces que se repite
const lista1Count = {}

lista1.map(
  function (elemento) {
    if (lista1Count[elemento]) {
      lista1Count[elemento] += 1;
    }
    else {
      lista1Count[elemento] = 1;      
    }
  }
);

const lista1Array = Object.entries(lista1Count).sort(
  function (valorAcumulado, nuevoValor) {
    return valorAcumulado[1] - nuevoValor[1];
  }
);

const moda = lista1Array[lista1Array.length - 1];
