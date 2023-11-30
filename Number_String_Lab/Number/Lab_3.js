function purchasePoint(purchaseAmount){
    const givePoint = 1;
    const points = Math.floor((purchaseAmount/100)*givePoint);

    return points;
}

let purchaseAmount = prompt("ราคาซื้อ : ");
alert("แต้มของคุณคือ : "+purchasePoint(purchaseAmount));