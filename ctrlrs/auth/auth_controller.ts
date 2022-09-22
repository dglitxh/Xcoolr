import { Router } from "express";
const middleware = require("../../middleware/middleware")

require("dotenv").config()
const router = Router()

const t_login = require("./teacher/t_login")
const t_signUp = require("./teacher/signUp")
const t_newProfile = require("./teacher/createProfile")
const t_updProfile = require("./teacher/editProfile")
const t_delProfile = require("./teacher/delProfile")
const t_getProfile = require("./teacher/t_getUser")
const s_newProfile = require("./student/newProfile")
const s_updProfile = require("./student/updateProfile")
const s_delProfile = require("./student/s_delProfile")
const s_getProfile = require("./student/s_getProfile")
const s_login = require("./student/s_login")
const s_signup = require("./student/s_signup")
const s_forgotPwd = require("./student/forgotPwdSt")
const s_changePwd = require("./student/changePwdSt")
const t_changePwd = require("./teacher/changePwdTe")
const t_forgotPwd = require("./teacher/forgotPwdTe")

router.post("/teacher/signup", t_signUp)
router.post("/teacher/login", t_login)
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
router.post("/student/forgot_pass", s_forgotPwd)
router.post("/student/:id/update_pass", s_changePwd)
router.post("/teacher/forgot_pass", t_forgotPwd)
router.post("/teacher/:id/update_pass", t_changePwd)


const r = router.use(middleware.authMiddleware)
r.get("/teacher/:id/profile", t_getProfile)
r.get("/student/:id/profile", s_getProfile)
r.post("/teacher/:id/profile/create", t_newProfile)
r.put("/teacher/:id/profile/update", t_updProfile)
r.get("/teacher/:id/profile/delete", t_delProfile)
r.post("/student/:id/profile/create", s_newProfile)
r.put("/student/:id/profile/update", s_updProfile)
r.get("/student/:id/profile/delete", s_delProfile)

module.exports = router
