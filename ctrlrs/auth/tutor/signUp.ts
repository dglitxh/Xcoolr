import { PrismaClient } from '@prisma/client'
import "../interfaces"

const bcrypt = require("bcryptjs")
const prisma = new PrismaClient()



const signUp = async (req: any, res: any): Promise<void>  => {
    const salt: string = await bcrypt.genSalt(10)
    const creds: sign_up = req.body
    creds.password = await bcrypt.hash(creds.password, salt)

    const newTeacher = await prisma.teacher.create({
        data: {
            email: creds.email,
            name: creds.name,
            password: creds.password
        }
    })

    res.redirect("/profile")
}