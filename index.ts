import { Application } from "express";
const express = require("express");
const authrouter = require("./ctrlrs/auth/auth_controller")
const app: Application = express()
const PORT: number = 4000
import bodyParser from "body-parser";



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.raw())
app.use(bodyParser.text())

app.use((req, res, next) => {
    console.log("method", req.method)
    console.log("path", req.url)
    next()
})

app.use("/auth", authrouter)
app.get("/", (req, res) => {
    res.status(200).json({"msg": "Welcome to Xcoolr"})
    
})

app.listen(PORT, () => {
    console.log(` Server listening on port ${PORT}...`)
})