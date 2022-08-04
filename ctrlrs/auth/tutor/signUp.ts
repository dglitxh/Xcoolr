import { PrismaClient } from '@prisma/client'
import "../interfaces"

const bcrypt = require("bcryptjs")
const prisma = new PrismaClient()



const signUp = async (req: any, res: any): Promise<void>  => {
    try {
        const salt: string = await bcrypt.genSalt(10)
        const creds: sign_up = req.body
        console.log("data: ", creds)
        creds.password = await bcrypt.hash(creds.password, salt,)

        const newTeacher = await prisma.teacher.create({
            data: {
                email: creds.email,
                name: creds.name,
                password: creds.password
            }
        })

        res.redirect("/profile");
    }
    catch(e) {
        console.log(e)
        res.sendStatus(403, "there was an error authenticating user")
    }
    finally{
        prisma.$disconnect()
    }
    }

    module.exports = signUp