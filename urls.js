// Import the 'fs' module for file system operations
const fs = require("fs");

// Import the 'axios' library for making HTTP requests (though it's not used in the current code)
const axios = require("axios");

// Import the 'http' module for making HTTP requests
const http = require('http');


// Import the 'readline' module for reading the file line by line
const readline = require('readline');

// Define a sleep function that returns a promise to pause execution for a specified time
function sleep(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

// Define an async function to process each line of a file
async function processLineByLine() {
  // Create a readable stream from the 'urls.txt' file
  const fileStream = fs.createReadStream('urls.txt');

  // Create an interface for reading each line from the file stream
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  // Iterate over each line in the file
  for await (const line of rl) {
    console.log(line); // Log each line (URL) to the console
    // Pause for 1 second between processing each line
    await sleep(1000);
  }
}

// Call the function to start processing the file
processLineByLine();


// Import the 'util' module for utility functions
var util = require("util");

// Define options for the HTTP request
var options = {
    host: "www.google.com", // Hostname to connect to
    path: "/"               // Path on the host to request
};

// Initialize a variable to accumulate the response data
var content = "";   

// Make an HTTP request with the specified options
var req = http.request(options, function(res) {
    res.setEncoding("utf8"); // Set the encoding of the response data to UTF-8

    // When data is received, add it to the 'content' variable
    res.on("data", function (chunk) {
        content += chunk;
    });

    // When the response ends, log the accumulated content
    res.on("end", function () {
        util.log(content);
    });
});

// End the request
req.end();
