import "../interfaces"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const t_getUser  = async (req: any, res: any) => {
        try{
          const id: number = Number(req.params.id)
          const user = await prisma.teacherProfile.findUnique({
              where: {
                teacherId: id
              },
            })
           if (!user) {
               res.send({"message": "user not found"})   
           }

                res.send({"result": user})
             }
          catch(e) {
            res.status(403).send("There was a problem finding user profile")
          }
          finally{
            prisma.$disconnect()
          }
    }
      
  module.exports = t_getUser