const express = require('express');
const app = express();
const PORT = 3000;

const generatePrimes = (n) => {
  const primes = [];
  let num = 2;
  while (primes.length < n) {
    if (primes.every((p) => num % p !== 0)) {
      primes.push(num);
    }
    num++;
  }
  return primes;
};

const generateFibonacci = (n) => {
  const fib = [0, 1];
  while (fib.length < n) {
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
  }
  return fib.slice(0, n);
};

const generateEvens = (n) => {
  const evens = [];
  for (let i = 0; evens.length < n; i++) {
    if (i % 2 === 0) {
      evens.push(i);
    }
  }
  return evens;
};

const generateRandoms = (n) => {
  const randoms = [];
  for (let i = 0; i < n; i++) {
    randoms.push(Math.floor(Math.random() * 100));
  }
  return randoms;
};

app.get('/number/:type', (req, res) => {
  const { type } = req.params;
  const windowSize = 10;
  let numbers = [];

  switch (type) {
    case 'p':
      numbers = generatePrimes(windowSize);
      break;
    case 'f':
      numbers = generateFibonacci(windowSize);
      break;
    case 'e':
      numbers = generateEvens(windowSize);
      break;
    case 'r':
      numbers = generateRandoms(windowSize);
      break;
    default:
      return res.status(400).json({ error: 'Invalid type' });
  }

  res.json({ numbers });
});

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:${PORT}");
});
