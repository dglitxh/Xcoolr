import { Application } from "express";

const express = require("express");

const app: Application = express()
const PORT: number = 4000

app.use((req, res, next) => {
    console.log("method", req.method)
    console.log("path", req.url)
    next()
})

app.get("/", (req, res) => {
    res.status(200).json({"msg": "hello world"})
    
})

app.listen(PORT, () => {
    console.log(` Server listening on port ${PORT}...`)
})