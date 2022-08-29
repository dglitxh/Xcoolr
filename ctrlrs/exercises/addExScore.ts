import { PrismaClient } from '@prisma/client'
import { subtle } from 'crypto'
import { setgid } from 'process'

const prisma = new PrismaClient()

interface ex_score  {
    exId: number
    s_profileId: number 
    score: number
}

const addExScore = async (req: any, res: any): Promise<void>  => {
    try {
    // only teachers can create new ex_scores
        const body: ex_score = req.body
        const id: number = Number(req.params.id)
        const newScore = await prisma.exScores.create({
            data: {
              exId: id,
              s_profileId: body.s_profileId,
              score: body.score
            }
        })

        res.status(200).send("new exercise score created")
    
    }
    catch(e) {
        console.log(e)
        res.send({"status": "there was an error creating exercise score"})
    }
    finally{
        prisma.$disconnect()
    }
    }

    module.exports = addExScore