const notebook = {
    brand: 'ASUS',
    model: 'Vivobook D413IA-EB303TS',
    processor: 'AMD Ryzen 7 4700U 3.6GHz',
    graphics: 'Integrated Graphics : AMD Radeon Graphics',
    ram: '8GB DDR4 Onboard',
    storage: '512GB PCIe NVMe M.2 SSD'
   };

   function cloneObjectForIn(obj) {
    let clonedObject = {};

    for (let key in obj) {
        clonedObject[key] = obj[key];
    }

    return clonedObject;
}

function cloneObjectAssign(obj) {
    return Object.assign({}, obj);
}

const clonedNotebookForIn = cloneObjectForIn(notebook);
console.log(clonedNotebookForIn);

const clonedNotebookAssign = cloneObjectAssign(notebook);
console.log(clonedNotebookAssign);