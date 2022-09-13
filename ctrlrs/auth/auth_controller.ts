import { Router } from "express";
const middleware = require("../../middleware/middleware")

require("dotenv").config()
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


router.post("/tutor/signup", t_signUp)
router.post("/tutor/login", t_login)
router.post("/student/login", s_login)
router.post("/student/signup", s_signup)
router.get("/logout", (req: any, res: any) => {
    req.session.destroy((err: any) => {
        if (err) {
            return console.log(err);
        }
        res.redirect("/")
    });
    res.status(200).send("user logged out succesfully")
})
router.get("/yd", (req, res) => {
    res.json({"yhh": "get me lit"})
})

const r = router.use(middleware.authMiddleware)
r.get("/tutor/:id/profile", t_getProfile)
r.get("/student/:id/profile", s_getProfile)
r.post("/tutor/:id/profile/create", t_newProfile)
r.put("/tutor/:id/profile/update", t_updProfile)
r.get("/tutor/:id/profile/delete", t_delProfile)
r.post("/student/:id/profile/create", s_newProfile)
r.put("/student/:id/profile/update", s_updProfile)
r.get("/student/:id/profile/delete", s_delProfile)

module.exports = router
