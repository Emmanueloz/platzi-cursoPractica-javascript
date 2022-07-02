// Código del cuadrado
function calculoCuadrado() { 
    let l = document.getElementById("lados");
    let ladoCuadrado = parseInt(l.value);
    let perimetryCuadrado = ladoCuadrado * 4;
    let areaCuadrado = ladoCuadrado * ladoCuadrado;
    console.log(`El perímetro del cuadrado es: ${perimetryCuadrado}, y su area es: ${areaCuadrado}`);
    resultadoCuadrado.innerHTML = `El perímetro del cuadrado es: <b>${perimetryCuadrado}</b> <br> El area del cuadrado es: <b>${areaCuadrado}</b>`;
}

let bottomCuadrado = document.getElementById("calculaCuadrado");
bottomCuadrado.addEventListener("click", calculoCuadrado);

let resultadoCuadrado = document.getElementById("resultadoCuadrado");

// Código triangulo
function calculaTriangulo() {
    let ld1 = document.getElementById("lado1");
    let lado1 = parseInt(ld1.value);
    let ld2 = document.getElementById("lado2");
    let lado2 = parseInt(ld2.value);
    let ba = document.getElementById("base");
    let base = parseInt(ba.value);
    let perimetryTriangulo = lado1 + lado2 + base;
    let resultadoArea = areaTriangulo(lado1, lado2, base);
    console.log(`Perímetro: ${perimetryTriangulo }, area: ${resultadoArea}`);
    resultadoTriangulo.innerHTML = `El perímetro del triangulo es: <b>${perimetryTriangulo}</b> 
    <br> El area del triangulo es: <b>${resultadoArea}</b>`;
}

function areaTriangulo(ladoA, ladoB, ladoC) {
    let S = (ladoA + ladoB + ladoC) / 2;
    let multiplication = S * (S -ladoA) * (S - ladoB) * (S - ladoC);
    let resultado = Math.sqrt(multiplication);
    return resultado;
}

let bottomTriangulo = document.getElementById("calculaTriangulo");
bottomTriangulo.addEventListener("click", calculaTriangulo);

let resultadoTriangulo = document.getElementById("resultadoTriangulo")

/* console.group("Cuadrado")
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
console.groupEnd() */