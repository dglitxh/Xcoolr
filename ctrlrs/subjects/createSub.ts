import { PrismaClient } from '@prisma/client'
import "../interfaces"

const prisma = new PrismaClient()

interface sub  {
    title: string
    description: string
    core: boolean
    t_profileId: number
    s_profileId: number
}

const createSub = async (req: any, res: any): Promise<void>  => {
    try {
    
        const body: sub = req.body
        const t: number = req.params.t_profileId
        const s: number = req.params.s_profileId
        const newSub = await prisma.subject.create({
            data: {
                title: body.title,
                core: body.core,
                description: body.description,
                t_profileId: t,
                s_profileId: s,
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