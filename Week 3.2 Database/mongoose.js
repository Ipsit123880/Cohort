const mongoose = require("mongoose");

mongoose.connect('Ur_Mongo_Link');

const User = mongoose.model('User', {
    name: String,
    email: String,
    password: String
});

const user = new User({
    name: "Harkirat Singh",
    email: "ipsiyr@gmail.com",
    password: "123456"
});

user.save()
