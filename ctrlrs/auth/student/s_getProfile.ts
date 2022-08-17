import "../interfaces"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const s_getUser  = async (req: any, res: any) => {
        try{
          const {id} = req.params.id
          const user = await prisma.studentProfile.findUnique({
              where: {
                studentId: id
              },
            })
           if (!user) {
               res.send({"message": "user not found"})   
           }

                res.send({"result": user})
             }
          catch(e) {
            res.sendStatus(500)
          }
          finally{
            prisma.$disconnect()
          }
    }
      
  module.exports = s_getUser