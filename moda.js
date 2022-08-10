let lista = [];
// Objeto que muestre el valor y las veces que se repite
let listaCount = {};

// Resultado mostrado en el documento
let listaDocumentArray = document.getElementById("listaArray");
let resultModa = document.getElementById("resultModa");

// Agrega elemento al array
function agregarEnArray(nuevoValor, lista) {
  return lista.push(nuevoValor);
}

function agregarValor() {
  // Inputs del formulario
  let input = document.getElementById("input");
  let inputValue = parseInt(input.value);
  if (isNaN(inputValue)) {
    listaDocumentArray.innerHTML =
      "<b style='color:red'>Coloca numero y no otro valor</b>";
  } else {
    agregarEnArray(inputValue, lista);
    listaDocumentArray.innerHTML = `Valor: <br> ${lista} <br>`;
  }
}

function resetarArray() {
  listaDocumentArray.innerHTML = "Se mostrara los valores a calcular acá";
  resultModa.innerHTML = "La mediana se mostrara aquí"
  return lista = [];
}

// Moda
function calcularModa() {
  lista.map(function (elemento) {
    if (listaCount[elemento]) {
      listaCount[elemento] += 1;
    } else {
      listaCount[elemento] = 1;
    }
  });
  
  let listaArray = Object.entries(listaCount).sort(function (
    valorAcumulado,
    nuevoValor
  ) {
    return valorAcumulado[1] - nuevoValor[1];
  });
  console.log(listaArray);
  
  let moda = listaArray[listaArray.length - 1];
  console.log(moda[0]);

  resultModa.innerHTML = `La moda de esta lista es el numero: <b>${moda[0]}</b>, ya que se repite ${moda[1]} veces. <br>`
}
