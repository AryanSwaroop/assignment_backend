# Prime Number API
Deployed Link : https://assignment-backend-0d0p.onrender.com
This is a simple Node.js API that checks if a given number is a prime number.

## Prerequisites
- [Node.js](https://nodejs.org/) installed on your machine

## Setup & Run (JavaScript Version)

1. **Navigate to the backend directory:**
   ```sh
   cd assigned/backend
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Start the server:**
   ```sh
   node app.js
   ```
   The server will run at `http://localhost:3000`.

## API Usage
### Endpoint
- **POST** `/is-prime`

### Request Body
Send a JSON object with a `number` field:
```json
{
  "number": 17
}
```

### Example using `curl`
```sh
curl -X POST http://localhost:3000/is-prime -H "Content-Type: application/json" -d '{"number": 17}'
```

### Example Response
```json
{
  "number": 17,
  "isPrime": true
}
```

If you send an invalid request (e.g., missing or non-numeric `number`), you'll get an error response:
```json
{
  "error": "Please provide a valid number in the request body."
}
```

## Notes
- All dependencies are listed in `package.json`.
- The `node_modules` directory is excluded from version control via `.gitignore`. 
