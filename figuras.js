// Código del cuadrado

let resultadoPerimetryCuadrado = document.getElementById(
  "resultadoPerimetryCuadrado"
);
let resultadoAreaCuadrado = document.getElementById("resultadoAreaCuadrado");
// Datos de entrada del cuadrado

function calculaPerimetryCuadrado() {
  let l = document.getElementById("lados");
  let ladoCuadrado = parseInt(l.value);
  let perimetryCuadrado = ladoCuadrado * 4;
  console.log(`Perímetro Cuadrado: ${perimetryCuadrado}`);
  resultadoPerimetryCuadrado.innerHTML = `El perímetro es: <b>${perimetryCuadrado}cm</b>.`;
}

function calculaAreaCuadrado() {
  let l = document.getElementById("lados");
  let ladoCuadrado = parseInt(l.value);
  let areaCuadrado = ladoCuadrado * ladoCuadrado;
  console.log(`Area Cuadrado: ${areaCuadrado}`);
  resultadoAreaCuadrado.innerHTML = `El area es: <b>${areaCuadrado}cm²</b>.`;
}

let buttonPerimetryCuadrado = document.getElementById(
  "buttonPerimetryCuadrado"
);
buttonPerimetryCuadrado.addEventListener("click", calculaPerimetryCuadrado);
let buttonAreaCuadrado = document.getElementById("buttonAreaCuadrado");
buttonAreaCuadrado.addEventListener("click", calculaAreaCuadrado);

// Código triangulo

let resultadoPerimetryTriangulo = document.getElementById("resultadoPerimetryTriangulo");
let resultadoAreaTriangulo = document.getElementById("resultadoAreaTriangulo");

// Datos de entrada del triangulo

function calculaPerimetryTriangulo() {
  let ld1 = document.getElementById("lado1");
  let lado1 = parseInt(ld1.value);
  let ld2 = document.getElementById("lado2");
  let lado2 = parseInt(ld2.value);
  let ba = document.getElementById("base");
  let base = parseInt(ba.value);
  let perimetryTriangulo = lado1 + lado2 + base;
  console.log(`Perímetro: ${perimetryTriangulo}`);
  resultadoPerimetryTriangulo.innerHTML = `El perímetro es: <b>${perimetryTriangulo}cm</b>.`;
}

function calculaAreaTriangulo() {
  let ld1 = document.getElementById("lado1");
  let lado1 = parseInt(ld1.value);
  let ld2 = document.getElementById("lado2");
  let lado2 = parseInt(ld2.value);
  let ba = document.getElementById("base");
  let base = parseInt(ba.value);
  let S = (lado1 + lado2 + base) / 2;
  let multiplication = S * (S - lado1) * (S - lado2) * (S - base);
  let areaTriangulo = Math.sqrt(multiplication);
  resultadoAreaTriangulo.innerHTML = `El Area es: <b>${areaTriangulo}cm²</b>.`;
}

let buttonPerimetryTriangulo = document.getElementById("buttonPerimetryTriangulo");
buttonPerimetryTriangulo.addEventListener("click", calculaPerimetryTriangulo);
let buttonAreaTriangulo = document.getElementById("buttonAreaTriangulo");
buttonAreaTriangulo.addEventListener("click", calculaAreaTriangulo);

// Código del circulo

let resultadoPerimetryCirculo = document.getElementById("resultadoPerimetryCirculo");
let resultadoAreaCirculo = document.getElementById("resultadoAreaCirculo");
const PI = Math.PI;

function calculaPerimetryCirculo(){
  let r = document.getElementById("radio");
  let radio = parseInt(r.value);
  let diameter = radio * 2;
  let perimetryCirculo = PI * diameter;
  console.log(`Perímetro es: ${perimetryCirculo}`);
  resultadoPerimetryCirculo.innerHTML = `El perímetro es: <b>${perimetryCirculo}cm</b>.`;
}

function calculaAreaCirculo(){
  let r = document.getElementById("radio");
  let radio = parseInt(r.value);
  let areaCirculo = (radio * radio) * PI;
  console.log(`Area es: ${areaCirculo}`);
  resultadoAreaCirculo.innerHTML = `El Area es: <b>${areaCirculo}cm²</b>.`;
}

let buttonPerimetryCirculo = document.getElementById("buttonPerimetryCirculo");
buttonPerimetryCirculo.addEventListener("click", calculaPerimetryCirculo);
let buttonAreaCirculo = document.getElementById("buttonAreaCirculo");
buttonAreaCirculo.addEventListener("click", calculaAreaCirculo);