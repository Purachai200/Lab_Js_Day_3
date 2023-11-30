function celsiusToFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
}

let celsiusValue = prompt("กรอกองศาเซลเซียส")
let fahrenheitValue = celsiusToFahrenheit(celsiusValue);
alert(`${celsiusValue} องศาเซลเซียส เท่ากับ ${fahrenheitValue} เรเดียน`);
