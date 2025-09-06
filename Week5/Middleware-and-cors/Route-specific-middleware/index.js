const express = require('express');
const app = express();


// Route-specific middleware in Express.js refers to middleware functions
// that are applied only to specific routes or route groups, rather than being used globally across the entire application


// Middleware function
function logRequest(req, res, next) {
  console.log(`Method: ${req.method}`);
  console.log(`Request made to: ${req.url}`);
  console.log(`Host is: ${req.hostname}`);
  console.log(`Date: ${new Date()}`);
  next();
}

// Apply middleware to a specific route
app.get('/special', logRequest, (req, res) => {
  res.send('This route uses route-specific middleware!');
});

app.get("/sum", function(req, res) {
    console.log(req.name);
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b
    })
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});