//const precioOriginal = 120;
//const descuento = 18;

function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  return precioConDescuento;
}

function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;

  const inputDiscount = document.getElementById("InputDiscount");
  const discountValue = inputDiscount.value;

  const precioConDescuento = calcularPrecioConDescuento(
    priceValue,
    discountValue
  );

  const resultP = document.getElementById("ResultP");
  resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
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
  return descuento
}

function comparison(userCoupon, arrayCopones) {
  let validation = comparisonBucle(userCoupon, arrayCopones);

  if (userCoupon === validation) {
    const descuento = aplicarDescuento(userCoupon)
    return descuento;
  } else {
    let message = "Cupón invalido"
    return message;
  }
}

function onClickButtonPriceDiscountCoupon(){
  const inputPrice = document.getElementById("InputPriceCoupon");
  const priceValue = inputPrice.value;

  const inputDiscount = document.getElementById("InputCoupon");
  const discountValue = inputDiscount.value;

  const resultP = document.getElementById("ResultPC");

  const discount = comparison(discountValue, cupones);
  let precioConDescuento;

  let numberDiscount = typeof(discount)
  if (numberDiscount === "number") {
    precioConDescuento = calcularPrecioConDescuento(priceValue, discount);
    //console.log(precioConDescuento);
    resultP.innerHTML = `El precio con descuento por tu cupón es: <b>$${precioConDescuento}</b>`;
  }
  else {
    //console.log(discount);
    resultP.innerHTML = `<b style="color:red" >Error: ${discount}</b>`
  }

}