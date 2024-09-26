// Import the express module
const express = require("express");

// Create an instance of express
const app = express();

// Define a route for the root URL ("/") that responds with "Hello, World!"
app.get("/", (req, res) => {
  res.send("Hello Xeven");
});

// Define the port to listen on
const PORT = 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});
