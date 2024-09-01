const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/test');

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
