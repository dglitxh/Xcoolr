import { PrismaClient } from '@prisma/client'
import { subtle } from 'crypto'

const prisma = new PrismaClient()

interface sub  {
    title: string
    description: string
    core: string
    t_profileId: number
}

const createSub = async (req: any, res: any): Promise<void>  => {
    try {
    // only teachers can create new subjects
        const body: sub = req.body
        const tid: number = Number(req.params.id)
        body.t_profileId = tid
        const newSub = await prisma.subject.create({
            data: {
                title: body.title,
                core: body.core.toLowerCase().trim() == "true",
                description: body.description,
                t_profileId: body.t_profileId,
            }
        })

        res.status(200).send("new subject created")
    
    }
    catch(e) {
        console.log(e)
        res.status(401).send({"status": "there was an error creating subject"})
    }
    finally{
        prisma.$disconnect()
    }
    }

    module.exports = createSub