import "../interfaces"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const t_getUser  = async (req: any, res: any) => {
        try{
          const {id} = req.params.id
          const user = await prisma.teacherProfile.findUnique({
              where: {
                teacherId: id
              },
            })
           if (!user) {
               res.send({"message": "user not found"})   
           }

                res.send(user)
             }
          catch(e) {
            res.sendStatus(500)
          }
          finally{
            prisma.$disconnect()
          }
    }
      
  module.exports = t_getUser