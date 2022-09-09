import { Request, Response } from "express"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const getTest  = async (req: Request, res: Response): Promise<void>  => {
        try{
          const id = Number(req.params.id)
          const test = await prisma.test.findUnique({
              where: {
                id: id
              },
            })
           if (!test) {
               res.status(404).send({"message": "test not found"})   
           }

                res.send({"result": test})
             }
          catch(e) {
            res.status(401).end("test not found due to an error")
          }
          finally{
            prisma.$disconnect()
          }
    }
      
  module.exports = getTest