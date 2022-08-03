import { Router } from "express";

const t_login = require("./tutor/t_login")
const t_signUp = require("./tutor/signUp")
const passport = require("passport")
const localStrategy = require("passport-local")
const router = Router()

router.post("/tutor/signup", t_signUp)
router.post("/tutor/login", passport.authenticate())
router.get("/yd", (req, res) => {
    res.json({"yhh": "get me lit"})
})
passport.use("/tutor/login", new localStrategy(t_login))

module.exports = router
