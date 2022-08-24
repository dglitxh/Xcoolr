import { Request, Response } from "express"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const getAllRatings  = async (req: Request, res: Response): Promise<void> => {
        try{
          const ratings = await prisma.ratings.findMany()

                res.send({"result": ratings})
             }
          catch(e) {
            res.status(400).send("ratings were not found due to an error")
          }
          finally{
            prisma.$disconnect()
          }
    }
      
  module.exports = getAllRatings