import { PrismaClient } from '@prisma/client'
import { subtle } from 'crypto'

const prisma = new PrismaClient()


const createEx = async (req: any, res: any): Promise<void>  => {
    try {
    // only teachers can create new exercises
        const id: number = Number(req.params.id)
        const newSub = await prisma.exercise.create({
            data: {
              subjectId: id,
              exName: req.body.exName
            }
        })

        res.status(200).send("new exercise created")
    
    }
    catch(e) {
        console.log(e)
        res.end({"status": "there was an error creating exercise"})
    }
    finally{
        prisma.$disconnect()
    }
    }

    module.exports = createEx