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

//console.log(`El perímetro del triangulo es: ${perimetryTriangulo}cm`);

function areaTriangulo(base, altura){
    return (base + altura) / 2;
}
// console.log(`El area del triangulo es: ${areaTriangulo}cm²`);
console.groupEnd()

// Código del circulo
console.group("Circulo")
/* const radioCirculo = 4;
const diameterCirculo = radioCirculo * 2;

console.log(`El radio y diámetro del circulo es: ${radioCirculo}cm, ${diameterCirculo}cm`); */
const PI = Math.PI;

function perimetryCirculo(radio){
    let diameter = radio * 2;
    return diameter * PI;
}

// console.log(`El perímetro del circulo es: ${perimetryCirculo}cm`);

function areaCirculo(radio){
    return (radio * radio) * PI
}

// console.log(`El area del circulo es: ${areaCirculo}cm²`);
console.groupEnd()