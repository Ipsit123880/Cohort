const mongoose = require("mongoose");
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/week_5_2');
}
main()
    .then(() => {
        console.log("Successfully Connected To Database")
    })
    .catch((err) => console.log(err))
const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const todo = mongoose.model('todo',todoSchema);

module.exports = {
    todo
}

// Here collection name is todo and database name is todosssss
