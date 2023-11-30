function extractCurrencyValue(string, rate) {
    let amountInDollars = parseFloat(string.replace('$', ''));
    let amountInBaht = amountInDollars * rate;
    return Math.floor(amountInBaht);
}

let value = prompt("กรอกค่าเงินดอลล่า");
let result = extractCurrencyValue(`$${value}`, 35);
alert(result+"$"); 
