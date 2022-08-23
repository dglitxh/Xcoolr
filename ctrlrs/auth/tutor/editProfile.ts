import "../interfaces"
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()



const updateProfile = async (req: any, res: any): Promise<void>  => {
    try {
        const user_id: number = Number(req.params.id)
        const creds: t_profile = req.body
        let profile = await prisma.teacherProfile.update({
            where: {
                teacherId: user_id
            },
            data: {
                bio: creds.bio,
                rating: creds.rating
              },
        })
        if (profile)
        profile = creds
        res.send({
            "message": "profile updated succesfully",
            "result": profile
        })
    }
    catch(e) {
        console.log(e)
        res.sendStatus(403, "there was an error updating profile")
    }
    finally{
        prisma.$disconnect()
    }
    }

    module.exports = updateProfile