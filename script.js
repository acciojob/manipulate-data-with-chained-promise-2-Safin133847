// script.js

// Function that returns a promise resolving with an array of numbers after 3 seconds
function getNumbers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000);
  });
}

// Function to filter out odd numbers
function filterOddNumbers(numbers) {
  return new Promise((resolve) => {
    const evenNumbers = numbers.filter(num => num % 2 === 0);
    setTimeout(() => {
      resolve(evenNumbers);
    }, 1000);
  });
}

// Function to multiply even numbers by 2
function multiplyByTwo(numbers) {
  return new Promise((resolve) => {
    const multipliedNumbers = numbers.map(num => num * 2);
    setTimeout(() => {
      resolve(multipliedNumbers);
    }, 2000);
  });
}

// Update the output div with the provided numbers
function updateOutput(numbers) {
  const outputDiv = document.getElementById('output');
  outputDiv.textContent = numbers.join(', ');
}

// Chain the promises to transform the data and update the DOM
getNumbers()
  .then(numbers => {
    return filterOddNumbers(numbers).then(filteredNumbers => {
      updateOutput(filteredNumbers);
      return filteredNumbers;
    });
  })
  .then(filteredNumbers => {
    return multiplyByTwo(filteredNumbers).then(multipliedNumbers => {
      updateOutput(multipliedNumbers);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
