import "../interfaces"
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()



const createProfile = async (req: any, res: any): Promise<void>  => {
    try {
        const user_id: number = req.params.id
        const creds: t_profile = req.body
        creds.teacherId = user_id
        const profile = await prisma.teacherProfile.create({
            data: {
                bio: creds.bio,
                teacherId: creds.teacherId,
                rating: creds.rating
            }
        })

        res.send({
            "message": "profile created succesfully",
            "result": profile
        })
    }
    catch(e) {
        console.log(e)
        res.sendStatus(403, "there was an error authenticating user")
    }
    finally{
        prisma.$disconnect()
    }
    }

    module.exports = createProfile