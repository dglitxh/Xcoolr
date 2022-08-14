import { PrismaClient } from '@prisma/client'
import "../interfaces"

const prisma = new PrismaClient()

interface sub  {
    title: string
    description: string
    core: boolean
}

const createSub = async (req: any, res: any): Promise<void>  => {
    try {
    
        const body: sub = req.body
        
        const newSub = await prisma.subject.create({
            body: {
                title: body.title,
                description: body.description,
                core: body.core
            }
        })

        res.send("new subject created")
        res.redirect("/");
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