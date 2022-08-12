import "../interfaces"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const s_delUser  = async (req: any, res: any) => {
        try{
          const {id} = req.params.id
          const user = await prisma.studentProfile.delete({
              where: {
                studentId: id
              },
            })

                res.send("Student profile deleted succesfully.")
             }
          catch(e) {
            res.sendStatus(500)
          }
          finally{
            prisma.$disconnect()
          }
    }
      
  module.exports = s_delUser