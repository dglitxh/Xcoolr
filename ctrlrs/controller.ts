import { Router } from "express";

const router = Router()

const newSub = require("./subjects/createSub")
const updSub = require("./subjects/updSubject")
const delSub = require("./subjects/delSub")
const getSub = require("./subjects/getSub")
const getAllSubs = require("./subjects/getSubjects")

const addRating = require("./ratings/addRating")
const getRating = require("./ratings/getRating")
const delRating = require("./ratings/delRating")
const getAllRating = require("./ratings/getAllRatings")

const newEx = require("./exercises/newEx")
const delEx = require("./exercises/delEx")
const getEx = require("./exercises/getEx")
const getSubExs = require("./exercises/getSubExs")
const addExScore = require("./exercises/addExScore")
const updExScore = require("./exercises/updExScore")
const delExScore = require("./exercises/delExScore")
const getExScoresByExId = require("./exercises/getExScoresById")

const createTest = require("./test/createTest")
const delTest = require("./test/delTest")
const getTest = require("./test/getTest")
const getSubTests = require("./test/getSubjTests")
const getTestScores = require("./test/getTestScoresByTid")
const addTestScore = require("./test/addTestScore")
const delTestScore = require("./test/delTestScore")
const updTestScore = require("./test/updTestScore")


// subject routes
router.post("/subjects/tutor/:id/create", newSub)
router.put("/subjects/tutor/:id/update", updSub)
router.get("/subjects/tutor/:id/delete", delSub)
router.get("/subjects/:id", getSub)
router.get("/subjects", getAllSubs)

// rating routes 
router.post("/tutors/:id/add_rating", addRating)
router.get("/tutors/ratings/:id/delete", delRating)
router.get("/tutors/ratings/:id", getRating)
router.get("/tutors/:id/ratings", getAllRating)

// ex routes 
router.post("/subjects/:id/exercise", newEx)
router.get("/exercises/:id/delete", delEx)
router.get("/exercises/:id", getEx)
router.get("/subjects/:id/exercises", getSubExs)
router.post("/exercises/:id/score", addExScore)
router.put("/exercises/scores/:id/update", updExScore)
router.get("/exercises/scores/:id/delete", delExScore)
router.get("exercises/:id/scores/all", getExScoresByExId)

// test routes
router.post("/subjects/:id/test", createTest)
router.get("/tests/:id/delete", delTest)
router.get("/tests/:id", getTest)
router.get("/subjects/:id/tests", getSubTests)
router.post("/tests/:id/add_score", addTestScore)
router.put("/tests/scores/:id/upd_test_score", updTestScore)
router.get("/tests/scores/:id/delete", delTestScore)
router.get("/tests/:id/scores/all", getTestScores)


module.exports = router
