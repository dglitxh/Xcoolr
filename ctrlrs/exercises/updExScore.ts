import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

interface ex_score  {
    exId: number
    s_profileId: number 
    score: number
}

const updExScore = async (req: any, res: any): Promise<void>  => {
    try {
    // only teachers can create new ex_scores
        const body: ex_score = req.body
        const id: number = Number(req.params.id)
        const updScore = await prisma.exScores.update({
            where: {
                id: id,
            },
            data: {
              exId: body.exId,
              s_profileId: body.s_profileId,
              score: body.score
            }
        })

        res.status(200).end("new exercise score updated")
    
    }
    catch(e) {
        console.log(e)
        res.send({"status": "there was an error updating exercise score"})
    }
    finally{
        prisma.$disconnect()
    }
    }

    module.exports = updExScore