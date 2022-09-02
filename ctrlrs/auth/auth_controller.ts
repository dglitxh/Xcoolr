import { Router } from "express";
const redisClient = require("../../config/config")
const cookieParser = require("cookie-parser")


require("dotenv").config()
const session = require("express-session")
const router = Router()

const t_login = require("./tutor/t_login")
const t_signUp = require("./tutor/signUp")
const t_newProfile = require("./tutor/createProfile")
const t_updProfile = require("./tutor/editProfile")
const t_delProfile = require("./tutor/delProfile")
const t_getProfile = require("./tutor/t_getUser")
const s_newProfile = require("./student/newProfile")
const s_updProfile = require("./student/updateProfile")
const s_delProfile = require("./student/s_delProfile")
const s_getProfile = require("./student/s_getProfile")
const s_login = require("./student/s_login")
const s_signup = require("./student/s_signup")
const redisStore = require('connect-redis')(session);

router.use(cookieParser())
router.use(session({
     name: "xcoolr",
     secret: process.env.SESSION_SECRET, //remember to change this
     resave: false, 
     saveUninitialized: false,
     store: new redisStore({client: redisClient}),
}))

router.post("/tutor/signup", t_signUp)
router.post("/tutor/login", t_login)
router.post("/tutor/:id/profile/create", t_newProfile)
router.put("/tutor/:id/profile/update", t_updProfile)
router.get("/tutor/:id/profile/delete", t_delProfile)
router.get("/tutor/:id/profile", t_getProfile)
router.get("/student/:id/profile", s_getProfile)
router.post("/student/:id/profile/create", s_newProfile)
router.put("/student/:id/profile/update", s_updProfile)
router.get("/student/:id/profile/delete", s_delProfile)
router.post("/student/login", s_login)
router.post("/student/signup", s_signup)
router.get("/logout", (req: any, res: any) => {
    req.session.destroy((err: any) => {
        if (err) {
            return console.log(err);
        }
        res.redirect("/")
    });
    res.send({"status": "user logged out succesfully"})
})
router.get("/yd", (req, res) => {
    res.json({"yhh": "get me lit"})
})


module.exports = router
