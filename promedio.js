// Lista vacía
let arrayLista = [];
let listaArray = document.getElementById("listaArray");
let resultPromedio = document.getElementById("resultPromedio")

// Calcular promedio
function calculaMediaArithmetic(lista) {
  const sumaLista = lista.reduce(
    (valorAcumulado = 0, nuevoElemento) => {
      return valorAcumulado + nuevoElemento;
    }
  )
  
  console.log(sumaLista);
  const promedio = sumaLista / lista.length;
  return promedio;
}

// Agrega elemento al array
function agregarEnArray(nuevoValor, lista) {
  return lista.push(nuevoValor);
}

// Obtener nuevo valor al array y mostrar en documento
function agregarValor() {
  let input = document.getElementById("input");
  let inputValue = parseInt(input.value);

  if (isNaN(inputValue)) {
    listaArray.innerHTML = "<b style='color:red'>Coloca numero y no otro valor</b>"
  }
  else {
    agregarEnArray(inputValue, arrayLista);
    console.log(arrayLista)
    for (lis of arrayLista) {
      listaArray.innerHTML = `<li>${arrayLista}</li>`;
    } 
  }
}

// Calcular promedio y mostrar en el documento
function calcularPromedio() {
  /* let input = document.getElementById("input");
  let inputValue = input.value; */

  let promedio = calculaMediaArithmetic(arrayLista);
  console.log(promedio);
  resultPromedio.innerHTML = `El promedio es de ${promedio}`;
}
