// Código del cuadrado
console.group("Cuadrado")
/* const ladoCuadrado = 5;
console.log(`Los lados del cuadrado miden: ${ladoCuadrado}cm`); */

function perimetryCuadrado(lado){
    return lado * 4
}

// console.log(`El perímetro del cuadrado es: ${perimetryCuadrado}cm`);

function areaCuadrado(lado){
    return lado * lado;
}

// console.log(`El area del cuadrado es: ${areaCuadrado}cm²`);
console.groupEnd()

// Código del triangulo
console.group("Triangulo");
/* const ladoTriangulo01 = 6;
const ladoTriangulo02 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;


console.log(`Los lados del Triangulo miden: ${ladoTriangulo01}cm, ${ladoTriangulo02}cm, ${baseTriangulo}cm`);

console.log(`La altura del triangulo es de ${alturaTriangulo}`) */

function perimetryTriangulo(ladoA, ladoB, ladoC){
    return ladoA + ladoB + ladoC;
}

function alturaTriangulo(lado1, lado2, base){
  let area = areaTriangulo(lado1, lado2, base)
  return (2 * area) / base
}

//console.log(`El perímetro del triangulo es: ${perimetryTriangulo}cm`);

function areaTriangulo(lado1, lado2, base){
  let S = (lado1 + lado2 + base) / 2;
  let multiplication = S * (S - lado1) * (S - lado2) * (S - base);
  let areaTriangulo = Math.sqrt(multiplication);
  return areaTriangulo;
}
// console.log(`El area del triangulo es: ${areaTriangulo}cm²`);
console.groupEnd()

// Código del circulo
console.group("Circulo")
// Diámetro 
function diameterCirculo(radio){
    return radio * 2;
}

// PI
const PI = Math.PI;
console.log(`PI es: ${PI}`);

function perimetryCirculo(radio){
    const diameter = diameterCirculo(radio);
    return diameter * PI;
}

function areaCirculo(radio){
    return (radio * radio) * PI
}

// console.log(`El area del circulo es: ${areaCirculo}cm²`);
console.groupEnd()

// Aquí interactuamos con el HTML
// Cuadrado
function calcularPerimetryCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetry = perimetryCuadrado(value);
  alert(perimetry);
}
function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}

// Triangulo

function calcularPerimetryTriangulo(){
  const input01 = document.getElementById("InputTriangulo01");
  const value01 = input01.value;
  const lado1 = parseInt(value01);
  const input02 = document.getElementById("InputTriangulo02");
  const value02 = input02.value;
  const lado2 = parseInt(value02)
  const inputBase = document.getElementById("InputTriangulo03");
  const valuebase = inputBase.value;
  const base = parseInt(valuebase);
  
  const perimetry = perimetryTriangulo(lado1, lado2, base);
  alert(perimetry);
}

function calcularAlturaTriangulo(){
  const input01 = document.getElementById("InputTriangulo01");
  const value01 = input01.value;
  const lado1 = parseInt(value01);
  const input02 = document.getElementById("InputTriangulo02");
  const value02 = input02.value;
  const lado2 = parseInt(value02)
  const inputBase = document.getElementById("InputTriangulo03");
  const valuebase = inputBase.value;
  const base = parseInt(valuebase);
  
  const altura = alturaTriangulo(lado1, lado2, base);
  alert(altura);
}

function calcularAreaTriangulo(){
  const input01 = document.getElementById("InputTriangulo01");
  const value01 = input01.value;
  const lado1 = parseInt(value01);
  const input02 = document.getElementById("InputTriangulo02");
  const value02 = input02.value;
  const lado2 = parseInt(value02)
  const inputBase = document.getElementById("InputTriangulo03");
  const valuebase = inputBase.value;
  const base = parseInt(valuebase);
  
  const area = areaTriangulo(lado1, lado2, base);
  alert(area);
}