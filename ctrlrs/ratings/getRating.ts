import { Request, Response } from "express"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const getRating  = async (req: Request, res: Response): Promise<void>  => {
        try{
          const id = Number(req.params.id)
          const rating = await prisma.rating.findUnique({
              where: {
                id: id
              },
            })
           if (!rating) {
               res.status(404).send({"message": "ratings not found"})   
           }

                res.send({"result": rating})
             }
          catch(e) {
            res.status(401).send("ratings not found due to an error")
          }
          finally{
            prisma.$disconnect()
          }
    }
      
  module.exports = getRating