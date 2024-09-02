const express = require("express");
const app = express();
const mongoose = require('mongoose');
const zod = require('zod');
const jwt = require("jsonwebtoken");
const jwtPassword = "12345";
app.use(express.json());
const port = 3000;

// Zod schema
const zodSchema = zod.object({
    email : zod.string().email(),
    password : zod.string().min(8)
})

//Connecting to DB
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/Project");
}

main()
    .then(() =>{
        console.log("Succesfully Connected to DataBase");
    })
    .catch((err) => {
        console.log(err);
    })

//DB schema
const dbSchema = new mongoose.Schema({
    email : String,
    password : String
})

// Create a collection for the above Schema
const user = new mongoose.model("Information", dbSchema);

// Defining the validation middleWare
function validateRequests(schema){
    return (req, res, next) => {
        const email = req.body.email;
        const password = req.body.password;
        const result = schema.safeParse({email, password});
        if(!result.success){
            return res.status(400).json({
                message : "Email should be in correct format \n Password should be at least 8 characters"
            })
        }
        next();
    }
}

app.get("/token", async(req, res) => {
    const token = req.headers.authorization;
    try{
        // The reason for this try and catch block is to check whether the token is valid or not
        const decode = jwt.verify(token, jwtPassword);
        const email = decode.email;
        await user.findOne({email});
        console.log(decode)
        res.status(200).send({
            message : "Token Verified",
            email : email
        })
    }
    catch(err){
        res.status(500).send({
            err
        })
    }
    


});

app.get("/allData", async (req, res) => {

    const allData = await user.find({}, { password: 0 });
    // The above line says get me all the data from the collection excluding their passwords
    res.status(200).send(allData)

})

app.post("/signin", async (req, res) => {
    const {email, password} = req.body;
    const existingUser = await user.findOne({email, password});
    if(!existingUser){
        return res.status(404).send({
            message : "User Doesn't Exist or Wrong Password"
        })
    }
    const token = jwt.sign({email}, jwtPassword);
    res.status(200).send({
        toke : `Your Token is ${token}`
    })
    
});

app.post("/signup", validateRequests(zodSchema),  async (req, res) => {

    const email = req.body.email;
    const password = req.body.password;
    const existingUser = await user.findOne({email : email});
    if(existingUser){
        return res.status(400).send({
            message : "User Already Exists"
        })
    }
    await user.create({
        email : email,
        password : password
    })
    return res.status(200).json({
        message : 'Successfully signed up and also Your Data has been store in our Database'
    })
    
    
    
});

app.put("/",(req, res) => {

});

app.delete("/", (req, res) => {

});

app.listen(port, (req, res) => {
    console.log(`App is listning to port ${port}`);
})




