import { Request, Response } from "express"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const getSubExercises  = async (req: Request, res: Response): Promise<void> => {
    // gets all exercises for any give subject
    
        const id: number = Number(req.params.id)
        try{
          const exercises = await prisma.exercise.findMany({
            where: {
                subjectId: id
            }
          })
           if (!exercises) {
               res.status(404).json({status: false, "msg": "Exercises not found"})   
           }

                res.status(200).send({status: true, "result": exercises})
             }
          catch(e) {
            res.status(403).send({status: false, msg: "Exercises were not found due to an error"})
          }
          finally{
            prisma.$disconnect()
          }
    }
      
  module.exports = getSubExercises