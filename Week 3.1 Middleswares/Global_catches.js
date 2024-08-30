const express = require("express");
const app = express();
const port = 3000;
app.use(express.json())

app.post("/health-checkup", function(req,res){

    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;

    res.send("Your kidney length is " + kidneyLength);
    

});

app.use(function(err, req, res,next){
    res.status(500).json({
        msg : "Format isnt correct"
    })
})

//Note the reason why we use this above function is if there is some error reading the data kidney then to show a message we use these global catches the error message will be present in preview part
//which takes 4 parameters as agumenes


app.listen(port, () => {
    console.log("Server is running on http://localhost:${port}");
  });