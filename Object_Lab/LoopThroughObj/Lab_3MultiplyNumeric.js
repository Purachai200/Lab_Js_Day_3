function multiplyNumeric(obj, num) {
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] *= num;
        }
    }
}

let menu = {
    width: 200,
    height: 300,
    title: 'My menu'
};

multiplyNumeric(menu, 3);

console.log(menu);
