import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const redis = require("../../../config/config")
const JWT = require("../../../helpers/jwt")
const sendEmail = require("../../../helpers/mailer")

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
        redis.set("jwt", jwt)
    const subject = "Xcoolr Account password change"
    const msg = `<p> Use the link below to change your account password </p>
                </br> 
                <a href="localhost:4000/auth/forgot_pass" target=blank>click here</a>`
    sendEmail(email, subject, msg)

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