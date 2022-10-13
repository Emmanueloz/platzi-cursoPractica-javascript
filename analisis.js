// Helpers
const ArrayCountry = []

let salarioCountry = document.getElementById("salario")

function esPar(number) {
  return number % 2 === 0;
}

function calculaMediaArithmetic(lista) {
  const sumaLista = lista.reduce((valorAcumulado = 0, nuevoElemento) => {
    return valorAcumulado + nuevoElemento;
  });
  const promedio = sumaLista / lista.length;
  return promedio;
}

// Calculadora de mediana

function medianaSalarios(lista) {
  const mitad = parseInt(lista.length / 2);

  if (esPar(lista.length)) {
    const personMitad01 = lista[mitad - 1];
    const personMitad02 = lista[mitad];
    const mediana = calculaMediaArithmetic([personMitad01, personMitad02]);
    return mediana;
  } else {
    const personMitad = lista(mitad);
    return personMitad;
  }
}

function agregarSalario() {
  let salarioCountryValue = parseInt(salarioCountry.value)
  ArrayCountry.push(salarioCountryValue)
}

function CalarSalarios() {
  // Mediana General
  const salarios = ArrayCountry.map((person) => {
    return person;
  });

  const salariosSorted = salarios.sort((salaryA, SalaryB) => {
    return salaryA - SalaryB;
  });

  const medianaGeneral = medianaSalarios(salariosSorted);

  // Mediana del top 10%
  const spliceStart = (salariosSorted.length * 90) / 100;
  const spliceCount = salarios.length - spliceStart;

  const salariosTop10 = salariosSorted.splice(spliceStart, spliceCount); //Se le cola la posición en donde queremos que empiece a cortar, cuanto valores queremos que devuelva

  const medianaTop10 = medianaSalarios(salariosTop10);

  console.log(medianaGeneral, medianaTop10);
}
