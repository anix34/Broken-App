const express = require('express');
let axios = require('axios');
let app = express(); // let instead of var.

app.post('/', function(req, res, next) {
  try {
    let results = req.body.developers.map(async d => {
      // Need pass d a value to find emplyee.
      return await axios.get(`https://api.github.com/users/${d}`);
    });
    let out = results.map(r => ({ name: r.data.name, bio: r.data.bio }));

    return res.send(JSON.stringify(out));
  } catch {
    next(err);
  }
});

app.listen(3000);