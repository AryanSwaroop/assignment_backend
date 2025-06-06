# Prime Number API

This is a simple Node.js API that checks if a given number is a prime number.

## Prerequisites
- [Node.js](https://nodejs.org/) installed on your machine

## Setup & Run
1. Navigate to the `assigned/backend` directory:
   ```sh
   cd assigned/backend
   ```
2. Install dependencies:
   ```sh
   npm install express
   ```
3. Start the server:
   ```sh
   node app.js
   ```
   The server will run at `http://localhost:3000`.

## TypeScript Version

1. Install TypeScript and types for Node/Express:
   ```sh
   npm install --save-dev typescript @types/node @types/express
   ```
2. Build the TypeScript code:
   ```sh
   npx tsc
   ```
3. Start the server:
   ```sh
   node dist/app.js
   ```

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