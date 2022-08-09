import { Router } from "express";
const redisClient = require("../../config/config")
const cookieParser = require("cookie-parser")


require("dotenv").config()
const session = require("express-session")
const router = Router()
const t_login = require("./tutor/t_login")
const t_signUp = require("./tutor/signUp")
const redisStore = require('connect-redis')(session);

router.use(cookieParser())
router.use(session({
     name: "xcoolr",
     secret: process.env.SESSION_SECRET, //remember to change this
     resave: false, 
     saveUninitialized: false,
     store: new redisStore({client: redisClient, ttl: 86400 }),
}))

router.post("/tutor/signup", t_signUp)
router.post("/tutor/login", t_login)
router.get("/logout", (req: any, res: any) => {
    req.session.destroy()
    res.send({"status": "user logged out succesfully"})
})
router.get("/yd", (req, res) => {
    res.json({"yhh": "get me lit"})
})


module.exports = router
