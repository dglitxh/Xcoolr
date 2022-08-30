import { Request, Response } from "express"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const getExScoresByExId  = async (req: Request, res: Response): Promise<void> => {
        try{
          const id: number = Number(req.params.id)
          const ExScores = await prisma.exScores.findMany({
            where: {
                exId: id
            }
          })
           if (!ExScores) {
               res.status(404).json({"message": "ExScores not found"})   
           }

                res.send({"result": ExScores})
             }
          catch(e) {
            res.status(400).send("ExScores were not found due to an error")
          }
          finally{
            prisma.$disconnect()
          }
    }
      
  module.exports = getExScoresByExId