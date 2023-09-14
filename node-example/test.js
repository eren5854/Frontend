console.log("hello world");

const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/api/get", (req,res) => {
    res.json({message:"succes"});
});

app.listen(5000,()=> console.log("api running"));