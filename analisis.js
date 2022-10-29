// Helpers
const ArrayCountry = [];

let country = document.getElementById("nameCountry");
let salarioCountry = document.getElementById("salario");
let countryList = document.getElementById("countryList");
let listSalary = document.getElementById("listSalary");
let result = document.getElementById("result");

//inputs
function agregarSalario() {
  let salarioCountryValue = Number(salarioCountry.value);
  if (!isNaN(salarioCountryValue)) {
    ArrayCountry.push(salarioCountryValue);
    mostrarSalario();
  } else {
    listSalary.innerHTML = `<b style="color: red;">El valor agregado es invalido, coloque solo números</b>`;
  }
}

function mostrarSalario() {
  printCountry();

  let salariosSorted = ArrayCountry.sort((salaryA, SalaryB) => {
    return salaryA - SalaryB;
  });

  let list = salariosSorted.map((item) => {
    return `<li>${item}</li>`;
  });
  //console.log(list)
  let listPrint = list.join("");
  listSalary.innerHTML = listPrint;
}

function printCountry() {
  let countryName = country.value;
  countryList.innerHTML = countryName;
}

//outputs

function esPar(parseInt) {
  return parseInt % 2 === 0;
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
    const personMitad = lista[mitad];
    return personMitad;
  }
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
  const spliceStart = parseInt((salariosSorted.length * 90) / 100);
  const spliceCount = parseInt(salarios.length - spliceStart);

  const salariosTop10 = salariosSorted.splice(spliceStart, spliceCount); //Se le cola la posición en donde queremos que empiece a cortar, cuanto valores queremos que devuelva

  const medianaTop10 = medianaSalarios(salariosTop10);

  console.log(medianaGeneral, medianaTop10);
  result.innerHTML = `La media general de ${country.value} es de ${medianaGeneral} y la mediana del <b>Top 10%</b> es ${medianaTop10}`;
}
