const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "randombullshit";

const app = express();
app.use(express.json());

const users = [];

function logger(req, res, next){
    console.log(`${req.method} method came.`);
    next();
}

function auth(req, res, next) {
    const token = req.headers.token;
    const decodedData = jwt.verify(token, JWT_SECRET);
  
    if (decodedData.username) {
      req.username = decodedData.username;
      next();
    } else {
      res.json({
        msg: "You are not logged in",
      });
    }
}

app.use(logger);

app.post("/signup", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  users.push({
    username: username,
    password: password,
  });

  res.json({
    msg: "You are signed up",
  });

  console.log(users);
});

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  // maps and filter
  let foundUser = null;

  for (let i = 0; i < users.length; i++) {
    if (users[i].username == username && users[i].password == password) {
      foundUser = users[i];
    }
  }

  if (foundUser) {
    const token = jwt.sign(
      {
        username: username,
      },
      JWT_SECRET
    ); // convert their username over to a jwt
    // foundUser.token = token;     // no use of this line while using jwt, no need to store the token in the database
    res.json({
      token: token,
    });
  } else {
    res.status(403).send({
      msg: "Invalid username or password",
    });
  }
});

app.get("/me", auth, function (req, res) {
  let foundUser = null;

  for (let i = 0; i < users.length; i++) {
    if (users[i].username == req.username) {
      foundUser = users[i];
    }
  }

  res.json({
    username: foundUser.username,
    password: foundUser.password,
  });
});

app.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
});
