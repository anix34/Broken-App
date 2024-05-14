const fs = require("fs");
const axios = require("axios");
const http = require('http');



/* Get URL from txt */
const readline = require('readline');

function sleep(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

async function processLineByLine() {
  const fileStream = fs.createReadStream('urls.txt');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  for await (const line of rl) {
    console.log(line); 
    //Having trouble to download URL from txt file to a new file
    await sleep(1000);
  }
  }

processLineByLine();


// download html
var util = require("util")

var options = {
    host: "www.google.com",
    path: "/"
};

var content = "";   

var req = http.request(options, function(res) {
    res.setEncoding("utf8");
    res.on("data", function (chunk) {
        content += chunk;
    });

    res.on("end", function () {
        util.log(content);
    });
});

req.end();


  