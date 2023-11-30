function convertToDecimal2(num) {
    let result = parseFloat(num).toFixed(2);
    return parseFloat(result);
}

console.log(convertToDecimal2(10));      // ผลลัพธ์: 10.00
console.log(convertToDecimal2(5.1));     // ผลลัพธ์: 5.10
console.log(convertToDecimal2(3.1289));  // ผลลัพธ์: 3.13
