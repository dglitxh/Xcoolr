import "../interfaces"
import { PrismaClient } from "@prisma/client"
import { uuid } from "uuidv4"
import { session } from "passport"

const prisma = new PrismaClient()
const bcrypt = require("bcryptjs")

const t_login  = async (req: any, res: any) => {
        try{
          const creds: log_in = req.body
          const user = await prisma.teacher.findUnique({
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

                const sess = req.session;
                sess.user = user.id
                sess.email = creds.email
                sess.token = uuid()

                res.send({"status": "user authenticated succesfully"})
             });

          }
          catch(e) {
            res.status(403).end("There was an authentication error")
          }
          finally{
            prisma.$disconnect()
          }
    }
      
  module.exports = t_login