// Código del cuadrado
console.group("Cuadrado")
const ladoCuadrado = 5;

console.log(`Los lados del cuadrado miden: ${ladoCuadrado}cm`);

const perimetryCuadrado = ladoCuadrado * 4;

console.log(`El perímetro del cuadrado es: ${perimetryCuadrado}cm`);

const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log(`El area del cuadrado es: ${areaCuadrado}cm²`);
console.groupEnd()

// Código del triangulo
console.group("Triangulo");
const ladoTriangulo01 = 6;
const ladoTriangulo02 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;


console.log(`Los lados del Triangulo miden: ${ladoTriangulo01}cm, ${ladoTriangulo02}cm, ${baseTriangulo}cm`);

console.log(`La altura del triangulo es de ${alturaTriangulo}`)

const perimetryTriangulo = ladoTriangulo01 + ladoTriangulo02 + baseTriangulo;

console.log(`El perímetro del triangulo es: ${perimetryTriangulo}cm`);

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

console.log(`El area del triangulo es: ${areaTriangulo}cm²`);
console.groupEnd()

// Código del circulo
console.group("Circulo")
const radioCirculo = 4;
const diameterCirculo = radioCirculo * 2;
const PI = Math.PI;

console.log(`El radio y diámetro del circulo es: ${radioCirculo}cm, ${diameterCirculo}cm`);

const perimetryCirculo = diameterCirculo * PI;

console.log(`El perímetro del circulo es: ${perimetryCirculo}cm`);

const areaCirculo =  (radioCirculo * radioCirculo) * PI;

console.log(`El area del circulo es: ${areaCirculo}cm²`);
console.groupEnd()