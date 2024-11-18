function getNumbers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000); 
  });
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function updateOutput(message) {
  document.getElementById('output').textContent = message;
}

async function processNumbers() {
  const numbers = await getNumbers(); 

  const evenNumbers = numbers.filter(num => num % 2 === 0);
  
  await delay(1000); 
  updateOutput(`Even numbers: ${evenNumbers.join(', ')}`);
  
  const doubledNumbers = evenNumbers.map(num => num * 2);
  
  await delay(2000);
  updateOutput(`Doubled even numbers: ${doubledNumbers.join(', ')}`);
}

processNumbers();
