function getNumbers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 1000); 
  });
}

getNumbers()
  .then((numbers) => {
    const evenNumbers = numbers.filter((num) => num % 2 === 0);
    document.getElementById("output").textContent = evenNumbers.join(", ");
    return evenNumbers;
  })
  .then((evenNumbers) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const multipliedNumbers = evenNumbers.map((num) => num * 2);
        document.getElementById("output").textContent = multipliedNumbers.join(", ");
        resolve(multipliedNumbers);
      }, 2000); 
    });
  })
  .catch((err) => console.error(err));