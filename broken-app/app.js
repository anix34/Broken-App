// Import the Express framework for building web applications
const express = require('express');

// Import the Axios library for making HTTP requests
const axios = require('axios');

// Create an instance of an Express application
const app = express();

// Use middleware to parse JSON bodies in incoming requests
app.use(express.json());

// Define a POST route at the root URL '/'
app.post('/', async function(req, res, next) {
  try {
    // Use Promise.all to handle multiple asynchronous operations in parallel
    let results = await Promise.all(req.body.developers.map(async d => {
      // Make a GET request to the GitHub API for each developer in the request body
      let response = await axios.get(`https://api.github.com/users/${d}`);
      // Return the response data for each developer
      return response.data;
    }));

    // Map the results to extract the name and bio of each developer
    let out = results.map(r => ({ name: r.name, bio: r.bio }));

    // Send the mapped results as a JSON string in the response
    return res.send(JSON.stringify(out));
  } catch (err) {
    // Pass any errors to the next error-handling middleware
    next(err);
  }
});

// Start the server on port 3000 and log a message to the console
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
