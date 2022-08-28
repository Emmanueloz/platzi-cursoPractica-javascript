let listaMediana = []

function ordenarArray() {
  let listaOrdenada = listaMediana.sort(function (a, b) {
    return a - b;
  })
  return listaOrdenada;
}


let mitadLista;
let listaArrayMediana = document.getElementById("listaArrayMediana")

function calculaMediaArithmetic(lista) {
  const sumaLista = lista.reduce(
    (valorAcumulado = 0, nuevoElemento) => {
      return valorAcumulado + nuevoElemento;
    }
  )
  
  const promedio = sumaLista / lista.length;
  return promedio;
}

function medianaArray(Array){
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
  let ordenado = ordenarArray(listaMediana)
  listaArrayMediana.innerHTML = `${ordenado} <br> `
}

function agregarValorMediana() {
  let input = document.getElementById("inputMediana");
  let inputValue = parseInt(input.value);
  console.log(inputValue);
  if (isNaN(inputValue)) {
    console.log("Coloque números")
    listaArrayMediana.innerHTML = `<b style='color:red'>Coloque números</b>`
  }
  else {
    agregarEnArray(inputValue, listaMediana);
    mostrarLista();
  }
}

function calcularMediana() {
  let ordenado = ordenarArray(listaMediana)
  console.log(ordenado);
  let mediana = medianaArray(ordenado)
  let resultMediana = document.getElementById("resultMediana");
  resultMediana.innerHTML = `La mediana de la lista de números es de ${mediana}`
}

function resetarArrayMediana() {
  listaArrayMediana.innerHTML = "Se mostrara los valores a calcular acá";
  resultMediana.innerHTML = "La mediana se mostrara aquí"
  return lista = [];
}