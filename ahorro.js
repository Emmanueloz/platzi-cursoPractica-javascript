const salarioMensual = document.getElementById("salarioMensual");
const resultadoAhorro = document.getElementById("resultadoAhorro");

function porcentaje(salarioInput, porcentaje) {
  let porcentajeDecimal = porcentaje / 100;
  let porcentajeResult = salarioInput * porcentajeDecimal;

  return porcentajeResult;
}

function calcularAhorro() {
  let salarioMensualValue = parseInt(salarioMensual.value);
  console.log(salarioMensualValue);

  const gastosFijos = porcentaje(salarioMensualValue, 50);
  const gastosDeOcio = porcentaje(salarioMensualValue, 30);
  const ahorro = porcentaje(salarioMensualValue, 20);

  console.log(gastosFijos, gastosDeOcio, ahorro);

  resultadoAhorro.innerHTML = 
    `<ul>
      <li>Tus gastos fijos en relación a tu salario es: <b>${gastosFijos}</b></li>
      <li>Tus gastos para el ocio en relación a tu salario es: <b>${gastosDeOcio}</b></li>
      <li>El ahorro que realizaras en relación a tu salario es: <b>${ahorro}</b></li>
    </ul>`
}
