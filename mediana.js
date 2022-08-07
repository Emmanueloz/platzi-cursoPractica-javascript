let lista = []

function ordenarArray() {
  let listaOrdenada = lista.sort(function (a, b) {
    return a - b;
  })
  return listaOrdenada;
}


let mitadLista;

function calculaMediaArithmetic(lista) {
  const sumaLista = lista.reduce(
    (valorAcumulado = 0, nuevoElemento) => {
      return valorAcumulado + nuevoElemento;
    }
  )
  
  const promedio = sumaLista / lista.length;
  return promedio;
}

function mediaArray(Array){
  if (Array.length % 2 == 0) {
    console.log("Is par");

    mitadLista = parseInt(Array.length / 2);

    let valor1 = Array[mitadLista - 1];
    let valor2 = Array[mitadLista];
    let media = calculaMediaArithmetic([
      valor1,
      valor2
    ]);
    console.log(valor1, valor2);
    console.log(media);
    return media;
  }
  else {
    console.log("Not is par");
    mitadLista = parseInt(Array.length / 2);

    let media = mitadLista;
    console.log(media);
    console.log(Array[media]);
    return Array[media]
  }
}

function agregarEnArray(nuevoValor, lista) {
  return lista.push(nuevoValor);
}

function mostrarLista() {
  let listaArray = document.getElementById("listaArray")

  let ordenado = ordenarArray(lista)
  listaArray.innerHTML = `${ordenado} <br> `
}

function agregarValor() {
  let input = document.getElementById("input");
  let inputValue = parseInt(input.value);
  console.log(inputValue);
  let listaArray = document.getElementById("listaArray")
  if (isNaN(inputValue)) {
    console.log("Coloque números")
    listaArray.innerHTML = `<b style='color:red'>Coloque números</b>`
  }
  else {
    agregarEnArray(inputValue, lista);
    mostrarLista();
  }
}

function calcularMediana() {
  let ordenado = ordenarArray(lista)
  console.log(ordenado);
  let mediana = mediaArray(ordenado)
  let resultMediana = document.getElementById("resultMediana");
  resultMediana.innerHTML = `La mediana de la lista de números es de ${mediana}`
}

function resetarArray() {
  listaArray.innerHTML = "Se mostrara los valores a calcular acá";
  resultMediana.innerHTML = "La mediana se mostrara aquí"
  return lista = [];
}