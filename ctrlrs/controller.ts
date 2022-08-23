import { Router } from "express";

const router = Router()
const newSub = require("./subjects/createSub")
const updSub = require("./subjects/updSubject")
const delSub = require("./subjects/delSub")
const getSub = require("./subjects/getSub")
const getAllSubs = require("./subjects/getSubjects")


router.post("/subjects/tutor/:id/create", newSub)
router.put("/subjects/tutor/:id/update", updSub)
router.get("/subjects/tutor/:id/delete", delSub)
router.get("/subjects/:id", getSub)
router.get("/subjects", getAllSubs)

module.exports = router
