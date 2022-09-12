import { Application } from "express";
const express = require("express");
const authrouter = require("./ctrlrs/auth/auth_controller")
const apiRouter = require("./ctrlrs/controller")
const app: Application = express()
const session = require("express-session")
const redisClient = require("./config/config")
const cookieParser = require("cookie-parser")
import bodyParser from "body-parser";
const redisStore = require('connect-redis')(session);

app.use(cookieParser())
app.use(session({
     name: "xcoolr",
     secret: process.env.SESSION_SECRET, //remember to change this
     resave: false, 
     saveUninitialized: false,
     store: new redisStore({client: redisClient}),
}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.raw())
app.use(bodyParser.text())
app.use((req, res, next) => {
    console.log(`method: ${req.method}   path: ${req.url}   time: ${Date.now()}`)
    next()
})
app.use("/auth", authrouter)
app.use("/api/v1", apiRouter)
app.get("/", (req, res) => {
    res.status(200).json({"msg": "Welcome to Xcoolr"}) 
})


module.exports = app