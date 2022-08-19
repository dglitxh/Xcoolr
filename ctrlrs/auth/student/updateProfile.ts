import "../interfaces"
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()



const updateProfile = async (req: any, res: any): Promise<void>  => {
    try {
        const user_id: number = Number(req.params.id)
        const creds: s_profile = req.body
        let profile = await prisma.studentProfile.update({
            where: {
                studentId: user_id
            },
            data: {
                bio: creds.bio,
              },
        })
        if (profile)
        profile = creds
        res.send({"message": "profile updated succesfully"})
    }
    catch(e) {
        console.log(e)
        res.status(403).send("Profile update failed due to an error")
    }
    finally{
        prisma.$disconnect()
    }
    }

    module.exports = updateProfile