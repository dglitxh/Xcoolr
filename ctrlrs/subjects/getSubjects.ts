import { Request, Response } from "express"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const getAllSubjects  = async (req: Request, res: Response): Promise<void> => {
        try{
          const subjects = await prisma.subject.findMany()
           if (!subjects) {
               res.status(404).json({"message": "Subjects not found"})   
           }

                res.send({"result": subjects})
             }
          catch(e) {
            res.status(400).send("Subjects were not found due to an error")
          }
          finally{
            prisma.$disconnect()
          }
    }
      
  module.exports = getAllSubjects