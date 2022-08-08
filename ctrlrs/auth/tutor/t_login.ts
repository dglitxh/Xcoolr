import "../interfaces"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()
const bcrypt = require("bcryptjs")

const login  = async (req: any, res: any) => {
  console.log("i'm tryna login")
        try{
          const creds: log_in = req.body
          console.log("creds")
          const user = await prisma.teacher.findUnique({
              where: {
                email: creds.email,
              },
            })
           if (!user) {
               res.send({"message": "Incorrect email or password"})   
           }
           console.log("user?")
           if (user)
           bcrypt.compare(creds.password, user.password, (err: any, response: any) => {
               if (!response) {
                 // passwords do not match!
                 res.status(401).send({ "message": "Incorrect email or password" })
             
               }

                console.log("i am a user!")
                const sess = req.session
                sess.email = creds.email
                sess.token = "0958jwfkoa"

                res.send("status: user authenticated succesfully")
             });

          }
          catch(e) {
            res.sendStatus(500)
          }
          finally{
            prisma.$disconnect()
          }
    }
      
  module.exports = login