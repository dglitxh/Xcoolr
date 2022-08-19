import { PrismaClient } from '@prisma/client'
import "../interfaces"

const bcrypt = require("bcryptjs")
const prisma = new PrismaClient()



const signUp = async (req: any, res: any): Promise<void>  => {
    try {
        const salt: string = await bcrypt.genSalt(10)
        const creds: sign_up = req.body
        creds.password = await bcrypt.hash(creds.password, salt,)
        const newTeacher = await prisma.student.create({
            data: {
                email: creds.email,
                name: creds.name,
                password: creds.password
            }
        })
        const sess = req.session
        sess.user = newTeacher.id
        sess.email = creds.email
        sess.token = "0958jwfkoa"

        res.send("new student account created")
        res.redirect("/");
    }
    catch(e) {
        console.log(e)
        res.end("there was an error authenticating user")
    }
    finally{
        prisma.$disconnect()
    }
    }

    module.exports = signUp