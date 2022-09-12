import "../interfaces"
import { PrismaClient } from "@prisma/client"
import { v4 } from "uuid"

const prisma = new PrismaClient()
const bcrypt = require("bcryptjs")

const s_login  = async (req: any, res: any) => {
        try{
          const creds: log_in = req.body
          const user = await prisma.student.findUnique({
              where: {
                email: creds.email,
              },
            })
           if (!user) {
               res.send({"message": "Incorrect email or password"})   
           }
           if (user)
           bcrypt.compare(creds.password, user.password, (err: any, response: any) => {
               if (!response) {
                 // passwords do not match!
                 res.status(401).send({ "message": "Incorrect email or password" })
                 return
               }

                const sess = req.session
                sess.user = user.id
                sess.email = creds.email
                sess.role = user.role
                sess.token = v4()

                res.send({"status": "user authenticated succesfully"})
             });

          }
          catch(e) {
            res.status(403).end("Sorry there was and authentication error")
          }
          finally{
            prisma.$disconnect()
          }
    }
      
  module.exports = s_login