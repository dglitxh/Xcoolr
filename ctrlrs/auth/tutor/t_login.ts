import "../interfaces"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()
const bcrypt = require("bcryptjs")

const login  = async (req: any, res: any) => {
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
                 console.log("res: ", response)
                 console.log(err)
                 res.send({ "message": "Incorrect email or password" })
                 return
               }
               else {
                const sess = req.session
                sess.email = req.body.email
                sess.token = "0958jwfkoa"
                res.send("status: user authenticated succesfully")
               }
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