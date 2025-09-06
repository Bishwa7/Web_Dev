const express = require("express")
const app = express()

let requestCount = 0;

// Middleware

function requestIncreaser(req, res, next){
    requestCount++;
    console.log('Total request count = ' + requestCount);
    next();
}



// admin handler

app.get("/admin", function(req, res){
    res.json({
        NumberOfRequests: requestCount
    })
});



// http://localhost:3000/subtract?a=10&b=20

// sum handler (here requestIncreaser is the middleware) 
app.get("/sum", requestIncreaser, function(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b
    })
});



app.use(requestIncreaser)   // Global Middleware (anything handler below it will use it)


function subtractFunc(req, res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a - b
    })
}

// http://localhost:3000/subtract?a=10&b=20

app.get("/subtract", subtractFunc);     // subtract handler


// http://localhost:3000/multiply?a=10&b=20

// multiply handler
app.get("/multiply", function(req, res) {
    const a = (req.query.a);
    const b = (req.query.b);

    res.json({
        ans: a * b
    })
});




app.listen(3000);