function ucFirst(str) {
    let first = str.charAt(0);
    first = first.toUpperCase();
    return first + str.slice(1);
}
let str = prompt("กรอกคำ: ");
let modStr = ucFirst(str);
alert(modStr);
