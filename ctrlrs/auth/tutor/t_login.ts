import "../interfaces"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()
const bcrypt = require("bcryptjs")

const login  = async (req: any, res: any,  done: CallableFunction) => {
        const creds: log_in = req.body
        const user = await prisma.teacher.findUnique({
            where: {
              email: creds.email,
            },
          })
              
           if (!user) {
               return done(null, false, {message: "Incorrect email or password"})   
           }
           bcrypt.compare(creds.password, user.password, (err: any, res: any) => {
               if (res) {
                 // passwords match! log user in
                 return done(null, user)
               } else {
                 // passwords do not match!
                 return done(null, false, { message: "Incorrect email or password" })
               }
             })
           return done(null, user)
            }
  
  
        
  module.exports = login