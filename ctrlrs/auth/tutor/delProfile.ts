import "../interfaces"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const t_delUser  = async (req: any, res: any) => {
        try{
          const id: number = Number(req.params.id)
          const user = await prisma.teacherProfile.delete({
              where: {
                teacherId: id
              },
            })

                res.send("Teacher profile deleted succesfully.")
             }
          catch(e) {
            res.sendStatus(500)
          }
          finally{
            prisma.$disconnect()
          }
    }
      
  module.exports = t_delUser