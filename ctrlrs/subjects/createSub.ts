import { PrismaClient } from '@prisma/client'
import "../interfaces"

const prisma = new PrismaClient()

interface sub  {
    title: string
    description: string
    core: boolean
    t_profileId: number
}

const createSub = async (req: any, res: any): Promise<void>  => {
    try {
    // only teachers can create new subjects
        const body: sub = req.body
        const tid: number = req.params.id
        const newSub = await prisma.subject.create({
            data: {
                title: body.title,
                core: body.core,
                description: body.description,
                t_profileId: tid,
            }
        })

        res.send("new subject created")
    
    }
    catch(e) {
        console.log(e)
        res.send({"status": "there was an error creating subject"})
    }
    finally{
        prisma.$disconnect()
    }
    }

    module.exports = createSub