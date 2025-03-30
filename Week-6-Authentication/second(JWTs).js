const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "randonbullshit";

const app = express();

app.use(express.json());

const users = [];

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

app.get("/me", function (req, res) {
  const token = req.headers.token; // jwt
  const decodedInformation = jwt.verify(token, JWT_SECRET); // converts the jwt back to the json username
  const username = decodedInformation.username;

  let foundUser = null;

  for (let i = 0; i < users.length; i++) {
    if (users[i].username == username) {
      foundUser = users[i];
    }
  }

  if (foundUser) {
    res.json({
      username: foundUser.username,
      password: foundUser.password,
    });
  } else {
    res.json({
      msg: "token invalid",
    });
  }
});

app.listen(3000);
