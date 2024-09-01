const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
const port = 3000;


async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/Harkirat_Singh');
}
main()
    .then(() => {
        console.log("connection Succesful")
    })
    .catch((err) => console.log(err))
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});
// mongoose.Schema: This is a constructor function provided by Mongoose to create a schema.
// A schema defines the structure of the documents (records) that will be stored in a MongoDB collection.
//new mongoose.Schema({...}):This line creates a new instance of the mongoose.Schema constructor,providing an object that defines the structure of the documents
// in the "User" collection. name: String: This indicates that the "name" field in the documents will be of type String.
// email: String: This indicates that the "email" field in the documents will be of type String.
// password: String: This indicates that the "password" field in the documents will be of type String.
// This schema defines a basic structure for user documents in the "User" collection, where each document must have a "name," "email," and "password" field, all of type String.
const User = mongoose.model('User', userSchema);
// Here User is a collection and inside this we store documents
// mongoose.model: This is a method provided by Mongoose to create a collection
// mongoose.model('User', userSchema): This line creates a model named "User" using the schema defined earlier.The first argument ('User') is the singular name
// of the collection that the model represents. Mongoose will automatically create a MongoDB collection named "users" (lowercase and pluralized) based on this singular name.
// Now, you can use the User model to interact with the "User" collection in MongoDB.
app.post("/signup", async function (req, res) {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    const existingUser = await User.findOne({email : email});
    if (existingUser) {
        return res.status(400).send('User already exists');
    }
    // const user = new User({
    //     name: name,
    //     email: email,
    //     password: password
    // });
    // user.save();
    // The above 6 lines same as below 5 lines
    await User.create({
        name: name,
        email: email,
        password: password
    })
    res.json({
        "msg" : "User created succesfully"
    })
});

app.listen(port, () => {
    console.log(`listning on port ${port}`);
}) 

