const salariosCol = Colombia.map(
  (person) => {
    return person.salary;
  }
);

const salariosColSorted = salariosCol.sort(
  (salaryA, SalaryB) => {
    return salaryA - SalaryB;
  }
);

function esPar(number) {
  return (number % 2 === 0);
}

function calculaMediaArithmetic(lista) {
  const sumaLista = lista.reduce(
    (valorAcumulado = 0, nuevoElemento) => {
      return valorAcumulado + nuevoElemento;
    }
  )

  const promedio = sumaLista / lista.length;

  return promedio;
}

function medianaSalarios(lista) {
  const mitad = parseInt(lista.length / 2);

  if (esPar(lista.length)) {
    const personMitad01 = lista[mitad - 1];
    const personMitad02 = lista[mitad];

    const mediana = calculaMediaArithmetic([personMitad01, personMitad02]);

    return mediana;
  } else {
    const personMitad = lista(mitad);
    return personMitad
  }
}

console.log(medianaSalarios(salariosColSorted));