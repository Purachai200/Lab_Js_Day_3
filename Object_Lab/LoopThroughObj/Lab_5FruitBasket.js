let fruitsBasket = {};

while (true) {
  const fruit = prompt('Enter the name of the fruit (type "stop" to finish):');
  
  if (fruit.toLowerCase() === 'stop') {
    break;
  }

  let quantity = prompt(`Enter the quantity of ${fruit}:`);
  
  if (isNaN(quantity)) {
    console.log('Please enter a valid quantity (a number).');
    continue;  
  }

  quantity = parseInt(quantity);

  let key = quantity > 1 ? fruit + 's' : fruit;

  fruitsBasket[key] = quantity;
}

console.log('Fruits Basket:', fruitsBasket);
