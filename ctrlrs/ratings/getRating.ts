import { Request, Response } from "express"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const getRatings  = async (req: Request, res: Response): Promise<void>  => {
        try{
          const id = Number(req.params.id)
          const ratings = await prisma.ratings.findUnique({
              where: {
                id: id
              },
            })
           if (!ratings) {
               res.status(404).send({"message": "ratings not found"})   
           }

                res.send({"result": ratings})
             }
          catch(e) {
            res.status(400).send("ratings not found due to an error")
          }
          finally{
            prisma.$disconnect()
          }
    }
      
  module.exports = getRatings