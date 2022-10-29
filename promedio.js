// Lista vacía
let arrayLista = [];
let listaArrayPromedio = document.getElementById("listaArrayPromedio");
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
function agregarValorPromedio() {
  let input = document.getElementById("inputPromedio");
  let inputValue = parseInt(input.value);

  if (isNaN(inputValue)) {
    listaArrayPromedio.innerHTML = "<b style='color:red'>Coloca numero y no otro valor</b>"
  }
  else {
    agregarEnArray(inputValue, arrayLista);
    console.log(arrayLista)
    for (lis of arrayLista) {
      listaArrayPromedio.innerHTML = `Valor: <br> ${arrayLista}`;
    } 
  }
}

// Calcular promedio y mostrar en el documento
function calcularPromedio() {
  /* let input = document.getElementById("input");
  let inputValue = input.value; */
  if (arrayLista.length == 0) {
    listaArrayPromedio.innerHTML = "Agrega un valor"
  }
  else {
    let promedio = calculaMediaArithmetic(arrayLista);
    console.log(promedio);
    resultPromedio.innerHTML = `El promedio es de ${promedio}`;  
  }
}

function resetarArrayPromedio() {
  listaArrayPromedio.innerHTML = "Se mostrara los valores a calcular acá";
  resultPromedio.innerHTML = "El promedio se mostrara aquí"
  return arrayLista = [];
}
