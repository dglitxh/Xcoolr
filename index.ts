import { Application } from "express";
const express = require("express");
const authrouter = require("./ctrlrs/auth/auth_controller")
const apiRouter = require("./ctrlrs/controller")
const app: Application = express()
import bodyParser from "body-parser";
import { time, timeStamp } from "console";



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.raw())
app.use(bodyParser.text())

app.use((req, res, next) => {
    console.log(`method: ${req.method}   path: ${req.url}   time: ${Date.now()}`)
    next()
})

app.use("/auth", authrouter)
app.use("/api/v1")
app.get("/", (req, res) => {
    res.status(200).json({"msg": "Welcome to Xcoolr"})
    
})


module.exports = app