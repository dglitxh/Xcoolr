import { Router } from "express";


const middleware = require("../middleware/middleware")

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
const updEx = require("./exercises/updEx")
const getSubExs = require("./exercises/getSubExs")
const addExScore = require("./exercises/addExScore")
const updExScore = require("./exercises/updExScore")
const delExScore = require("./exercises/delExScore")
const getExScoresByExId = require("./exercises/getExScoresById")

const createTest = require("./test/createTest")
const delTest = require("./test/delTest")
const getTest = require("./test/getTest")
const updTest = require("./test/updTest")
const getSubTests = require("./test/getSubjTests")
const getTestScores = require("./test/getTestScoresByTid")
const addTestScore = require("./test/addTestScore")
const delTestScore = require("./test/delTestScore")
const updTestScore = require("./test/updTestScore")

const router = Router()
router.use(middleware.authMiddleware)
const teachersOnly = middleware.teachersOnly
const studentsOnly = middleware.studentsOnly

// subject routes
router.post("/tutors/:id/subjects/create", teachersOnly, newSub)
router.put("/subjects/:id/update", teachersOnly, updSub)
router.get("/subjects/:id/delete", teachersOnly, delSub)
router.get("/subjects/:id", getSub)
router.get("/subjects", getAllSubs)

// rating routes 
router.post("/tutors/:id/add_rating", studentsOnly, addRating)
router.get("/tutors/ratings/:id/delete", studentsOnly, delRating)
router.get("/tutors/ratings/:id", studentsOnly, getRating)
router.get("/tutors/:id/ratings", studentsOnly, getAllRating)

// ex routes 
router.post("/subjects/:id/exercise", teachersOnly, newEx)
router.get("/exercises/:id/delete", teachersOnly, delEx)
router.get("/exercises/:id", getEx)
router.put("/exercises/:id/update", teachersOnly, updEx)
router.get("/subjects/:id/exercises", getSubExs)
router.post("/exercises/:id/score", teachersOnly, addExScore)
router.put("/exercises/scores/:id/update", teachersOnly, updExScore)
router.get("/exercises/scores/:id/delete", teachersOnly, delExScore)
router.get("/exercises/:id/scores/all", getExScoresByExId)

// test routes
router.post("/subjects/:id/test", teachersOnly, createTest)
router.get("/tests/:id/delete", teachersOnly, delTest)
router.get("/tests/:id", getTest)
router.put("/tests/:id/update", teachersOnly, updTest)
router.get("/subjects/:id/tests", getSubTests)
router.post("/tests/:id/score", teachersOnly, addTestScore)
router.put("/tests/scores/:id/update", teachersOnly, updTestScore)
router.get("/tests/scores/:id/delete", teachersOnly, delTestScore)
router.get("/tests/:id/scores/all", getTestScores)


module.exports = router
