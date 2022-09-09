import { Request, Response } from "express"
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

interface sub  {
    title: string
    description: string
    core: string
    t_profileId: number
}

const updateSubject = async (req: Request, res: Response): Promise<void>  => {
    try {
        const sub_id: number = Number(req.params.id)
        const body: sub = req.body
        let subject = await prisma.subject.update({
            where: {
                id: sub_id
            },
            data: {
                title: body.title,
                description: body.description,
                core: body.core.toLowerCase().trim() == "true"
              },
        })
        if (subject)
        res.status(200).send({"message": body})
    }
    catch(e) {
        console.log(e)
        res.status(403).send("Subject update failed due to an error")
    }
    finally{
        prisma.$disconnect()
    }
    }

    module.exports = updateSubject