function getNumbers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 1000); 
  });
}

getNumbers()
  .then((numbers) => {
    document.getElementById("output").textContent = numbers.join(", ");
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const evenNumbers = numbers.filter((num) => num % 2 === 0);
        document.getElementById("output").textContent = evenNumbers.join(", ");
        resolve(evenNumbers);
      }, 1000); 
    });
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