import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

interface ex_score  {
    testId: number
    s_profileId: number 
    score: number
}

const addTestScore = async (req: any, res: any): Promise<void>  => {
    try {
    // only teachers can create new ex_scores
        const body: ex_score = req.body
        const id: number = Number(req.params.id)
        const chkScore = await prisma.testScores.findFirst({
            where: {
                testId: id,
                s_profileId: Number(body.s_profileId)
            }
        })

        if (chkScore) res.end("Student has already been scored, try updating score")

       else {
        const newScore = await prisma.testScores.create({
            data: {
              testId: id,
              s_profileId: Number(body.s_profileId),
              score: Number(body.score)
            }
        })

        res.status(200).send("new test score created")
    }
    }
    catch(e) {
        console.log(e)
        res.status(401).end("there was an error creating test score")
    }
    finally{
        prisma.$disconnect()
    }
    }

    module.exports = addTestScore