const inputObject = {};

function buildObject() {
  while (true) {
    const key = prompt('Enter a key (type "stop" to finish):');
    
    if (key.toLowerCase() === 'stop') {
      break;
    }

    const value = prompt(`Enter the value for ${key}:`);
    inputObject[key] = value;
  }
}

buildObject();
console.log('Resulting Object:', inputObject);
