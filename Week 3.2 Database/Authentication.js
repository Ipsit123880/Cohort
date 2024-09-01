const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();
app.use(express.json());

const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];

function userExists(username, password) {
  let userexists = false;
  for(let i = 0; i < ALL_USERS.length; i++) {
    if(ALL_USERS[i].username === username && ALL_USERS[i].password === password) {
        userexists = true;
    }
  }

  return userexists;
}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, "jwtPassword");

// This uses the sign method from the jsonwebtoken library.
// It takes an object as the payload to be signed. In this case, it's an object containing the username property
// with the value of the provided username.
// The second argument is the secret key used to sign the token. In this case, it's the string "jwtPassword".
// This key should be kept secure and not exposed.
  return res.json({
    token,
    //when we send a post request we will get a token as output that is we will get a string.
    // in postman preview section copy that string and go to
    //jwt.io web and paste it and the username which we sent can be seen and while sending the get request copy that token
    // and send that in authorization part of header 
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    // return a list of users other than this username
    res.json({
        users : ALL_USERS.filter(function(value){
            if(value.username == username){
                return false;
            } else{
                return true;
            }
        })
    })
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000) 
