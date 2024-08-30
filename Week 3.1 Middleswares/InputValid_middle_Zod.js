const express = require("express");
const zod = require("zod");
const app = express();
const port = 3000;

const schema = zod.array(zod.number());
app.use(express.json())

app.post("/health-checkup", function(req,res){

    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);
    const kidneysLength = kidneys.length;
    if(!response.success){
        res.json({
            msg : "Invalid Inputs"
        })
    }
    else{
        res.json({
            kidneysLength,
            response
        })
    }


});


app.listen(port, () => {
    console.log("Server is running on http://localhost:${port}");
  });