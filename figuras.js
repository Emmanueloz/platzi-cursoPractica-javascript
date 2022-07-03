// Código del cuadrado
function calculoCuadrado() { 
    let l = document.getElementById("lados");
    let ladoCuadrado = parseInt(l.value);
    let perimetryCuadrado = ladoCuadrado * 4;
    let areaCuadrado = ladoCuadrado * ladoCuadrado;
    console.log(`El perímetro del cuadrado es: ${perimetryCuadrado}, y su area es: ${areaCuadrado}`);
    resultadoCuadrado.innerHTML = `El perímetro del cuadrado es: <b>${perimetryCuadrado}cm</b>. <br> El area del cuadrado es: <b>${areaCuadrado}cm²</b>.`;
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
    resultadoTriangulo.innerHTML = `El perímetro del triangulo es: <b>${perimetryTriangulo}cm</b>. 
    <br> El area del triangulo es: <b>${resultadoArea}cm²</b>.`;
}

function areaTriangulo(ladoA, ladoB, ladoC) {
    let S = (ladoA + ladoB + ladoC) / 2;
    let multiplication = S * (S -ladoA) * (S - ladoB) * (S - ladoC);
    let resultado = Math.sqrt(multiplication);
    return resultado;
}

let bottomTriangulo = document.getElementById("calculaTriangulo");
bottomTriangulo.addEventListener("click", calculaTriangulo);

let resultadoTriangulo = document.getElementById("resultadoTriangulo");

// Código del circulo
function calculaCirculo(){
    let r = document.getElementById("radio");
    let radio = parseInt(r.value);
    let diameter = radio * 2;
    let perimetryCirculo = PI * diameter;
    let areaCirculo = (radio * radio) * PI;
    console.log(`Radio: ${radio}, Diámetro: ${diameter}, Perímetro: ${perimetryCirculo}, Area: ${areaCirculo}`);
    resultadoCirculo.innerHTML = `El diámetro del circulo es <b>${diameter}cm</b>.
    <br>El perímetro del circulo es: <b>${perimetryCirculo}cm</b>. 
    <br> El area del circulo es: <b>${areaCirculo}cm²</b>.`;
}

const PI = Math.PI;

let bottomCirculo = document.getElementById("calculaCirculo");
bottomCirculo.addEventListener("click", calculaCirculo);

let resultadoCirculo = document.getElementById("resultadoCirculo");
