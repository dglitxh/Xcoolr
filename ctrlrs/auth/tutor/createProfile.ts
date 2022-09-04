import "../interfaces"
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()



const createProfile = async (req: any, res: any): Promise<void>  => {
    try {
        const user_id: number = req.params.id
        const creds: t_profile = req.body
        creds.teacherId = Number(user_id)
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
        res.status(403).send("there was an error authenticating user")
    }
    finally{
        prisma.$disconnect()
    }
    }

    module.exports = createProfile