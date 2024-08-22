function getNumbers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4]);
        }, 3000);
    });
}

function filterEvenNumbers(numbers) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const evenNumbers = numbers.filter(num => num % 2 === 0);
            document.getElementById('output').innerText = evenNumbers.join(', ');
            resolve(evenNumbers);
        }, 1000); 
    });
}

function multiplyNumbers(numbers) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const multipliedNumbers = numbers.map(num => num * 2);
            document.getElementById('output').innerText = multipliedNumbers.join(', ');
            resolve(multipliedNumbers);
        }, 2000); 
    });
}

getNumbers()
    .then(filterEvenNumbers)
    .then(multiplyNumbers)
    .catch(error => {
        console.error('Error:', error);
    });
