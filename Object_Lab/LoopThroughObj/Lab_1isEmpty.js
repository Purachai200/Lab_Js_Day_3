function isEmpty(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            return false; 
        }
    }
    return true; 
}

let emptyObject = {};
console.log(isEmpty(emptyObject)); // ผลลัพธ์: true

let nonEmptyObject = { key: 'value' };
console.log(isEmpty(nonEmptyObject)); // ผลลัพธ์: false
