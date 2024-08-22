const inputElement = document.getElementById('ip');
const buttonElement = document.getElementById('btn');
const outputElement = document.getElementById('output');

function updateOutput(message) {
  outputElement.textContent = message;
}

function delayPromise(value, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  });
}

buttonElement.addEventListener('click', () => {
  const initialNumber = Number(inputElement.value);

  delayPromise(initialNumber, 2000)
    .then((number) => {
      updateOutput(`Result: ${number}`);
      return delayPromise(number * 2, 1000);
    })
    .then((number) => {
      updateOutput(`Result: ${number}`);
      return delayPromise(number - 3, 1000);
    })
    .then((number) => {
      updateOutput(`Result: ${number}`);
      return delayPromise(number / 2, 1000);
    })
    .then((number) => {
      updateOutput(`Result: ${number}`);
      return delayPromise(number + 10, 1000);
    })
    .then((finalResult) => {
      updateOutput(`Final Result: ${finalResult}`);
    })
    .catch((error) => {
      console.error("Error in promise chain:", error);
      updateOutput("An error occurred during the process.");
    });
});
