let calculator = {
    read(){
        this.num1 = parseFloat(prompt('Enter the first Number : '));
        this.num2 = parseFloat(prompt('Enter the second Number : '));
    },
    sum(){
        return this.num1 + this.num2;
    },
    mul(){
        return this.num1 * this.num2;
    }
}

calculator.read();
alert("ผลรวม = "+calculator.sum());
alert("ผลคูณ = "+calculator.mul());