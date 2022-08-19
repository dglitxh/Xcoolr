import "../interfaces"
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()



const createProfile = async (req: any, res: any): Promise<void>  => {
    try {
        const user_id: number = req.params.id
        const creds: s_profile = req.body
        creds.studentId = Number(user_id)
        const profile = await prisma.studentProfile.create({
            data: {
                bio: creds.bio,
                studentId: creds.studentId,
                
            }
        })

        res.send({"message": "profile created succesfully"})
    }
    catch(e) {
        console.log(e)
        res.status(403).send("User profile could not be created")
    }
    finally{
        prisma.$disconnect()
    }
    }

    module.exports = createProfile