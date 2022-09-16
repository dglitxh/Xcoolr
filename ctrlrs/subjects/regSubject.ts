
import { PrismaClient } from "@prisma/client"
import { Request, Response } from "express"

const prisma = new PrismaClient()

const regSubject = async (req: Request, res: Response): Promise<void> => {

   try {
        const subId = Number(req.params.id)
        const chkStud = await prisma.studentSubjects.findMany({
            where: {
                subjectId: subId,
                s_profileId: Number(req.body.s_profileId)
            }
        })
        if (chkStud) {
            res.end("Student has already registered for subject")
        } else {
            const register = await prisma.studentSubjects.create({
                data: {
                    subjectId: subId,
                    s_profileId: Number(req.body.s_profileId)
                }
            })
            res.status(200).end("Student has been registered for subject")
        }
    }
    catch (e) {
        res.status(400).end("There was an error registering student for subject")
    }
    finally {
        prisma.$disconnect()
    }
}

module.exports = regSubject