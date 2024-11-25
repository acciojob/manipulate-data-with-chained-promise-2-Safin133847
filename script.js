function generateNumbers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000);
  });
}

function filterOddNumbers(numbers) {
  return numbers.filter((number) => number % 2 === 0);
}

function multiplyEvenNumbers(numbers) {
  return numbers.map((number) => number * 2);
}

function updateOutput(text) {
  const outputElement = document.getElementById('output');
  outputElement.innerText = text;
}

generateNumbers()
  .then((numbers) => {
    updateOutput(numbers.join(', '));
    return filterOddNumbers(numbers);
  })
  .then((evenNumbers) => {
    setTimeout(() => {
      updateOutput(evenNumbers.join(', '));
    }, 1000);
    return evenNumbers;
  })
  .then((evenNumbers) => {
    setTimeout(() => {
      const multipliedNumbers = multiplyEvenNumbers(evenNumbers);
      updateOutput(multipliedNumbers.join(', '));
    }, 2000);
  });