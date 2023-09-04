//express.js => api isteklerini yazabilmemi sağlayan bir node.js kütüphanesi
//mpm install express
const express = require("express");
const app = express();
const cors = require("cors");

const todos = [
    id:1,
    title:"deneme",
    isComplated: false,
    date: Date()
]
let id = 0;

app.use(express.json());
app.use(cors());


app.get("/api/hello",(req,res) => {
    res.json({message: "Api call is succesful"});
});

// app.get("/api/todos/1",(req,res) => {
//     res.json({
//         userId: 1,
//         id: 1,
//         title: "Deneme",
//         complated: false
//     })
// });

// app.get("/api/todos/create/:value", (reg,res)=>{
//     const value = req.params.value;
//     id++;
//     const data = {
//         id: id,
//         title: value,
//         complated: false,
//         date: new Date()
//     }
//     todos.push(data);
//     res.json({message: "Create is succesful"})
// });

app.post("/api/todos/create",(req,res)=>{
    const body = req.body;
    id++;
    const data = {
        id:id,
        title:"",
        isComplated:false,
        date:new Date()
    }
    todos.push(data);
    res.json({message: "Create is succesful"})
})

app.get("/api/todos",(req,res)=>{
    res.json(todos);
});

app.listen(5000, () => console.log("My WepApi is running"))