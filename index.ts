import { Application } from "express";
import { PrismaClient } from "@prisma/client";
const express = require("express");
const router = require("./ctrlrs/auth/auth_controller")
const prisma = new PrismaClient()
const app: Application = express()
const PORT: number = 4000

app.use((req, res, next) => {
    console.log("method", req.method)
    console.log("path", req.url)
    next()
})

app.use("auth", router)
app.get("/", (req, res) => {
    res.status(200).json({"msg": "hello world"})
    
})

app.listen(PORT, () => {
    console.log(` Server listening on port ${PORT}...`)
})