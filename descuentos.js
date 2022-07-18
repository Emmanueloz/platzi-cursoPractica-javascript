function calculaDescuento(P, D) {
  let descuento = [P * (100 - D) / 100];
  return descuento;
}

function calcular() {
  let P = parseInt(pSd.value);
  let D = parseInt(desAp.value);
  let descuento = calculaDescuento(P, D)
  result.innerHTML = `El precio con descuento es de <b>$${descuento}</b>`
}

let pSd = document.getElementById("precioSinDescuento"); 
let desAp = document.getElementById("descuentoAplicar");

let result = document.getElementById("resultadoDescuento")