function getNumbers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000); 
  });
}

getNumbers()
  .then((numbers) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const evenNumbers = numbers.filter((num) => num % 2 === 0);
        document.getElementById("output").textContent = evenNumbers.join(", ");
        resolve(evenNumbers);
      }, 1000);
    });
  })
  .then((evenNumbers) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const multipliedNumbers = evenNumbers.map((num) => num * 2);
        document.getElementById("output").textContent = multipliedNumbers.join(", ");
        resolve(multipliedNumbers);
      }, 2000); 
    });
  })
  .catch((err) => console.error(err));
