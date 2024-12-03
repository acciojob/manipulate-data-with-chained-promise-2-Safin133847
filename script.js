function getNumbers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000);
  });
}

function filterOddNumbers(numbers) {
  return new Promise((resolve) => {
    const evenNumbers = numbers.filter(num => num % 2 === 0);
    setTimeout(() => {
      updateOutput(evenNumbers);
      resolve(evenNumbers);
    }, 1000);
  });
}

function multiplyByTwo(numbers) {
  return new Promise((resolve) => {
    const multipliedNumbers = numbers.map(num => num * 2);
    setTimeout(() => {
      updateOutput(multipliedNumbers);
      resolve(multipliedNumbers);
    }, 2000);
  });
}

function updateOutput(numbers) {
  const outputDiv = document.getElementById('output');
  outputDiv.textContent = numbers.join(', ');
}

getNumbers()
  .then(numbers => {
    return filterOddNumbers(numbers);
  })
  .then(filteredNumbers => {
    return multiplyByTwo(filteredNumbers);
  })
  .catch(error => {
    console.error('Error:', error);
  });
