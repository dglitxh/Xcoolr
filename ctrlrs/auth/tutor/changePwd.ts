import { PrismaClient } from '@prisma/client'
import { v4 } from "uuid"
import "../interfaces"

const bcrypt = require("bcryptjs")
const prisma = new PrismaClient()



const changePwdT = async (req: any, res: any): Promise<void>  => {
    try {
        const salt: string = await bcrypt.genSalt(10)
        const password = await bcrypt.hash(req.body.password, salt,)
        const id = req.params.id

        const updPwd = await prisma.teacher.update({
            where: {
                id: id
            },
            data: {
                password: password
            }
        })

        res.status(200).send("user password updated!")
        res.redirect("/");
    }
    catch(e) {
        console.log(e)
        res.status(403).end("there was an error updating password")
    }
    finally{
        prisma.$disconnect()
    }
    }

    module.exports = changePwdT