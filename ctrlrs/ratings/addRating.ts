import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

interface rating  {
    s_profileId: number,
    t_profileId: number,
    rating: number
}

const createRating = async (req: any, res: any): Promise<void>  => {
    try {
    // only students can create new ratings
        const body: rating = req.body
        body.t_profileId = Number(req.params.id)
        body.rating = Number(body.rating)
        const newRating = await prisma.ratings.create({
           data: {
            rating: body.rating,
            s_profileId: Number(body.s_profileId),
            t_profileId: body.t_profileId
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