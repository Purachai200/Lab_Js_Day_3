function checkSex(code) {
    const upperCaseCode = code.toUpperCase();
    if (upperCaseCode.includes('XXX') || upperCaseCode.includes('PORN') || upperCaseCode.includes('SEX')) {
        return true;
    } else {
        return false;
    }
}
let code = prompt('กรอกตัวอักษร: ');
let isSexualContent = checkSex(code);
console.log(isSexualContent);
