const express = require("express");

const app = express();

let requestCount = 0;

// Middleware -> requestIncreaser
function requestIncreaser(req, res, next) {
  requestCount = requestCount + 1;
  console.log(`Total number of requests = ${requestCount}`);
  next();
}

// Middleware -> realSumHandler
function realSumHandler(req, res) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.json({
    ans: a + b,
  });
}

// Middleware -> logger
function logger(req, res, next){
    console.log(`Method is ${req.method}`);
    console.log("URL is " + req.protocol + '://' + req.get('host') + req.originalUrl);
    console.log("Time is " + new Date());

    next();
}

// Use logger for every route handler declared below the app.use("logger") line
app.use(logger);

// Route handler for sum
app.get("/sum", requestIncreaser, realSumHandler);

// Route handler for total number of requests on the server
app.get("/admin", function (req, res) {
  res.json({
    message: `Total number of requests on the server is : ${requestCount}`,
  });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
