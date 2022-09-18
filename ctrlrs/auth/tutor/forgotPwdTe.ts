import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const redis = require("../../../config/config")
const JWT = require("../../../helpers/jwt")
const mailer = require("../../../helpers/mailer")

const prisma = new PrismaClient()
const forgot = async (req: Request, res: Response): Promise<void> => {
   try {
     const email = req.body.email 

    const user = await prisma.teacher.findUnique({
        where: {
            email: email
        }
    })

    if (!user) {
        res.status(404).end("User with this email not found")
        return
    }else {
        const jwt = JWT.signJwt()
        redis.set("jwt", jwt, {
        EX: 600
    })
    const subject = "Xcoolr Account password change"
    const msg = ``
    mailer.sendEmail(email, subject, msg)

    }
    
    res.send("A link to change your password has been sent to your email")


} catch (e) {
    console.log(e)
    res.status(400).send("There was an error processing password change request")
} finally {
    prisma.$disconnect()
}

    
}

module.exports = forgot