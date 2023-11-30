function truncate(str, length) {
    length = parseInt(length);
    const truncatedString = str.length > length ? str.substr(0, length) + '...' : str;
    return truncatedString;
}

let string = prompt("กรอกตัวอักษรมา : ");
let len = prompt("กรอกความยาวมา : ");
alert(truncate(string, len));
