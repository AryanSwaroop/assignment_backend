import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

// Helper function to check if a number is prime
function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

// API endpoint: POST /is-prime
app.post('/is-prime', (req, res) => {
  const { number } = req.body;

  // Validate input
  if (number === undefined || typeof number !== 'number') {
    return res.status(400).json({
      error: 'Please provide a valid number in the request body, e.g., { "number": 17 }',
    });
  }

  const result = isPrime(number);
  return res.json({ number, isPrime: result });
});

app.listen(port, () => {
  console.log(`✅ Prime API running at http://localhost:${port}`);
});
