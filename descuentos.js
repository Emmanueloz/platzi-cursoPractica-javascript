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

function comparison(userCoupon, arrayCopones) {
  let validation = comparisonBucle(userCoupon, arrayCopones);

  if (userCoupon === validation) {
    console.log(`cupón valido ${userCoupon}`);
  } else {
    console.log(`cupón no valido ${userCoupon}`);
  }
}

comparison("coupon5", cupones);
