import { PrismaClient } from '@prisma/client'
import { subtle } from 'crypto'

const prisma = new PrismaClient()


const createTest = async (req: any, res: any): Promise<void>  => {
    try {
    // only teachers can create new tests
        const id: number = Number(req.params.id)
        const newSub = await prisma.test.create({
            data: {
              subjectId: id
            }
        })

        res.status(200).send("new test created")
    
    }
    catch(e) {
        console.log(e)
        res.send({"status": "there was an error creating test"})
    }
    finally{
        prisma.$disconnect()
    }
    }

    module.exports = createTest