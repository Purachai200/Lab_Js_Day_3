function Accumulator(stringValue){

    this.currentValue = parseInt(stringValue);

    this.read = function() {
        let input = parseFloat(prompt('ใส่ค่ามา : '));
        this.currentValue += input;
    }

    this.show = function(){
        alert(`ค่า currentValue คือ ${this.currentValue}`);
    };

}

let accumulator = new Accumulator(prompt('กรอกค่าเริ่มต้น'));

accumulator.read();
accumulator.show();

accumulator.read();
accumulator.show();

accumulator.read();
accumulator.show();