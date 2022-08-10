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

        const newTeacher = await prisma.student.create({
            data: {
                email: creds.email,
                name: creds.name,
                password: creds.password
            }
        })
        res.send("new student account created")
        res.redirect("/");
    }
    catch(e) {
        console.log(e)
        res.send({"status": "there was an error authenticating user"})
    }
    finally{
        prisma.$disconnect()
    }
    }

    module.exports = signUp