function getNumbers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000); 
  });
}

async function processNumbers() {
  try {
    const numbers = await getNumbers(); 

    const evenNumbers = numbers.filter((num) => num % 2 === 0);
    setTimeout(() => {
      document.getElementById("output").textContent = evenNumbers.join(", ");
    }, 1000); 
    
    const multipliedNumbers = evenNumbers.map((num) => num * 2);
    setTimeout(() => {
      document.getElementById("output").textContent = multipliedNumbers.join(", ");
    }, 3000);

  } catch (err) {
    console.error(err);
  }
}

processNumbers();
