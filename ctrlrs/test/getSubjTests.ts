import { Request, Response } from "express"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const getSubTests  = async (req: Request, res: Response): Promise<void> => {
    // gets all test for any give subject
    
        const id: number = Number(req.params.id)
        try{
          const test = await prisma.test.findMany({
            where: {
                subjectId: id
            }
          })
           if (!test) {
               res.status(404).json({"message": "test not found"})   
           }

                res.send({"result": test})
             }
          catch(e) {
            res.status(401).send("tests were not found due to an error")
          }
          finally{
            prisma.$disconnect()
          }
    }
      
  module.exports = getSubTests