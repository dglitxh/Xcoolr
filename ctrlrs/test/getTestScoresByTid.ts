import { Request, Response } from "express"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const getTestScoresByTid  = async (req: Request, res: Response): Promise<void> => {
        try{
          const id: number = Number(req.params.id)
          const testScores = await prisma.testScores.findMany({
            where: {
                testId: id
            }
          })
           if (!testScores) {
               res.status(404).send("Test scores not found")   
           }

                res.send({"result": testScores})
             }
          catch(e) {
            res.status(401).end("Test scores were not found due to an error")
          }
          finally{
            prisma.$disconnect()
          }
    }
      
  module.exports = getTestScoresByTid