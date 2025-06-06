import express from 'express';

// Create an Express application
const app = express();
const port = 3000;

// Middleware to parse incoming JSON requests
app.use(express.json());

/**
 * Checks if a given number is a prime number.
 * @param {number} num - The number to check for primality.
 * @returns {boolean} - Returns true if the number is prime, false otherwise.
 */
function isPrime(num) {
  // Numbers less than or equal to 1 are not prime
  if (num <= 1) return false;
  // 2 is the only even prime number
  if (num === 2) return true;
  // Exclude all other even numbers
  if (num % 2 === 0) return false;
  // Check divisibility from 3 up to the square root of num
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

/**
 * POST /is-prime
 * Request body: { "number": <number> }
 * Response: { "number": <number>, "isPrime": <boolean> }
 *
 * Checks if the provided number is prime and returns the result.
 */
app.post('/is-prime', (req, res) => {
  const { number } = req.body;

  // Validate input: number must be provided and must be a number
  if (number === undefined || typeof number !== 'number') {
    return res.status(400).json({
      error: 'Please provide a valid number in the request body, e.g., { "number": 17 }',
    });
  }

  // Check if the number is prime
  const result = isPrime(number);

  // Respond with the result
  return res.json({ number, isPrime: result });
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`✅ Prime API running at http://localhost:${port}`);
});
