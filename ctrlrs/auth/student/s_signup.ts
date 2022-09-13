import { PrismaClient } from '@prisma/client'
import { v4 } from "uuid"
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
        sess.role = newTeacher.role
        sess.email = creds.email
        sess.token = v4()

        res.send("new student account created")
        res.redirect("/");
    }
    catch(e) {
        console.log(e)
        res.status(403).end("there was an error authenticating user")
    }
    finally{
        prisma.$disconnect()
    }
    }

    module.exports = signUp