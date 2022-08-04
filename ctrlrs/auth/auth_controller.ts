import { Router } from "express";
import passportCustom from 'passport-custom';
const CustomStrategy = passportCustom.Strategy;


require("dotenv").config()
const passport = require("passport")
const session = require("express-session")
const router = Router()
const t_login = require("./tutor/t_login")(passport)
const t_signUp = require("./tutor/signUp")(passport)


router.use(session({ secret: process.env.SESSION_SECRET, resave: false, saveUninitialized:true}))
router.use(passport.initialize());
router.use(passport.session());
router.post("/tutor/signup", t_signUp)
router.post("/tutor/login", passport.authenticate("custom", {
    successRedirect: "/",
    failureRedirect: "/"
  }))
router.get("/yd", (req, res) => {
    res.json({"yhh": "get me lit"})
})
passport.use("/tutor/login", new CustomStrategy(t_login))

module.exports = router
