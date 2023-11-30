function Calculator() {
    this.read = function() {
        this.firstNumber = parseFloat(prompt('ใส่ค่าตัวเลขที่ 1:'));
        this.secondNumber = parseFloat(prompt('ใส่ค่าตัวเลขที่ 2:'));
    };

    this.sum = function() {
        return this.firstNumber + this.secondNumber;
    };

    this.mul = function() {
        return this.firstNumber * this.secondNumber;
    };
}

// สร้าง Object calculator
let calculator = new Calculator();

// เรียกใช้ method read เพื่อรับค่า input
calculator.read();

// เรียกใช้ method sum และ mul แล้วแสดงผลลัพธ์
console.log('ผลบวก:', calculator.sum());
console.log('ผลคูณ:', calculator.mul());
