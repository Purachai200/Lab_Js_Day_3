function calSalary(salaries) {
    let total = 0;

    for (let key in salaries) {
        total += salaries[key];
    }

    return total;
}

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let totalSalary = calSalary(salaries);
console.log(totalSalary);
// ผลลัพธ์: 390
