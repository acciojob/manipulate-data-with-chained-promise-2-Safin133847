function getNumbers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000); 
  });
}

function updateOutput(message) {
  document.getElementById('output').textContent = message;
}

getNumbers()
  .then((numbers) => {
    const evenNumbers = numbers.filter(num => num % 2 === 0);

    setTimeout(() => {
      updateOutput(`Even numbers: ${evenNumbers.join(', ')}`);
    }, 1000);  

    return evenNumbers; 
  })
  .then((evenNumbers) => {
    const doubledNumbers = evenNumbers.map(num => num * 2);

    setTimeout(() => {
      updateOutput(`Doubled even numbers: ${doubledNumbers.join(', ')}`);
    }, 2000); 
  });
