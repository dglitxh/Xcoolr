import { Router } from "express";
import passport from "passport"
const redisClient = require("../../config/config")


require("dotenv").config()
const session = require("express-session")
const router = Router()
const t_login = require("./tutor/t_login")
const t_signUp = require("./tutor/signUp")
const connectRedis = require("connect-redis")
const RedisStore = session(connectRedis)

router.use(session({ secret: "67ygghiuoh", resave: false, saveUninitialized: false,
}))

router.post("/tutor/signup", t_signUp)
router.post("/tutor/login", t_login)
router.get("/yd", (req, res) => {
    res.json({"yhh": "get me lit"})
})


module.exports = router
