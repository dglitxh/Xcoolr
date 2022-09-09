
import { PrismaClient } from "@prisma/client"
import { Request, Response } from "express"

const prisma = new PrismaClient()

const delEx  = async (req: Request, res: Response): Promise<void> => {
        try{
          const id = Number(req.params.id)
          const exercise = await prisma.exercise.delete({
              where: {
                id: id
              },
            })

                res.status(200).json({"result": "Exercise deleted succesfully"})
             }
          catch(e) {
            res.status(403).end({"status": "Exercise could not be deleted due to an error"})
          }
          finally{
            prisma.$disconnect()
          }
    }
      
  module.exports = delEx