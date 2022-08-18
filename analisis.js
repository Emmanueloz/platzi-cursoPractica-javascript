// Helpers
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

// Calculadora de mediana

function medianaSalarios(lista) {
  const mitad = parseInt(lista.length / 2);

  if (esPar(lista.length)) {
    const personMitad01 = lista[mitad - 1];
    const personMitad02 = lista[mitad];
    const mediana = calculaMediaArithmetic([personMitad01, personMitad02])
    return mediana;
  } else {
    const personMitad = lista(mitad);
    return personMitad
  }
}

// Mediana General
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

const medianaGeneralCol = medianaSalarios(salariosColSorted)

// Mediana del top 10%
const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosCol.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(
  spliceStart,
  spliceCount
);//Se le cola la posición en donde queremos que empiece a cortar, cuanto valores queremos que devuelva

const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log(medianaGeneralCol, medianaTop10Col);