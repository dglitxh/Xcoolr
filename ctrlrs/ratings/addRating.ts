import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

interface rating  {
    rating: number
}

const createRating = async (req: any, res: any): Promise<void>  => {
    try {
    // only students can create new ratings
        const body: rating = req.body
        body.rating = Number(body.rating)
        const newRating = await prisma.ratings.create({
           data: {
            rating: body.rating
           }

        })

        res.status(200).send("new ratings created")
    
    }
    catch(e) {
        console.log(e)
        res.send({"status": "there was an error creating ratings"})
    }
    finally{
        prisma.$disconnect()
    }
    }

    module.exports = createRating