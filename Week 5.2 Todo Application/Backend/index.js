const express = require("express");
const app = express();
const cors = require("cors");
const { createTodo, updateTodo } = require("./auth.js");
// createtodo we use for post and updatetodo for put request
const {todo} = require ("./db.js")
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",  // Update this to the URL of your frontend
    methods: ["GET", "POST", "PUT"],   // Allow the necessary methods
    credentials: true                  // Include credentials if needed
}));
app.post("/todo", async (req, res) => {
    try {
        const createPayLoad = req.body;
        const parsePayLoad = createTodo.safeParse(createPayLoad);
        if (!parsePayLoad.success) {
            res.status(403).json({ msg: "You sent wrong inputs" });
            return;
        }
        await todo.create({
            title: createPayLoad.title,
            description: createPayLoad.description,
            completed: false
        });
        res.json({ msg: "Todo created" });
    } catch (error) {
        res.status(500).json({ msg: "Server error", error: error.message });
    }
});

app.get("/todos", async (req, res) => {
    try {
        const data = await todo.find({});
        console.log(data.length);
        res.json({ data });
    } catch (error) {
        res.status(500).json({ msg: "Server error", error: error.message });
    }
});

app.put("/completed", async (req, res) => {
    try {
        const updatePayLoad = req.body;
        const parsePayLoad = updateTodo.safeParse(updatePayLoad);
        if (!parsePayLoad.success) {
            res.status(411).json({ msg: "You sent wrong inputs" });
            return;
        }
        await todo.updateOne({ _id: req.body.id }, { completed: true });
        res.json({ msg: "Todo marked as completed" });
    } catch (error) {
        res.status(500).json({ msg: "Server error", error: error.message });
    }
});

app.delete("/todo/:id", async (req, res) => {
    try {
        await todo.deleteOne({ _id: req.params.id });
        res.json({ msg: "Todo deleted" });
    } catch (error) {
        res.status(500).json({ msg: "Server error", error: error.message });
    }
});

app.listen(3000,()=>{
    console.log("server is running on port 3000");
})

