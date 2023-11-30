function calculateDiscountedPrice(quantity, unitPrice, discountPercentage) {
    const discountAmount = (unitPrice * discountPercentage) / 100;
    const discountedPrice = unitPrice - discountAmount;
    return quantity * discountedPrice;
  }
  
  let shoppingCart = {};
  
  while (true) {
    const itemName = prompt('Enter the name of the item (type "stop" to finish):');
  
    if (itemName.toLowerCase() === 'stop') {
      break;
    }
  
    let quantity = prompt(`Enter the quantity of ${itemName}:`);
    let unitPrice = prompt(`Enter the unit price of ${itemName}:`);
    let discountPercentage = prompt(`Enter the discount percentage for ${itemName} (0 if none):`);

    if (isNaN(quantity) || isNaN(unitPrice) || isNaN(discountPercentage)) {
      console.log('Please enter valid numeric values.');
      continue;
    }
  
    quantity = parseInt(quantity);
    unitPrice = parseFloat(unitPrice);
    discountPercentage = parseFloat(discountPercentage);
  
    const key = itemName.toLowerCase();
  
    shoppingCart[key] = {
      quantity,
      unitPrice,
      discountPercentage: discountPercentage !== 0 ? discountPercentage : undefined,
      discountedPrice: calculateDiscountedPrice(quantity, unitPrice, discountPercentage),
    };
  }
  
  console.log('Shopping Cart:', shoppingCart);
  