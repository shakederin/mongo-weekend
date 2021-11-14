/*******************************BONUS************************************************** */

const {Question} = require("../setUp/schema");
const Mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");
const app = express();
require('dotenv').config()
const port = process.env.PORT || 8080;

app.listen(port, ()=>{
    console.log(`listening to port ${port}`);
})

app.use(express.json());      // recive body data as json

app.use(cors());              // help with cors

app.get("/list", (req,res)=>{      
        Question.find({}).then((response)=>{
            res.send(response)
        })
        .catch((error)=>{
            console.log(error);
            res.status(503).send("Failed to connect the Database")
        }) 
})

app.put("/update", (req, res)=>{
    const requestBody = req.body
    res.send(requestBody)
})

