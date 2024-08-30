const express = require("express");
const app = express();
const port = 3000;
app.use(express.json())
let noOfRequests = 0;

function calculateNumberOfRequests(req, res, next){
    noOfRequests = noOfRequests + 1
    next()
}
//Uper wala is a middleware

app.use(calculateNumberOfRequests)
//TO next all routes this calculateNumberOfRequests or Middleware will be valid

app.get("/health-checkup", function(req,res){
    res.json({
        noOfRequests
    })

});

app.listen(port, () => {
    console.log("Server is running on http://localhost:${port}");
  });