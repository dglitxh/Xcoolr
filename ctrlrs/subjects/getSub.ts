import { Request, Response } from "express"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const getSubject  = async (req: Request, res: Response): Promise<void>  => {
        try{
          const id = Number(req.params.id)
          const subject = await prisma.subject.findUnique({
              where: {
                id: id
              },
            })
           if (!subject) {
               res.status(404).send({"message": "Subject not found"})   
           }

                res.send({"result": subject})
             }
          catch(e) {
            res.status(401).send("Subject not found due to an error")
          }
          finally{
            prisma.$disconnect()
          }
    }
      
  module.exports = getSubject