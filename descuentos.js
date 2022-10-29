const resultP = document.getElementById("ResultP");
const resultPC = document.getElementById("ResultPC");

function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  return precioConDescuento;
}

function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = parseInt(inputPrice.value);

  const inputDiscount = document.getElementById("InputDiscount");
  const discountValue = parseInt(inputDiscount.value);

  if (isNaN(priceValue) || isNaN(discountValue)) {
    resultP.innerHTML =
      "<b style='color: #d43131'>Error coloque Números en los campos que lo pide</b>";
  } else {
    const precioConDescuento = calcularPrecioConDescuento(
      priceValue,
      discountValue
    );

    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
  }
}

// Cupones

let cupones = [
  "coupon1",
  "coupon2",
  "coupon3",
  "coupon4",
  "coupon5",
  "coupon6",
];

/* function comparison(userCoupon, arrayCopones) {
  for(coupon of arrayCopones) {
    if(coupon === userCoupon) {
      console.log(`Si es valido ${coupon}`);
    }
  }
} */

function comparisonBucle(userCoupon, arrayCopones) {
  for (coupon of arrayCopones) {
    if (userCoupon === coupon) {
      return coupon;
    }
  }
}

function aplicarDescuento(userCoupon) {
  let descuento;
  switch (userCoupon) {
    case "coupon1":
      descuento = 50;
      break;
    case "coupon2":
      descuento = 10;
      break;
    case "coupon3":
      descuento = 60;
      break;
    case "coupon4":
      descuento = 80;
      break;
    case "coupon5":
      descuento = 20;
      break;
    case "coupon6":
      descuento = 10;
      break;
  }
  return descuento;
}

function comparison(userCoupon, arrayCopones) {
  let validation = comparisonBucle(userCoupon, arrayCopones);

  if (userCoupon === validation) {
    const descuento = aplicarDescuento(userCoupon);
    return descuento;
  } else {
    let message = "Cupón invalido";
    return message;
  }
}

function onClickButtonPriceDiscountCoupon() {
  const inputPrice = document.getElementById("InputPriceCoupon");
  const priceValue = parseInt(inputPrice.value);
  console.log(priceValue);

  const inputDiscount = document.getElementById("InputCoupon");
  const discountValue = inputDiscount.value;

  const discount = comparison(discountValue, cupones);
  console.log(discount);
  let precioConDescuento;

  let parseIntDiscount = typeof discount;
  if (parseIntDiscount === "number" && !isNaN(priceValue)) {
    precioConDescuento = calcularPrecioConDescuento(priceValue, discount);
    console.log(precioConDescuento);
    resultPC.innerHTML = `El precio con descuento por tu cupón es: <b>$${precioConDescuento}</b>`;
  } else if (isNaN(priceValue) && parseIntDiscount !== "number") {
    console.log("error");
    resultPC.innerHTML = `<b style="color:#d43131">Error: ${discount}, y coloque números en el campo correspondiente</b>`;
  } else if (isNaN(priceValue)) {
    console.log("error");
    resultPC.innerHTML = `<b style="color:#d43131">Error: Coloque un numero en el campo correspondiente</b>`;
  } else {
    console.log("error");
    resultPC.innerHTML = `<b style="color:#d43131" >Error: ${discount}</b>`;
  }
}
