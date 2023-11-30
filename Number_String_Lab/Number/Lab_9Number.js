function rectangleLine(h,w){
    return lineArea = Math.sqrt(Math.pow(h,2) + Math.pow(w,2));
};

let heigh = parseFloat(prompt('โปรดกรอกความสูง'));
let width = parseFloat(prompt('โปรดกรอกความยาว'));
alert(`เส้นทะแยงมุมของพื้นที่สีเหลี่ยม width: ${width} X heigh: ${heigh} = ${rectangleLine(heigh, width).toFixed(2)}`);